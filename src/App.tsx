import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';

interface TextContent {
  title: string;
  message: string;
  platform: string;
}

const App: React.FC = () => {
  // Platform-specific content
  const getContent = (): TextContent => {
    const platformName = Platform.OS;

    if (platformName === 'android') {
      return {
        title: 'Android Platform',
        message: 'Welcome to React Native on Android!',
        platform: 'Android OS',
      };
    } else if (platformName === 'windows') {
      return {
        title: 'Windows Platform',
        message: 'Welcome to React Native on Windows!',
        platform: 'Windows OS',
      };
    }

    return {
      title: 'Unknown Platform',
      message: 'Running on an unsupported platform',
      platform: platformName,
    };
  };

  const content = getContent();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.message}>{content.message}</Text>
          <Text style={styles.platformInfo}>
            Running on: {content.platform}
          </Text>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Device Information</Text>
          <Text style={styles.detailText}>
            • Platform: {Platform.OS}
          </Text>
          <Text style={styles.detailText}>
            • OS Version: {Platform.Version}
          </Text>
          <Text style={styles.detailText}>
            • React Native Framework
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Simple Text Display App
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  platformInfo: {
    fontSize: 14,
    color: '#0066cc',
    fontWeight: '600',
    marginTop: 12,
  },
  detailsSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
  footer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default App;
