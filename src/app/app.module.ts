import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ExpendituresComponent } from './components/expenditures/expenditures.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SavingComponent } from './components/saving/saving.component';
import { RemovingComponent } from './components/removing/removing.component';
import { MovementsComponent } from './components/movements/movements.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { AddExpenditureComponent } from './components/add-expenditure/add-expenditure.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ExpendituresComponent,
    IncomesComponent,
    DialogueComponent,
    SavingComponent,
    RemovingComponent,
    MovementsComponent,
    AddIncomeComponent,
    AddExpenditureComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule
  ], exports: [MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatIconModule, FormsModule ],
  providers: [],
  entryComponents: [DialogueComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
