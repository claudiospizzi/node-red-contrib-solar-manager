import { EditorRED } from 'node-red';
import { SolarManagerGatewayStatusEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<SolarManagerGatewayStatusEditorNodeProperties>('solar-manager-gateway-status', {
  category: 'solar manager',
  color: '#f7b264',
  defaults: {
    name: {
      value: '',
    },
    solarManager: {
      value: '',
      type: 'solar-manager-config',
      required: true,
    },
  },
  inputs: 1,
  outputs: 1,
  icon: 'gateway-status.png',
  paletteLabel: 'gateway status',
  label: function () {
    return this.name || 'solar manager gateway status';
  },
});
