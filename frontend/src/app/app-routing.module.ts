import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { AssetsComponent } from './components/funds/assets/assets.component';
import { DepositComponent } from './components/funds/deposit/deposit.component';
import { OverviewComponent } from './components/funds/overview/overview.component';
import { WithdrawalComponent } from './components/funds/withdrawal/withdrawal.component';
import { TradehistoryComponent } from './components/funds/tradehistory/tradehistory.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'exchange', component: ExchangeComponent, canActivate:[AuthGuard]},
  { path: 'assets', component: AssetsComponent, canActivate:[AuthGuard]},
  { path: 'deposit', component: DepositComponent, canActivate:[AuthGuard]},
  { path: 'overview', component: OverviewComponent, canActivate:[AuthGuard]},
  { path: 'withdraw', component: WithdrawalComponent, canActivate:[AuthGuard]},
  { path: 'trade', component: TradehistoryComponent, canActivate:[AuthGuard]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
