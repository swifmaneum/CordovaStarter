/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var cordovaStarter = angular.module("cordovaStarter", ["ngMaterial"]);

cordovaStarter.controller("IndexController", IndexController);

function networkStatusFactory() {
    return new NetworkStatusService();
}
cordovaStarter.factory("cordovaStarter.NetworkStatusService", networkStatusFactory);