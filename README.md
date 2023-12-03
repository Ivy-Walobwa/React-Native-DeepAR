# React-Native-DeepAR

| Application Output                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/Ivy-Walobwa/React-Native-DeepAR/assets/49009293/e62d782a-0dab-4484-abee-736b5f04a866" alt="App output" width="300" height="auto"> |


## Cloning and running the Project

```bash
# Clone this repository
$ git clone git@github.com:Ivy-Walobwa/React-Native-DeepAR.git

# Go into the repository
$ cd React-Native-DeepAR

```

Install all dependencies using the command:

```bash
$ yarn
```

Before running the project, you need to adjust some native files. The project only runs on physical devices. Follow the instructions below:

> ## Android Devices

1. Go to the file: `android/app/src/main/AndroidManifest.xml` and add the following lines:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<!--Optional if you also want to record the audio-->
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

2. Inside your `android/build.gradle` file, make sure you have the following configuration:

```gradle

buildscript {
    ext {
        buildToolsVersion = "33.0.0"
        minSdkVersion = 23
        compileSdkVersion = 33
        targetSdkVersion = 33
    }
}
   
```   

3. Make sure you are connected to a physical device before running the project.
4. Run this command to check for connected devices.
```bash
$ adb devices
```
5. Run the project using the command:

```bash
$ yarn android
```

> ## iOS Devices
1. Go to the file: `ios/{YourProjectName}/Info.plist` and add the permission below:

```xml

<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Camera.</string>

<!-- optionally, if you want to record audio: -->
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Microphone.</string>
   
```
2. Navigate to your ios folder and install the bundler and pods using the commands:

```bash
$ cd ios 

$ bundle install

$ bundle exec pod install
```

3. Open your `ios/YourProject.xcworkspace` file in Xcode and update your iOS version to `11.0` minimum, like below:

| Setting iOS minimum deployment on Xcode                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------- |
| ![Setting iOS minimum deployment on Xcode](https://github.com/Ivy-Walobwa/React-Native-DeepAR/assets/49009293/26564ad7-60f8-4715-82ca-2dcf5cd0d0d6) |

4. Configure code signing

| Configure code signing on Xcode                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------- |
| ![Configure code signing](https://github.com/Ivy-Walobwa/React-Native-DeepAR/assets/49009293/8650cbe8-aacd-4573-9dad-82c4527d5ba6) |


5. Add `DeepAR.xcframework` to Build Phases:
   
| Add DeepAR to Build Phase                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------- |
| ![Add DeepAR to Build Phase](https://github.com/Ivy-Walobwa/React-Native-DeepAR/assets/49009293/b4e7484d-c762-482f-b11e-ca17f62a4f0b) |

6. Make sure you are connected to a physical device via USB before running the project and then run the application.
   
| Run Project                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------- |
| ![Run Project](https://github.com/Ivy-Walobwa/React-Native-DeepAR/assets/49009293/3fd7319f-e4a3-42ef-9aaa-1c3f1315b5b2) |

