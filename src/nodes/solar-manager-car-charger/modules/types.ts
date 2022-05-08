import { Node, NodeDef } from 'node-red';
import { SolarManager } from '../../../modules/SolarManager';
import { SolarManagerConfigNode } from '../../solar-manager-config/modules/types';
import { SolarManagerCarChargerOptions } from '../shared/types';

export interface SolarManagerCarChargerNodeDef extends NodeDef, SolarManagerCarChargerOptions {}

export interface SolarManagerCarChargerNode extends Node {
  solarManagerConfig: SolarManagerConfigNode;
  solarManager: SolarManager;
  carChargerId: string;
  carChargerMode: number;
}
