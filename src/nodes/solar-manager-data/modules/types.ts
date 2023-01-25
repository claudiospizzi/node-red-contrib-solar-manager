import { Node, NodeDef } from 'node-red';
import { SolarManager } from '../../../modules/SolarManager';
import { SolarManagerConfigNode } from '../../solar-manager-config/modules/types';
import { SolarManagerDataOptions } from '../shared/types';

export interface SolarManagerDataNodeDef extends NodeDef, SolarManagerDataOptions {}

export interface SolarManagerDataNode extends Node {
  solarManagerConfig: SolarManagerConfigNode;
  solarManager: SolarManager;
}
