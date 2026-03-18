import { Platform } from 'react-native';

export interface PlatformInfo {
  isAndroid: boolean;
  isWindows: boolean;
  isIOS: boolean;
  isWeb: boolean;
  platformName: string;
}

/**
 * Detects the current platform and returns platform information
 */
export const getPlatformInfo = (): PlatformInfo => {
  const platformOS = Platform.OS;

  return {
    isAndroid: platformOS === 'android',
    isWindows: platformOS === 'windows',
    isIOS: platformOS === 'ios',
    isWeb: platformOS === 'web',
    platformName: platformOS,
  };
};

/**
 * Returns platform-specific text content
 */
export const getPlatformSpecificText = (platform: string): {
  greeting: string;
  description: string;
} => {
  switch (platform) {
    case 'android':
      return {
        greeting: 'Hello from Android!',
        description: 'This app is running on Android OS with React Native',
      };
    case 'windows':
      return {
        greeting: 'Hello from Windows!',
        description: 'This app is running on Windows OS with React Native',
      };
    case 'ios':
      return {
        greeting: 'Hello from iOS!',
        description: 'This app is running on iOS OS with React Native',
      };
    default:
      return {
        greeting: 'Hello!',
        description: `This app is running on ${platform}`,
      };
  }
};

/**
 * Logs platform-specific information for debugging
 */
export const logPlatformInfo = (): void => {
  const info = getPlatformInfo();
  console.log('=== Platform Information ===');
  console.log(`Platform: ${info.platformName}`);
  console.log(`Is Android: ${info.isAndroid}`);
  console.log(`Is Windows: ${info.isWindows}`);
  console.log(`OS Version: ${Platform.Version}`);
  console.log('============================');
};
