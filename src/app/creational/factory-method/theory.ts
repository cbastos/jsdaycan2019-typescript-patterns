interface Creator {
  factoryMethod(): Product;
}

class ConcreteCreator implements Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

interface Product {
  // Contract members
}

class ConcreteProduct1 implements Product {
  // Contract members implemented
}

export class Client {
  createProduct(): Product {
    const creator = new ConcreteCreator();
    return creator.factoryMethod();
  }
}