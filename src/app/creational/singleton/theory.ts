class Singleton {
    private static instance: Singleton;
    private constructor() { }
    static build(): Singleton {
        Singleton.instance = Singleton.instance || new Singleton();
        return Singleton.instance;
    }
}

export class Client {
    getInstance(): Singleton {
        const instance = Singleton.build();
        return instance;
    }
}
