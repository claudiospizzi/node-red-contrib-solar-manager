import { EditorNodeProperties } from "node-red";
import { SolarManagerSmartPlugOptions } from "../../shared/types";

export interface SolarManagerSmartPlugEditorNodeProperties
  extends EditorNodeProperties,
    SolarManagerSmartPlugOptions {}
