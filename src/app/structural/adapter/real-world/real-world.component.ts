import { Component } from "@angular/core";

@Component({
    selector: 'adapter',
    templateUrl: './real-world.component.html',
    styleUrls: ['./real-world.component.css']
})
export class AdapterRealWorldComponent {
    tooltipWasShown() {
        console.log('tooltip was shown');
    }
}