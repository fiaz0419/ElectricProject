import { ModuleWithProviders} from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

import { Comp5Component } from './components/comp5/comp5.component';
import { AppComponent } from './app.component';

export const router : Routes = [

    {path: '' ,redirectTo: 'consumption', pathMatch:'full' },
    {path: 'consumption' , component:Comp5Component},
    {path: 'index' , component:AppComponent }
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);

