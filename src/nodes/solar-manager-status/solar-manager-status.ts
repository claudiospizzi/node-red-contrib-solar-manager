import { NodeInitializer } from 'node-red';
import { SolarManager } from '../../modules/SolarManager';
import { SolarManagerConfigNode } from '../solar-manager-config/modules/types';
import { SolarManagerStatusNode, SolarManagerStatusNodeDef } from './modules/types';

const nodeInit: NodeInitializer = (RED): void => {
  function SolarManagerStatusNodeConstructor(this: SolarManagerStatusNode, config: SolarManagerStatusNodeDef): void {
    RED.nodes.createNode(this, config);
    this.solarManagerConfig = RED.nodes.getNode(config.solarManagerConfig) as SolarManagerConfigNode;
    this.solarManager = new SolarManager(
      this.solarManagerConfig.solarManagerId,
      this.solarManagerConfig.username,
      this.solarManagerConfig.password,
    );

    this.on('input', async (msg, send, done) => {
      this.status({ fill: 'blue', shape: 'dot', text: 'running' });
      try {
        msg.payload = {
          gateway: await this.solarManager.getGatewayInfo(),
          devices: await this.solarManager.getDeviceInfo(),
        };

        this.status({ fill: 'green', shape: 'dot', text: 'successful' });
        send(msg);
        done();
      } catch (error) {
        this.status({ fill: 'red', shape: 'dot', text: 'failed' });
        done(error instanceof Error ? error : new Error(`Unknown: ${error}`));
      }
    });
  }

  RED.nodes.registerType('solar-manager-status', SolarManagerStatusNodeConstructor);
};

export = nodeInit;
