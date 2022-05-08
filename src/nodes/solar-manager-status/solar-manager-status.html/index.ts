import { EditorRED } from 'node-red';
import { SolarManagerStatusEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<SolarManagerStatusEditorNodeProperties>('solar-manager-status', {
  category: 'solar manager',
  color: '#f7b264',
  defaults: {
    name: {
      value: '',
    },
    solarManagerConfig: {
      value: '',
      type: 'solar-manager-config',
      required: true,
    },
  },
  inputs: 1,
  outputs: 1,
  icon: 'status.png',
  paletteLabel: 'status',
  label: function () {
    return this.name || 'solar manager status';
  },
});
