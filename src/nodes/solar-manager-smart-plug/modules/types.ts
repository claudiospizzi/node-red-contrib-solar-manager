import { Node, NodeDef } from 'node-red';
import { SolarManager } from '../../../modules/SolarManager';
import { SolarManagerConfigNode } from '../../solar-manager-config/modules/types';
import { SolarManagerSmartPlugOptions } from '../shared/types';

export interface SolarManagerSmartPlugNodeDef extends NodeDef, SolarManagerSmartPlugOptions {}

export interface SolarManagerSmartPlugNode extends Node {
  solarManagerConfig: SolarManagerConfigNode;
  solarManager: SolarManager;
  smartPlugId: string;
  smartPlugMode: number;
}
