import { EditorRED } from 'node-red';
import { SolarManagerConfigEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<SolarManagerConfigEditorNodeProperties>('solar-manager-config', {
  category: 'config',
  defaults: {
    name: {
      value: '',
      required: true,
    },
    solar_manager_id: {
      value: '',
      required: true,
    },
    username: {
      value: '',
      required: true,
    },
    password: {
      value: '',
      required: true,
    },
  },
  label: function () {
    return this.name || 'solar manager config';
  },
});
