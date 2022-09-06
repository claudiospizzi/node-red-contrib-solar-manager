import axios, { AxiosRequestConfig } from 'axios';
import { SolarManagerDeviceInfo } from './SolarManagerDeviceInfo';
import { SolarManagerGatewayData } from './SolarManagerGatewayData';
import { SolarManagerGatewayInfo } from './SolarManagerGatewayInfo';

/**
 * Class representing a solar manager device. Available via the official Solar
 * Manager API found at https://external-web.solar-manager.ch/.
 */
export class SolarManager {
  private api_uri = 'https://cloud.solar-manager.ch/v1';
  private solarManagerId: string;
  private username: string;
  private password: string;

  constructor(solarManagerId: string, username: string, password: string) {
    this.solarManagerId = solarManagerId;
    this.username = username;
    this.password = password;
  }

  /**
   * Getting detailed information about the gateway.
   * @returns The gateway information.
   */
  async getGatewayInfo(): Promise<SolarManagerGatewayInfo> {
    const url = `${this.api_uri}/info/gateway/${this.solarManagerId}`;
    const result = await axios.get<SolarManagerGatewayInfo>(url, this.getRequestConfig());
    return result.data;
  }

  /**
   * Getting detailed information about general values of production, consumption, and battery and array with the latest values of temperature, battery, and power for each device.
   * @returns The gateway current data.
   */
   async getGatewayData(): Promise<SolarManagerGatewayData> {
    const url = `${this.api_uri}/stream/gateway/${this.solarManagerId}`;
    const result = await axios.get<SolarManagerGatewayData>(url, this.getRequestConfig());
    return result.data;
  }

  /**
   * Getting detailed information about the sensors (devices).
   * @returns The device information.
   */
  async getDeviceInfo(): Promise<SolarManagerDeviceInfo[]> {
    const url = `${this.api_uri}/info/sensors/${this.solarManagerId}`;
    const result = await axios.get<SolarManagerDeviceInfo[]>(url, this.getRequestConfig());
    return result.data;
  }

  /**
   * Set the switch mode. Available modes are:
   * - 1: On
   * - 2: Off
   * - 3: Only Solar
   * - 4: Solar & Low Tariff
   * - 5: No Control
   * @param switchId Id of the switch sensor/device.
   * @param switchMode Define the switch mode.
   */
  async setSwitchMode(switchId: string, switchMode: number): Promise<void> {
    const url = `${this.api_uri}/control/switch/${switchId}`;
    const body = { chargingMode: switchMode };
    await axios.put(url, body, this.getRequestConfig());
  }

  /**
   * Set the smart plug mode. Available modes are:
   * - 1: On
   * - 2: Off
   * - 3: Only Solar
   * - 4: Solar & Low Tariff
   * - 5: No Control
   * @param smartPlugId Id of the smart plug sensor/device.
   * @param smartPlugMode Define the smart plug mode.
   */
  async setSmartPlugMode(smartPlugId: string, smartPlugMode: number): Promise<void> {
    const url = `${this.api_uri}/control/smart-plug/${smartPlugId}`;
    const body = { chargingMode: smartPlugMode };
    await axios.put(url, body, this.getRequestConfig());
  }

  /**
   * Set the car charger mode. Available modes are:
   * - 0: Fast Charge
   * - 1: Only Solar
   * - 2: Solar & Low Tariff
   * - 3: Do Not Charge
   * - 4: Constant Current
   * @param carChargerId Id of the car charger sensor/device.
   * @param carChargerMode Define the car charger mode.
   */
  async setCarChargerMode(carChargerId: string, carChargerMode: number): Promise<void> {
    const url = `${this.api_uri}/control/car-charger/${carChargerId}`;
    const body = { chargingMode: carChargerMode };
    await axios.put(url, body, this.getRequestConfig());
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
}
