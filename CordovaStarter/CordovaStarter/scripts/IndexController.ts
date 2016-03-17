class IndexController {

    static $inject = ["cordovaStarter.NetworkStatusService"];
    constructor(private networkStatusService: INetworkStatusService) {

    }

    showNetworkStatus(): void {
        if (this.networkStatusService.deviceIsOnline) {
            alert("Online");
        } else {
            alert("Offline");
        }
    }
}