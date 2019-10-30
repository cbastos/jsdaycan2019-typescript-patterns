interface IComponent {
    operation(): any;
}

class Component1 implements IComponent {
    operation(): any { }
}

class Component2 implements IComponent {
    operation(): any { }
}

class Mediator {
    component1: IComponent;
    component2: IComponent;

    operation(): any {
        this.component1.operation();
        this.component2.operation();
    }
}

export class Client {
    run() {
        const mediator = new Mediator();
        mediator.operation();
    }
}
