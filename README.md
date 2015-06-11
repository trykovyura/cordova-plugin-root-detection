# Root Detection Plugin for Apache Cordova

Use this plugin to check if the android device running the app is rooted.


## Install

### Locally

```
cordova plugin add https://github.com/trykovyura/cordova-plugin-root-detection.git
```

## Usage

### isDeviceRooted

```js
rootdetection.isDeviceRooted(successCallback, failureCallback);
```

- => `successCallback` is called with true if the device is rooted, otherwise false
- => `failureCallback` is called if there was an error determining if the device is rooted
- returns '1' if device is rooted else '0'

## Platform Support

Android only.

## License

[MIT License](http://ilee.mit-license.org)