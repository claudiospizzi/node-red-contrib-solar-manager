import { EditorNodeProperties } from "node-red";
import { SolarManagerSwitchOptions } from "../../shared/types";

export interface SolarManagerSwitchEditorNodeProperties
  extends EditorNodeProperties,
    SolarManagerSwitchOptions {}
