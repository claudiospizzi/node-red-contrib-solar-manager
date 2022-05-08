import { EditorRED } from 'node-red';
import { SolarManagerCarChargerEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<SolarManagerCarChargerEditorNodeProperties>('solar-manager-car-charger', {
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
    carChargerId: {
      value: '',
      type: 'text',
      required: true,
    },
    carChargerMode: {
      value: '',
      type: 'number',
      required: true,
    },
  },
  inputs: 1,
  outputs: 1,
  icon: 'car-charger.png',
  paletteLabel: 'car charger',
  label: function () {
    return this.name || 'solar manager car charger';
  },
});
