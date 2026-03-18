import { AppRegistry, Platform } from 'react-native';
import App from './App';

const appName = 'CrossPlatformTextApp';

AppRegistry.registerComponent(appName, () => App);

// Platform-specific entry point logging
if (Platform.OS === 'android') {
  console.log('App initialized for Android Platform');
} else if (Platform.OS === 'windows') {
  console.log('App initialized for Windows Platform');
} else {
  console.log(`App initialized for ${Platform.OS} Platform`);
}
