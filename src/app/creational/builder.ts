// /** "Producto" */
// class Pizza {
//   masa: string = "";
//   salsa: string = "";
//   relleno: string = "";
// }

// /** "Abstract Builder" */
// abstract class PizzaBuilder {
//   protected pizza: Pizza;

//   public getPizza(): Pizza { return this.pizza; }

//   public abstract buildMasa(): void;
//   public abstract buildSalsa(): void;
//   public abstract buildRelleno(): void;
// }

// /** "ConcreteBuilder" */
// class HawaiPizzaBuilder extends PizzaBuilder {
//   public HawaiPizzaBuilder() { super.pizza = new Pizza(); }
//   public buildMasa(): void { this.pizza.masa = "suave"; }
//   public buildSalsa(): void { this.pizza.salsa = "dulce"; }
//   public buildRelleno(): void { this.pizza.relleno = "chorizo+alcachofas"; }
// }

// /** "ConcreteBuilder" */
// class PicantePizzaBuilder extends PizzaBuilder {
//   public PicantePizzaBuilder() { super.pizza = new Pizza(); }
//   public buildMasa(): void { this.pizza.masa = "cocido"; }
//   public buildSalsa(): void { this.pizza.salsa = "picante"; }
//   public buildRelleno(): void { this.pizza.relleno = "pimienta+salchichón"; }
// }

// /** "Director" */
// class Cocina {
//   private pizzaBuilder: PizzaBuilder;

//   public setPizzaBuilder(pb: PizzaBuilder): void {
//     this.pizzaBuilder = pb;
//   }
//   public getPizza(): Pizza {
//     return this.pizzaBuilder.getPizza();
//   }

//   public construirPizza(): void {
//     this.pizzaBuilder.buildMasa();
//     this.pizzaBuilder.buildSalsa();
//     this.pizzaBuilder.buildRelleno();
//   }
// }

// /** Un cliente pidiendo una pizza. */
// class Client {
//   public static main(args: string[]): void {
//     const cocina: Cocina = new Cocina();
//     const hawai_pizzabuilder = new HawaiPizzaBuilder();
//     const picante_pizzabuilder = new PicantePizzaBuilder();

//     cocina.setPizzaBuilder(hawai_pizzabuilder);
//     cocina.construirPizza();

//     const pizza = cocina.getPizza();
//   }
// }
