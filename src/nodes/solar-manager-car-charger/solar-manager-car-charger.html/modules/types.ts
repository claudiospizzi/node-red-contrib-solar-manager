import { EditorNodeProperties } from 'node-red';
import { SolarManagerCarChargerOptions } from '../../shared/types';

export interface SolarManagerCarChargerEditorNodeProperties
  extends EditorNodeProperties,
    SolarManagerCarChargerOptions {}
