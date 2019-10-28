import { Component, ViewChild } from "@angular/core";
import { FlyweightDialogComponent } from "./dialog.component";

@Component({
    selector: 'flyweight',
    templateUrl: './real-world.component.html'
})
export class FlyweightRealWorldComponent {
    @ViewChild('dialog', { static: false }) dialog: FlyweightDialogComponent;
    showFlyweightDialog(extrinsicInfoText: string) {
        this.dialog.show(extrinsicInfoText);
    }
}
