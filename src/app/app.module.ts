import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactoryMethodSelectComponent } from './creational/factory-method-with-params/real-world/select.component';
import { FactoryMethodTextComponent } from './creational/factory-method-with-params/real-world/text.component';
import { FactoryMethodTextAreaComponent } from './creational/factory-method-with-params/real-world/textarea.component';
import { FactoryMethodCreatorComponent } from './creational/factory-method-with-params/real-world/creator.component';
import { FactoryMethodRealWorldComponent } from './creational/factory-method-with-params/real-world/real-world.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { AdapterRealWorldComponent } from './structural/adapter/real-world/real-world.component';
import { TooltipAdapterComponent } from './structural/adapter/real-world/tooltip-adapter.component';
import { StrategyRealWorldComponent } from './behavioral/strategy/real-world/real-world.component';
import { FieldFormatterService } from './behavioral/strategy/real-world/fieldFormatter.service';
import { PageObjectRealWorldComponent } from './ui/page-object/real-world/real-world.component';
import { FlyweightRealWorldComponent } from './structural/flyweight/real-world/real-world.component';
import { OriginalInfoComponent } from './structural/flyweight/real-world/original-info.component';
import { RefactoredInfoComponent } from './structural/flyweight/real-world/refactored-info.component';
import { FlyweightDialogComponent } from './structural/flyweight/real-world/dialog.component';
import { MvvmRealWorldComponent } from './ui/mvvm/real-world/real-world.component';
import { ConnectorService } from './state/connector.service';
import store from './state/initialState';
import { ObserverRealWorldComponent } from './behavioral/observer/real-world/real-world.component';
import { Observer1Component } from './behavioral/observer/real-world/observer1.component';
import { Observer2Component } from './behavioral/observer/real-world/observer2.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FactoryMethodRealWorldComponent },
      { path: 'adapter', component: AdapterRealWorldComponent },
      { path: 'strategy', component: StrategyRealWorldComponent },
      { path: 'page-object', component: PageObjectRealWorldComponent },
      { path: 'flyweight', component: FlyweightRealWorldComponent },
      { path: 'mvvm', component: MvvmRealWorldComponent },
      { path: 'observer', component: ObserverRealWorldComponent }
    ]),
    TooltipModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FactoryMethodSelectComponent,
    FactoryMethodTextComponent,
    FactoryMethodTextAreaComponent,
    FactoryMethodCreatorComponent,
    FactoryMethodRealWorldComponent,
    AdapterRealWorldComponent,
    TooltipAdapterComponent,
    StrategyRealWorldComponent,
    PageObjectRealWorldComponent,
    FlyweightRealWorldComponent,
    OriginalInfoComponent,
    RefactoredInfoComponent,
    FlyweightDialogComponent,
    MvvmRealWorldComponent,
    ObserverRealWorldComponent,
    Observer1Component,
    Observer2Component
  ],
  entryComponents: [
    FactoryMethodSelectComponent,
    FactoryMethodTextComponent,
    FactoryMethodTextAreaComponent
  ],
  providers: [
    FieldFormatterService,
    {
      provide: ConnectorService,
      useFactory: () => new ConnectorService(store)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/