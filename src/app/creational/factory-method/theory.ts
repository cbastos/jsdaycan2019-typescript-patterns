abstract class Creator {
  public abstract factoryMethod(): Product;
}

class ConcreteCreator extends Creator {
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
    const creator: Creator = new ConcreteCreator();
    return creator.factoryMethod();
  }
}