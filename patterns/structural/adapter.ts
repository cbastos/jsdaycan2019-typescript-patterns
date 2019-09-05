class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}


class Client {
    run() {
        const adaptee = new Adaptee();
        const adapter = new Adapter(adaptee);
        adapter.request();
    }
}

