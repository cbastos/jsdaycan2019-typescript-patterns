import { Component } from "@angular/core";

@Component({
    selector: 'facade',
    templateUrl: './real-world.component.html',
    styleUrls: ['./real-world.component.css']
})
export class FacadeRealWorldComponent {
    tooltipWasShown() {
        console.log('tooltip was shown');
    }
}