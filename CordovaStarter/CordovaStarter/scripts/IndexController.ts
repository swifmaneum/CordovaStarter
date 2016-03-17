class IndexController {

    static $inject = ["cordovaStarter.NetworkStatusService"];
    constructor(private networkStatusService: INetworkStatusService) {

    }

    showNetworkStatus(): void {
        alert("???");
    }
}