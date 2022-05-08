import { Node, NodeDef } from 'node-red';
import { SolarManager } from '../../../modules/SolarManager';
import { SolarManagerConfigNode } from '../../solar-manager-config/modules/types';
import { SolarManagerSwitchOptions } from '../shared/types';

export interface SolarManagerSwitchNodeDef extends NodeDef, SolarManagerSwitchOptions {}

export interface SolarManagerSwitchNode extends Node {
  solarManagerConfig: SolarManagerConfigNode;
  solarManager: SolarManager;
  switchId: string;
  switchMode: number;
}
