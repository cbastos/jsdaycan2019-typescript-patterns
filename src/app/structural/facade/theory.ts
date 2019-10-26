class Part1 {
    method1(): void {
        console.log("method 1 (Part 1)");
    }
}

class Part2 {
    method2(): void {
        console.log("method 2 (Part 2)");
    }
}

class Part3 {
    method3(): void {
        console.log("method 3 (Part 3)");
    }
}

class Facade {
    private part1: Part1 = new Part1();
    private part2: Part2 = new Part2();
    private part3: Part3 = new Part3();

    operation1(): void {
        this.part1.method1();
        this.part2.method2();
    }

    operation2(): void {
        this.part1.method1();
        this.part3.method3();
    }
}

export class Client {
    callOperations(): void {
        const facade = new Facade();
        facade.operation1();
        facade.operation2();
    }
}
