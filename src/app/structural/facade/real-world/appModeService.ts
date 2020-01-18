export class AppModeService {
    isOffline(): boolean {
        return !!window.navigator.userAgent.match(/Electron/);
    }
}

