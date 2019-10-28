interface Cloneable<T> {
    clone(): T;
}

class ClaseConcreta implements Cloneable<ClaseConcreta> {
    constructor(public attr_1: string) { }

    public clone() {
        // Member clonation
        return new ClaseConcreta(this.attr_1);
    }
}

export class PrototipoClient {
    static main() {
        const p1 = new ClaseConcreta("Clone-I");
        const c1 = p1.clone();
        console.log(`Clonación: ${c1.attr_1}`);
    }
}
