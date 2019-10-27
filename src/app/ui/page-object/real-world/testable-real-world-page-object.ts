import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PageObjectRealWorldComponent } from './real-world.component';

export class TestablePageObjectRealWorldComponent {
    get instance(): PageObjectRealWorldComponent { return this.fixture.componentInstance; }

    private constructor(private fixture: ComponentFixture<PageObjectRealWorldComponent>) { }

    static build(): TestablePageObjectRealWorldComponent {
        const page_object_fixture = TestBed.createComponent(PageObjectRealWorldComponent);
        const testable_component = new TestablePageObjectRealWorldComponent(page_object_fixture);
        testable_component.fixture.detectChanges();
        return testable_component;
    }

    set_name(name: string): void {
        this.instance.name = name;
        this.fixture.detectChanges();
    }

    is_name_empty(): boolean {
        const name = this.fixture.nativeElement.querySelector('[name="name"]');
        return !name || name.value === '';
    }

    request_greeting(): void {
        const request_greeting_button = this.fixture.nativeElement.querySelector('button');
        request_greeting_button.click();
        this.fixture.detectChanges();
    }

    get_greeting(): string {
        const greeting = this.fixture.nativeElement.querySelector('#greeting');
        return !greeting ? '' : greeting.textContent;
    }
}
