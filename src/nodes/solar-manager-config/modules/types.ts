import { Node, NodeDef } from 'node-red';
import { SolarManagerConfigOptions } from '../shared/types';

export interface SolarManagerConfigNodeDef extends NodeDef, SolarManagerConfigOptions {}

export interface SolarManagerConfigNode extends Node {
  solarManagerId: string;
  username: string;
  password: string;
}
