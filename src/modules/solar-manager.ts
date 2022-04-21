import axios, { AxiosRequestConfig } from 'axios';

export class SolarManagerGatewayInfo {
  public _id: string | undefined;
  public signal: string | undefined;
  public name: string | undefined;
  public sm_id: string | undefined;
  public owner: string | undefined;
  public firmware: string | undefined;
  public lastErrorDate: string | undefined;
  public mac: string | undefined;
  public ip: string | undefined;
}

export class SolarManagerGatewayData {
  public lastUpdateDate: string | undefined;
  public currentPowerConsumption: number | undefined;
  public currentPvGeneration: number | undefined;
  public currentBatteryChargeDischarge: number | undefined;
  public soc: number | undefined;
  public devices: SolarManagerGatewayDataDevice[] | undefined;
  public errors: string[] | undefined;
}

export class SolarManagerGatewayDataDevice {
  public _id: string | undefined;
  public signal: string | undefined;
  public activeDevice: number | undefined;
  public switchState: number | undefined;
  public currentEnergy: number | undefined;
  public currentPower: number | undefined;
  public currentPowerInvSm: number | undefined;
  public currentWaterTemp: number | undefined;
  public soc: number | undefined;
  public errors: string[] | undefined;
  public accumulatedErrorCount: number | undefined;
}

/**
 * Class representing a solar manager device. Available via the official Solar
 * Manager API found at https://external-web.solar-manager.ch/.
 */
export class SolarManager {
  private api_uri = 'https://cloud.solar-manager.ch/v1';
  private solar_manager_id: string;
  private username: string;
  private password: string;

  constructor(solar_manager_id: string, username: string, password: string) {
    this.solar_manager_id = solar_manager_id;
    this.username = username;
    this.password = password;
  }

  /**
   * Generate a request config containing the authentication information for
   * Solar Manager.
   * @returns The request config for axios.
   */
  private getRequestConfig(): AxiosRequestConfig {
    return {
      auth: {
        username: this.username,
        password: this.password,
      },
    };
  }

  /**
   * Getting detailed information about the gateway by sm_id (Solar Manager ID).
   * @returns The gateway information.
   */
  async getGatewayInfo(): Promise<SolarManagerGatewayInfo> {
    const url = `${this.api_uri}/info/gateway/${this.solar_manager_id}`;
    const result = await axios.get(url, this.getRequestConfig());

    const gatewayInfo = new SolarManagerGatewayInfo();
    gatewayInfo._id = result.data._id;
    gatewayInfo.signal = result.data.signal;
    gatewayInfo.name = result.data.name;
    gatewayInfo.sm_id = result.data.sm_id;
    gatewayInfo.owner = result.data.owner;
    gatewayInfo.firmware = result.data.firmware;
    gatewayInfo.lastErrorDate = result.data.lastErrorDate;
    gatewayInfo.mac = result.data.mac;
    gatewayInfo.ip = result.data.ip;

    return gatewayInfo;
  }

  /**
   * Getting values of production, consumption, and battery and an array with
   * the latest values of temperature, battery, and power for each device.
   * @returns The gateway data.
   */
  async getGatewayData(): Promise<SolarManagerGatewayData> {
    const url = `${this.api_uri}/stream/gateway/${this.solar_manager_id}`;
    const result = await axios.get(url, this.getRequestConfig());

    const gatewayData = new SolarManagerGatewayData();
    gatewayData.lastUpdateDate = result.data.TimeStamp;
    gatewayData.currentPowerConsumption = result.data.currentPowerConsumption
    gatewayData.currentPvGeneration = result.data.currentPvGeneration
    gatewayData.currentBatteryChargeDischarge = result.data.currentBatteryChargeDischarge
    gatewayData.soc = result.data.sic;
    gatewayData.devices = new Array<SolarManagerGatewayDataDevice>();
    gatewayData.errors = result.data.errors;

    for (const resultDevice of result.data.devices) {
      const gatewayDataDevice = new SolarManagerGatewayDataDevice();
      gatewayDataDevice._id = resultDevice._id;
      gatewayDataDevice.signal = resultDevice.signal;
      gatewayDataDevice.activeDevice = resultDevice.activeDevice;
      gatewayDataDevice.switchState = resultDevice.switchState;
      gatewayDataDevice.currentEnergy = resultDevice.currentEnergy;
      gatewayDataDevice.currentPower = resultDevice.currentPower;
      gatewayDataDevice.currentPowerInvSm = resultDevice.currentPowerInvSm;
      gatewayDataDevice.currentWaterTemp = resultDevice.currentWaterTemp;
      gatewayDataDevice.soc = resultDevice.SOC;
      gatewayDataDevice.errors = resultDevice.errors;
      gatewayDataDevice.accumulatedErrorCount = resultDevice.accumulatedErrorCount;
      gatewayData.devices.push(resultDevice);
    }

    return gatewayData;
  }
}
