import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListTransfersComponent } from './components/list-transfers/list-transfers.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [

  { path: 'logIn', component: LogInComponent },
  {path:'inicio',component:InicioComponent},
  {path:'consulta',component:ConsultaComponent},
  {path:'listAllTransactions',component:ListTransfersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
