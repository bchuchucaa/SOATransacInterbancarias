import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
//material
import { MatButtonModule } from '@angular/material/button';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
//client http
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListTransfersComponent } from './components/list-transfers/list-transfers.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    InicioComponent,
    ConsultaComponent,
    ListTransfersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,

 
   
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
