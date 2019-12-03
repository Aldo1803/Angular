import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import {SavingComponent} from './components/saving/saving.component';
import { RemovingComponent } from './components/removing/removing.component';
import { MovementsComponent } from './components/movements/movements.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { AddExpenditureComponent } from './components/add-expenditure/add-expenditure.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "addsaving", component: SavingComponent },
  { path: "removesaving", component: RemovingComponent },
  { path: "movements", component: MovementsComponent },
  { path: "movements/income", component: AddIncomeComponent },
  { path: "movements/expenditure", component: AddExpenditureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
