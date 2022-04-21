import { NodeInitializer } from 'node-red';
import { SolarManager, SolarManagerGatewayData, SolarManagerGatewayInfo } from '../../modules/solar-manager';
import { SolarManagerConfigNode } from '../solar-manager-config/modules/types';
import { SolarManagerGatewayStatusNode, SolarManagerGatewayStatusNodeDef } from './modules/types';

const nodeInit: NodeInitializer = (RED): void => {
  function SolarManagerGatewayStatusNodeConstructor(this: SolarManagerGatewayStatusNode, config: SolarManagerGatewayStatusNodeDef): void {
    RED.nodes.createNode(this, config);
    this.solarManager = RED.nodes.getNode(config.solarManager) as SolarManagerConfigNode;

    this.on('input', (msg, send, done) => {
      this.status({ fill: 'blue', shape: 'dot', text: 'running' });

      const solarManager = new SolarManager(this.solarManager.solar_manager_id, this.solarManager.username, this.solarManager.password);

      const msgPayload = {
        info: {},
        data: {},
      }

      solarManager.getGatewayInfo()
        .then((gatewayInfo) => {
          msgPayload.info = gatewayInfo; // Not working, scoping
        })
        .catch((error) => {
          this.status({ fill: 'red', shape: 'dot', text: 'failed' });

          done(error);
        });

      solarManager.getGatewayData()
        .then((gatewayData) => {
          msgPayload.data = gatewayData; // Not working, scoping
        })
        .catch((error) => {
          this.status({ fill: 'red', shape: 'dot', text: 'failed' });

          done(error);
        });

      this.status({ fill: 'green', shape: 'dot', text: 'successful' });

      msg.payload = msgPayload;

      send(msg);
      done();
    });
  }

  RED.nodes.registerType('solar-manager-gateway-status', SolarManagerGatewayStatusNodeConstructor);
};

export = nodeInit;
