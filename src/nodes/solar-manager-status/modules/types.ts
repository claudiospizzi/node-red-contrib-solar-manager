import { Node, NodeDef } from 'node-red';
import { SolarManager } from '../../../modules/SolarManager';
import { SolarManagerConfigNode } from '../../solar-manager-config/modules/types';
import { SolarManagerStatusOptions } from '../shared/types';

export interface SolarManagerStatusNodeDef extends NodeDef, SolarManagerStatusOptions {}

export interface SolarManagerStatusNode extends Node {
  solarManagerConfig: SolarManagerConfigNode;
  solarManager: SolarManager;
}
