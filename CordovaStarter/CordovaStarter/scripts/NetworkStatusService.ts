/// <reference path="../scripts/typings/cordova/plugins/NetworkInformation.d.ts" />
class NetworkStatusService implements INetworkStatusService {
    deviceIsOnline: boolean;

    constructor() {
        document.addEventListener("deviceready", () => {
            if (navigator.connection.type === Connection.NONE) {
                this.deviceIsOnline = false;
            } else {
                this.deviceIsOnline = true;
            }
        });

        document.addEventListener("offline", () => {
            this.deviceIsOnline = false;
        });
        document.addEventListener("online", () => {
            this.deviceIsOnline = true;
        });
    }
}