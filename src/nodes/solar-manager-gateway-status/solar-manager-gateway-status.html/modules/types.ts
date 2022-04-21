import { EditorNodeProperties } from 'node-red';
import { SolarManagerGatewayStatusOptions } from '../../shared/types';

export interface SolarManagerGatewayStatusEditorNodeProperties
  extends EditorNodeProperties,
    SolarManagerGatewayStatusOptions {}
