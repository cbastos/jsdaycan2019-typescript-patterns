import { Component } from "@angular/core";

@Component({
    selector: 'page-object',
    templateUrl: './real-world.component.html'
})
export class PageObjectRealWorldComponent {
    name = '';
    greeting: string;

    sayHello(): void {
        this.greeting = `Hello ${this.name}!`;
    }
}
