import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactoryMethodSelectComponent } from './creational/factory-method-with-params/real-world/select.component';
import { FactoryMethodTextComponent } from './creational/factory-method-with-params/real-world/text.component';
import { FactoryMethodTextAreaComponent } from './creational/factory-method-with-params/real-world/textarea.component';
import { FactoryMethodWrapperComponent } from './creational/factory-method-with-params/real-world/wrapper.component';
import { FactoryMethodRealWorldComponent } from './creational/factory-method-with-params/real-world/real-world.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FactoryMethodRealWorldComponent },
    ])
  ],
  declarations: [
    AppComponent,
    FactoryMethodSelectComponent,
    FactoryMethodTextComponent,
    FactoryMethodTextAreaComponent,
    FactoryMethodWrapperComponent,
    FactoryMethodRealWorldComponent
  ],
  entryComponents: [
    FactoryMethodSelectComponent,
    FactoryMethodTextComponent,
    FactoryMethodTextAreaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/