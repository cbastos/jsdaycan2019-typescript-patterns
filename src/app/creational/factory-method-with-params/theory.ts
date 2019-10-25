interface Creator {
  factoryMethod(param: 1 | 2 | 3): Product;
}

class ConcreteCreator implements Creator {
  factoryMethod(param: 1 | 2 | 3): Product {
    const dictionary = {
      1: ConcreteProduct1,
      2: ConcreteProduct2,
      3: ConcreteProduct3
    }
    const ConcreteProduct = dictionary[param];
    return new ConcreteProduct();
  }
}

interface Product {
  // Contract members
}

class ConcreteProduct1 implements Product {
  // Contract members implemented
}

class ConcreteProduct2 implements Product {
  // Contract members implemented
}

class ConcreteProduct3 implements Product {
  // Contract members implemented
}

export class Client {
  createProduct(): Product {
    const creator = new ConcreteCreator();
    return creator.factoryMethod(1);
  }
}