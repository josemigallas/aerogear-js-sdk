export interface ServiceConfiguration {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly url: string;
  readonly config: Map<string, string>;
}

declare namespace Metrics {

  export interface Metrics {
    clientId: string;
    timestamp?: number;
    data: MetricsData;
  }

  export interface MetricsData {
    app?: AppMetrics;
    device?: DeviceMetrics;
    security?: SecurityMetric[];
  }

  export interface AppMetrics {
    appId: string;
    sdkVersion: string;
    appVersion: string;
  }

  export interface DeviceMetrics {
    platform: string;
    platformVersion: string;
  }

  export interface SecurityMetric {
    type: string;
    name: string;
    passed: boolean;
  }

}

export declare class MetricsService implements ServiceModule {
  public readonly type: string;
  private readonly url: URL;
  constructor(configuration: ServiceConfiguration);
  public sendAppAndDeviceMetrics(metrics: Metrics.Metrics): Promise<any>;
}

export interface ServiceModule {
  readonly type: string;
}