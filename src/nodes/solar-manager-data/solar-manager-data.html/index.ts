import { EditorRED } from 'node-red';
import { SolarManagerDataEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<SolarManagerDataEditorNodeProperties>('solar-manager-data', {
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
  icon: 'data.png',
  paletteLabel: 'data',
  label: function () {
    return this.name || 'solar manager data';
  },
});
