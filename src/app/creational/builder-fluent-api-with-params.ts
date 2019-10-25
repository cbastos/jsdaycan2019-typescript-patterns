
// class Product {
//   attr_1: string = "";
//   attr_N: string = "";
// }

// class ProductBuilder {
//   private product_attr_1: string;
//   private product_attr_N: string;

//   public addSomeConfig(param: string): ProductBuilder {
//     this.product_attr_1 = param;
//     return this;
//   }

//   public addAnotherConfig(param: string): ProductBuilder {
//     this.product_attr_N = param;
//     return this;
//   }

//   public build(): Product {
//     const product = new Product();
//     product.attr_1 = this.product_attr_1;
//     product.attr_N = this.product_attr_N;
//     return product;
//   }
// }

// class Client_and_director {
//   public static main(args: String[]): void {
//     const director = new ProductBuilder()
//       .addSomeConfig('some param value')
//       .addAnotherConfig('another param value');

//     const product = director.build();
//   }
// }

