interface Target {
    requiredMethod(): void;
}

class CompatibleObject implements Target {
    requiredMethod(): void { }
}

class Adapter implements Target {
    constructor(private adapteeObject: Adaptee) { }

    requiredMethod(): void {
        this.adapteeObject.oldMethod();
    }
}

class Adaptee {
    oldMethod(): void { }
}

export class Client {
    static main(): void {
        const a_compatible_object = new CompatibleObject();
        const a_non_compatible_object = new Adaptee();
        const adapter = new Adapter(a_non_compatible_object);

        a_compatible_object.requiredMethod();
        adapter.requiredMethod();
    }
}

