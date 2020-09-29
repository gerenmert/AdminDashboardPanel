import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
    children: [{        // '' path ile DefaultComponente ulaştıktan sonra burada <router-outlet> kullanılırsa
      path: '',                           // ve path değişmediyse
      component: DashboardComponent       // DashboardComponent'in html'ine git
    }]                  // tabii ki bu children olayının burada kullanılabilmesi için ilgili componentin modülünde (DefaultModule) RouterModule'ün import edilmesi gerekir
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
