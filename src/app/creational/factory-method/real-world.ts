interface Logger {
    log(message: string): void;
}

class AppInsightsLogger implements Logger {
    log(message: string): void {
        (<any>window).appInsights.trackTrace({ message });
    }
}

abstract class AbstractLoggerCreator {
    protected abstract createLogger(): Logger;

    public getLogger(): Logger {
        return this.createLogger();
    }
}

class ConsoleLoggerCreator
    extends AbstractLoggerCreator {

    protected createLogger(): Logger {
        return console;
    }
}

class AppInsightsLoggerCreator
    extends AbstractLoggerCreator {

    protected createLogger(): Logger {
        return new AppInsightsLogger();
    }
}

export class Client {
    initializeLoggers() {
        const consoleLoggerCreator: AbstractLoggerCreator = new ConsoleLoggerCreator();
        consoleLoggerCreator.getLogger().log('a message shown in the browser console');

        const appInsightsLoggerCreator: AbstractLoggerCreator = new AppInsightsLoggerCreator();
        appInsightsLoggerCreator.getLogger().log('a message tracked in the cloud (Azure AppInsights)');
    }
}
