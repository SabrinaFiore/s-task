import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { FormComponent } from './form/form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { UserService } from './user.service';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormComponent,
    ModalComponent,
    ModalContentComponent,
    ButtonComponent,
    TableComponent,
    AgePipe,
    AgeCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
