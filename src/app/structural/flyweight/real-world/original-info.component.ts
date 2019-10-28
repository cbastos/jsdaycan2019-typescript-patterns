import { Component, Input, ViewChild } from "@angular/core";
import { FlyweightDialogComponent } from "./dialog.component";

@Component({
    selector: 'fly-original-info',
    templateUrl: './original-info.component.html'
})
export class OriginalInfoComponent {
    @ViewChild('dialog', { static: false }) dialog: FlyweightDialogComponent;
    @Input() infoText = '';
    showDialog() {
        this.dialog.show(this.infoText);
    }
}
