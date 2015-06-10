var exec = require('cordova/exec');

exports.isDeviceRooted = function(arg0, success, error) {
    exec(success, error, "RootDetection", "isDeviceRooted", [arg0]);
};
