import { EditorRED } from 'node-red';
import { SolarManagerSwitchEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<SolarManagerSwitchEditorNodeProperties>('solar-manager-switch', {
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
    switchId: {
      value: '',
      type: 'text',
      required: true,
    },
    switchMode: {
      value: '',
      type: 'number',
      required: true,
    },
  },
  inputs: 1,
  outputs: 1,
  icon: 'switch.png',
  paletteLabel: 'switch',
  label: function () {
    return this.name || 'solar manager switch';
  },
});
