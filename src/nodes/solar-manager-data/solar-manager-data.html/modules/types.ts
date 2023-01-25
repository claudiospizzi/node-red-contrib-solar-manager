import { EditorNodeProperties } from 'node-red';
import { SolarManagerDataOptions } from '../../shared/types';

export interface SolarManagerDataEditorNodeProperties extends EditorNodeProperties, SolarManagerDataOptions {}
