import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'fa-tooltip',
    templateUrl: './tooltip-adapter.component.html'
})
export class TooltipAdapterComponent {
    @Input() text: string;
    @Output() shown: EventEmitter<void> = new EventEmitter<void>();

    handleTooltipEvents(event: { type: string, position: DOMRect }) {
        if (event.type === 'shown') {
            this.shown.emit();
        }
    }
}