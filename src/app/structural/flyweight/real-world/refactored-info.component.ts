import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'fly-refactored-info',
    templateUrl: './refactored-info.component.html'
})
export class RefactoredInfoComponent {
    @Input() infoText = '';
    @Output() showDialog: EventEmitter<string> = new EventEmitter<string>();
}
