interface Flyweight {
    operation(extrinsicState);
}

class ConcreteFlyweight implements Flyweight {
    operation(extrinsicState) { }
}

class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight };

    getFlyWeight(intrinsicState): Flyweight {
        const key = this.getKey(intrinsicState);
        if (!this.flyweights[key]) {
            const newFlyweight = new ConcreteFlyweight();
            this.flyweights[key] = newFlyweight;
            return newFlyweight;
        } else {
            return this.flyweights[key];
        }
    }

    private getKey(intrinsicState): string {
        return `${intrinsicState.model}-${intrinsicState.color}`;
    }
}

export class Client {
    run() {
        const factory = new FlyweightFactory();
        const car1 = factory.getFlyWeight({ model: 'BMW', color: 'red' });
        const car2 = factory.getFlyWeight({ model: 'BMW', color: 'red' });
        const car3 = factory.getFlyWeight({ model: 'Toyota', color: 'white' });
        car1.operation({ km: 1000 });
        car2.operation({ km: 200 });
        car3.operation({ km: 3500 });
    }
}
