// interface Observer {
//     update(): void;
// }

// class ConcreteObserver implements Observer {
//     update(): void { }
// }

// interface Subject {
//     registerObserver(observer: Observer);
//     unregisterObserver(observer: Observer);
//     notifyObservers();
// }

// class ConcreteSubject implements Subject {
//     observers: Array<Observer>;

//     registerObserver(observer: Observer) {
//         this.observers.push(observer);
//     }

//     unregisterObserver(observer: Observer) {
//         // TODO: find and remove observer from the collection.
//     }

//     notifyObservers() {
//         this.observers.forEach(o => o.update());
//     }
// }

// class Client {
//     run() {
//         const subject = new ConcreteSubject();
//         const observer1 = new ConcreteObserver();
//         const observer2 = new ConcreteObserver();
        
//         subject.registerObserver(observer1);
//         subject.registerObserver(observer2);

//         subject.notifyObservers();
//     }
// }

