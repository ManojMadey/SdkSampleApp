/**
 * App-wide TypeScript type definitions
 */

export type Platform = 'android' | 'windows' | 'ios' | 'web';

export interface TextContent {
  title: string;
  message: string;
  platform: string;
}

export interface DeviceInfo {
  platform: Platform;
  osVersion: string | number;
  isTablet?: boolean;
}

export interface AppState {
  currentPlatform: Platform;
  deviceInfo: DeviceInfo;
  isLoading: boolean;
}
