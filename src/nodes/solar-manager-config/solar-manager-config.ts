import { NodeInitializer } from 'node-red';
import { SolarManagerConfigNode, SolarManagerConfigNodeDef } from './modules/types';

const nodeInit: NodeInitializer = (RED): void => {
  function SolarManagerConfigNodeConstructor(this: SolarManagerConfigNode, config: SolarManagerConfigNodeDef): void {
    RED.nodes.createNode(this, config);
    this.solarManagerId = config.solarManagerId;
    this.username = config.username;
    this.password = config.password;
  }

  RED.nodes.registerType('solar-manager-config', SolarManagerConfigNodeConstructor);
};

export = nodeInit;
