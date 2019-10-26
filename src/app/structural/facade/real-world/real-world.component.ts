import { Component } from "@angular/core";

@Component({
    selector: 'facade',
    templateUrl: './real-world.component.html'
})
export class FacadeRealWorldComponent {
    tooltipWasShown() {
        console.log('tooltip was shown');
    }
}