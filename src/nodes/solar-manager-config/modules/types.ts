import { Node, NodeDef } from 'node-red';
import { SolarManagerConfigOptions } from '../shared/types';

export interface SolarManagerConfigNodeDef extends NodeDef, SolarManagerConfigOptions {}

export interface SolarManagerConfigNode extends Node {
  solar_manager_id: string;
  username: string;
  password: string;
}
