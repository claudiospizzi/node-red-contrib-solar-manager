import { EditorNodeProperties } from 'node-red';
import { SolarManagerConfigOptions } from '../../shared/types';

export interface SolarManagerConfigEditorNodeProperties extends EditorNodeProperties, SolarManagerConfigOptions {}
