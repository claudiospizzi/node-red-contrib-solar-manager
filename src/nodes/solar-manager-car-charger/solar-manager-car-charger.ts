import { NodeInitializer } from 'node-red';
import { SolarManager } from '../../modules/SolarManager';
import { SolarManagerConfigNode } from '../solar-manager-config/modules/types';
import { SolarManagerCarChargerNode, SolarManagerCarChargerNodeDef } from './modules/types';

const nodeInit: NodeInitializer = (RED): void => {
  function SolarManagerCarChargerNodeConstructor(
    this: SolarManagerCarChargerNode,
    config: SolarManagerCarChargerNodeDef,
  ): void {
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
        this.solarManager.setCarChargerMode(config.carChargerId, config.carChargerMode);

        this.status({ fill: 'green', shape: 'dot', text: 'successful' });
        send(msg);
        done();
      } catch (error) {
        this.status({ fill: 'red', shape: 'dot', text: 'failed' });
        done(error instanceof Error ? error : new Error(`Unknown: ${error}`));
      }
    });
  }

  RED.nodes.registerType('solar-manager-car-charger', SolarManagerCarChargerNodeConstructor);
};

export = nodeInit;
