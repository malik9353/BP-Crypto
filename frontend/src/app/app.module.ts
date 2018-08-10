import { ChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ModalModule, WavesModule, InputsModule } from 'angular-bootstrap-md'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { NgFlashMessagesModule } from 'ng-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatTabsModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphComponent } from './components/exchange/graph/graph.component';
import { RatesComponent } from './components/exchange/rates/rates.component';
import { AssetsComponent } from './components/funds/assets/assets.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { DepositComponent } from './components/funds/deposit/deposit.component';
import { OverviewComponent } from './components/funds/overview/overview.component';
import { WithdrawalComponent } from './components/funds/withdrawal/withdrawal.component';
import { TradehistoryComponent } from './components/funds/tradehistory/tradehistory.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TotalAssetsComponent } from './components/dashboard/total-assets/total-assets.component';
import { TradeHistoryComponent } from './components/dashboard/trade-history/trade-history.component';
import { UserDetailsComponent } from './components/dashboard/user-details/user-details.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { PieChartComponent } from './components/ui/pie-chart/pie-chart.component';
import { CoinsComponent } from './components/dashboard/user-details/coins/coins.component';
// import { RateChartComponent } from './components/exchange/rate-chart/rate-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExchangeComponent,
    NavbarComponent,
    FooterComponent,
    OverviewComponent,
    DepositComponent,
    WithdrawalComponent,
    TradehistoryComponent,
    AssetsComponent,
    GraphComponent,
    RatesComponent,
    DashboardComponent,
    TotalAssetsComponent,
    TradeHistoryComponent,
    UserDetailsComponent,
    SlidebarComponent,
    PieChartComponent,
    CoinsComponent
    // RateChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ModalModule, WavesModule, InputsModule,
    MatCheckboxModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    NgFlashMessagesModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthService, AuthGuard, GraphComponent, ExchangeComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
