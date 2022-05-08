import { SolarManagerTag } from './SolarManagerTag';

/**
 * Detailed information about a device.
 */
export class SolarManagerDeviceInfo {
  public _id: string | undefined;
  public priority: number | undefined;
  public device_type: string | undefined;
  public signal: string | undefined;
  public type: string | undefined;
  public device_group: string | undefined;
  public ip: string | undefined;
  public tag: SolarManagerTag | undefined;
  public data: unknown | undefined;
  public createdAt: string | undefined;
  public updatedAt: string | undefined;
}
