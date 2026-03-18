# Cross-Platform Text Display App

A simple React Native application with TypeScript that displays text and runs on both **Windows OS** and **Android OS**. The app detects the platform and displays platform-specific content.

## Features

- ✅ **Cross-Platform Support**: Windows and Android
- ✅ **TypeScript**: Fully typed React Native application
- ✅ **Platform Detection**: Automatically detects and displays OS-specific content
- ✅ **Clean UI**: Simple card-based interface with platform information
- ✅ **Device Information**: Shows platform and OS version details

## Project Structure

```
.
├── src/
│   ├── App.tsx                 # Main app component with platform detection
│   ├── index.tsx               # Entry point
│   └── utils/
│       └── platformUtils.ts    # Platform-specific utilities
├── android/
│   └── app/src/main/java/      # Android native code
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── metro.config.js             # Metro bundler configuration
└── README.md                   # This file
```

## Prerequisites

### For Development
- **Node.js**: v16 or higher
- **npm** or **yarn**: Package manager
- **React Native CLI**: `npm install -g react-native`

### For Android
- **Android SDK**: API level 21 or higher
- **Android Studio**: Recommended for development
- **Java Development Kit (JDK)**: Version 11 or higher
- **Android Emulator** or physical Android device

### For Windows
- **Visual Studio 2019** or higher (with C++ tools)
- **Windows 10/11 SDK**
- **React Native for Windows**: Pre-configured in this project

## Installation

1. **Clone or extract the project**
   ```bash
   cd cross-platform-text-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Install CocoaPods (for iOS - optional)**
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### Android
```bash
npm run android
```

Or manually:
```bash
react-native run-android
```

### Windows
```bash
npm run windows
```

Or manually:
```bash
react-native run-windows
```

### Start the Development Server
```bash
npm start
```

Then press:
- `a` for Android
- `w` for Windows
- `r` to reload
- `q` to quit

## How It Works

### Platform Detection
The app uses React Native's `Platform` module to detect the current OS:

```typescript
import { Platform } from 'react-native';

const platformName = Platform.OS; // Returns 'android', 'windows', 'ios', etc.
```

### Platform-Specific Content
The `App.tsx` component includes logic to display different text based on the detected platform:

```typescript
const getContent = (): TextContent => {
  if (Platform.OS === 'android') {
    return {
      title: 'Android Platform',
      message: 'Welcome to React Native on Android!',
      platform: 'Android OS',
    };
  } else if (Platform.OS === 'windows') {
    return {
      title: 'Windows Platform',
      message: 'Welcome to React Native on Windows!',
      platform: 'Windows OS',
    };
  }
  // ... default case
};
```

## Styling

The app uses React Native's `StyleSheet` API for consistent styling across platforms:
- **Card Layout**: White cards with shadow effects
- **Responsive Design**: Uses flex layout
- **Platform-Aware Colors**: Consistent color scheme
- **Safe Area**: Handles notches and status bars

## Dependencies

### Runtime
- **react**: ^18.2.0
- **react-native**: ^0.73.0

### Development
- **typescript**: ^5.0.0
- **@types/react**: ^18.2.0
- **@types/react-native**: ^0.73.0
- **react-native-cli**: ^12.0.0
- **react-native-windows**: ^0.73.0

## Debugging

### Logs
Check console logs for platform detection:
```
=== Platform Information ===
Platform: android
Is Android: true
OS Version: 13
============================
```

### React Native Debugger
1. Press `d` in the development terminal
2. Open React Native Debugger app
3. Enable remote debugging

## Building for Production

### Android
```bash
cd android
./gradlew assembleRelease
```

### Windows
```bash
react-native run-windows --release
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Module not found | Run `npm install` again |
| Port 8081 in use | Kill the process: `lsof -ti:8081 \| xargs kill -9` |
| Android build fails | Check Java version with `java -version` |
| Windows build fails | Ensure Visual Studio C++ tools are installed |

## TypeScript Configuration

The app uses strict TypeScript mode for better type safety:
- `"strict": true` - Enables all strict type checking
- `"jsx": "react-native"` - Proper JSX handling
- `"esModuleInterop": true` - CommonJS module interoperability

## Platform Utilities

Helper functions in `src/utils/platformUtils.ts`:
- `getPlatformInfo()` - Returns detailed platform information
- `getPlatformSpecificText()` - Gets platform-specific text content
- `logPlatformInfo()` - Logs platform details to console

## Contributing

To extend this app:
1. Add new components in `src/components/`
2. Create hooks in `src/hooks/`
3. Add styles in component files using `StyleSheet`
4. Test on both Android and Windows

## License

MIT License - Free to use and modify

## Support

For React Native documentation: [react-native.dev](https://react-native.dev)

For React Native Windows: [microsoft.github.io/react-native-windows](https://microsoft.github.io/react-native-windows/)

---

**Happy Coding! 🚀**
