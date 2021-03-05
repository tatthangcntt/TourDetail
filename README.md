# TourDetail

## Get Started
##### Video demo
[![Watch the video]](https://youtu.be/9SDXIx6fhBo)
##### 1.Clone the project

```
git clone git@github.com:tatthangcntt/TourDetail.git
```

##### 2.Install node_modules

```
cd TourDetail && yarn install
```

##### 3.Verify submodule

build device iOS:
```
cd TourDetail/ios && pod install && cd ..
react-native run-ios
```
build device Android:
```
cd TourDetail
react-native run-android
```
##### 4. Main source 
```
inside src/
List Tour screen: src/screens/Tour/ListTour.js
Tour Detail screen: src/screens/Tour/TourDetail.js
```
##### 4. Run test API schema 

```
  Run SchemaLogin-test.js to check login Api schema change or not.

  yarn test

```



