// class Memento {
//     constructor(private state: string) { }

//     getSavedState(): string {
//         return this.state;
//     }
// }

// class Originator {
//     private state: string;

//     set(state: string): void {
//         this.state = state;
//     }

//     saveToMemento(): Memento {
//         return new Memento(this.state);
//     }

//     restoreFromMemento(m: Memento): void {
//         this.state = m.getSavedState();
//     }
// }

// class Caretaker {
//     private savedStates: Array<Memento> = [];
//     addMemento(m: Memento): void { this.savedStates.push(m); }
//     getMemento(index: number): Memento { return this.savedStates[index]; }
// }

// class Client {
//     run() {
//         const caretaker = new Caretaker();

//         const originator = new Originator();
//         originator.set("State1");
//         originator.set("State2");
//         caretaker.addMemento(originator.saveToMemento());
//         originator.set("State3");
//         caretaker.addMemento(originator.saveToMemento());
//         originator.set("State4");

//         originator.restoreFromMemento(caretaker.getMemento(1));
//     }
// }

