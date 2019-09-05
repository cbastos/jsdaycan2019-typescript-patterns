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

new ConcreteCreator();
