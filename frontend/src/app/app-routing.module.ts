import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { AssetsComponent } from './components/funds/assets/assets.component';
import { DepositComponent } from './components/funds/deposit/deposit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PieChartComponent } from './components/ui/pie-chart/pie-chart.component';
import { OverviewComponent } from './components/funds/overview/overview.component';
import { WithdrawalComponent } from './components/funds/withdrawal/withdrawal.component';
import { TradehistoryComponent } from './components/funds/tradehistory/tradehistory.component';
import { TotalAssetsComponent } from './components/dashboard/total-assets/total-assets.component';
import { TradeHistoryComponent } from './components/dashboard/trade-history/trade-history.component';
import { UserDetailsComponent } from './components/dashboard/user-details/user-details.component';
import { CoinsComponent } from './components/dashboard/user-details/coins/coins.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'exchange', component: ExchangeComponent, canActivate:[AuthGuard]},
  { path: 'user-details', component: UserDetailsComponent, canActivate:[AuthGuard]},
  { path: 'total-assets', component: TotalAssetsComponent, canActivate:[AuthGuard]},
  { path: 'trade-history', component: TradeHistoryComponent, canActivate:[AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'coins/:id', component: CoinsComponent, canActivate:[AuthGuard] },
  { path: 'assets', component: AssetsComponent, canActivate:[AuthGuard]},
  { path: 'pie', component: PieChartComponent, canActivate:[AuthGuard]},
  { path: 'deposit', component: DepositComponent, canActivate:[AuthGuard]},
  { path: 'overview', component: OverviewComponent, canActivate:[AuthGuard]},
  { path: 'withdraw', component: WithdrawalComponent, canActivate:[AuthGuard]},
  { path: 'trade', component: TradehistoryComponent, canActivate:[AuthGuard]},
  { path: '**', component: HomeComponent }
];

@NgModule(
{
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
