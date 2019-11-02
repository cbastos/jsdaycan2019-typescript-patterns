import { Component } from "@angular/core";

@Component({
    selector: 'page-object',
    templateUrl: './real-world.component.html',
    styleUrls: ['./real-world.component.css']
})
export class PageObjectRealWorldComponent {
    name = '';
    greeting: string;

    sayHello(): void {
        this.greeting = `Hello ${this.name}!`;
    }
}
