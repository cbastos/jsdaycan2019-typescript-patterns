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

    // More possible methods about loggers manipulation
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

class LoggerCreator {
    public static getLogger(environment): Logger {
        const dictionary = {
            ['DEV']: () => new ConsoleLoggerCreator(),
            ['PROD']: () => new AppInsightsLoggerCreator()
        };
        return dictionary[environment]().getLogger();
    }
}

export class Client {
    constructor(private appConfig: { environment: string }) { }

    main() {
        LoggerCreator.getLogger(this.appConfig.environment).log('a message to log');
    }
}
