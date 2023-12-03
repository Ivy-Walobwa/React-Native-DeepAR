import React from 'react';
import {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DeepARView, {
  IDeepARHandle,
  Camera,
  CameraPermissionRequestResult,
  ErrorTypes,
  CameraPositions,
} from 'react-native-deepar';
import RNFetchBlob from 'rn-fetch-blob';

const App = () => {
  const deepARRef = useRef<IDeepARHandle>(null);
  const [permsGranted, setPermsGranted] = useState(false);
  const getPermissions = async () => {
    const cameraPermission = await Camera.requestCameraPermission();
    const isCameraAllowed =
      cameraPermission === CameraPermissionRequestResult.AUTHORIZED;
    if (isCameraAllowed) {
      setPermsGranted(true);
    } else {
      Linking.openSettings();
    }
  };
  useEffect(() => {
    getPermissions();
  }, []);
  const loadEffect = () => {
    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', '<YOUR-SUPABAS-FILE-URL>')
      .then(res => {
        deepARRef?.current?.switchEffectWithPath({
          path: res.path(),
          slot: 'mask',
        });
      });
  };
  const renderPhotoButton = () => {
    return (
      <>
        <View style={styles.button}>
          <TouchableOpacity onPress={loadEffect} style={styles.effectButton}>
            <Text style={styles.effectText}>Load Effect</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const renderDeepARView = () => {
    if (permsGranted === false) {
      return null;
    }
    return (
      <>
        <DeepARView
          ref={deepARRef}
          apiKey="<YOUR-API-KEY>"
          videoWarmup={false}
          position={CameraPositions.FRONT}
          style={styles.deepARView}
          onError={(text: String, type: ErrorTypes) => {
            console.log('onError =>', text, 'type =>', type);
          }}
        />
        {renderPhotoButton()}
      </>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>{renderDeepARView()}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  deepARView: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  effectButton: {
    flex: 1,
    alignItems: 'center',
  },
  effectText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    borderRadius: 4,
    backgroundColor: '#FFF',
    padding: 5,
  },
});
export default App;
