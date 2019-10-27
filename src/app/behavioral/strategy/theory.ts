class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    performStrategicMethod(): void {
        this.strategy.strategicMethod();
    }
}

interface Strategy {
    strategicMethod(): void;
}

class ConcreteStrategyA implements Strategy {
    public strategicMethod(): void {
        console.log('Strategy A');
    }
}

class ConcreteStrategyB implements Strategy {
    public strategicMethod(): void {
        console.log('Strategy B');
    }
}

export class Client {
    run(): void {
        const context = new Context(new ConcreteStrategyA());
        context.performStrategicMethod();

        context.setStrategy(new ConcreteStrategyB());
        context.performStrategicMethod();
    }
}
