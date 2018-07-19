import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { DepositComponent } from './components/funds/deposit/deposit.component';
import { OverviewComponent } from './components/funds/overview/overview.component';
import { WithdrawalComponent } from './components/funds/withdrawal/withdrawal.component';
import { TradehistoryComponent } from './components/funds/tradehistory/tradehistory.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'withdraw', component: WithdrawalComponent },
  { path: 'trade', component: TradehistoryComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
