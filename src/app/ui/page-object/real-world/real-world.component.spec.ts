import { TestablePageObjectRealWorldComponent } from "./testable-real-world-page-object";
import { AppModule } from "src/app/app.module";
import { TestBed } from "@angular/core/testing";

describe('The page object pattern real world example', () => {
    let testable_component: TestablePageObjectRealWorldComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents();
        testable_component = TestablePageObjectRealWorldComponent.build();
    });

    it('should initialize the name as empty', () => {
        expect(testable_component.is_name_empty()).toBeTruthy();
    });

    describe('when the user requests a greeting', () => {

        const one_valid_name = 'JsDay';

        beforeEach(() => {
            testable_component.set_name(one_valid_name);
            testable_component.request_greeting();
        });

        it('should show the greeting', () => {
            expect(testable_component.get_greeting()).toBe(`Hello ${one_valid_name}!`);
        });

    });

});
