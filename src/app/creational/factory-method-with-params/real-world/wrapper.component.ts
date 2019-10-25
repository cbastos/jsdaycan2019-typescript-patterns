import { Component, ComponentFactoryResolver, ViewContainerRef, OnInit, Input } from "@angular/core";
import { ComponentModes } from "./component-modes";
import { ComponentFactory } from "./component-factory";

@Component({ selector: 'fm-wrapper-component', template: '' })
export class FactoryMethodWrapperComponent implements OnInit {
    @Input() mode: ComponentModes;
    @Input() data: Array<any>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        public viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit() {
        const componentToInstance = ComponentFactory.getComponentByMode(this.mode);
        const componentFactory =
            this.componentFactoryResolver.resolveComponentFactory(componentToInstance);

        this.viewContainerRef.clear();

        const componentInstance =
            this.viewContainerRef.createComponent(componentFactory).instance;
        componentInstance.data = this.data;
    }
}
