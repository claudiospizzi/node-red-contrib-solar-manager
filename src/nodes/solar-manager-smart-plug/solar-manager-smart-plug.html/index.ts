import { EditorRED } from 'node-red';
import { SolarManagerSmartPlugEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<SolarManagerSmartPlugEditorNodeProperties>('solar-manager-smart-plug', {
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
    smartPlugId: {
      value: '',
      type: 'text',
      required: true,
    },
    smartPlugMode: {
      value: '',
      type: 'number',
      required: true,
    },
  },
  inputs: 1,
  outputs: 1,
  icon: 'smart-plug.png',
  paletteLabel: 'smart plug',
  label: function () {
    return this.name || 'solar manager smart plug';
  },
});
