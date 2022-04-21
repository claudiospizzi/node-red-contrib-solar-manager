import { Node, NodeDef } from 'node-red';
import { SolarManagerConfigNode } from '../../solar-manager-config/modules/types';
import { SolarManagerGatewayStatusOptions } from '../shared/types';

export interface SolarManagerGatewayStatusNodeDef extends NodeDef, SolarManagerGatewayStatusOptions {}

export interface SolarManagerGatewayStatusNode extends Node {
  solarManager: SolarManagerConfigNode;
}
