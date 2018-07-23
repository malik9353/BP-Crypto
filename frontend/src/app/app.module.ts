import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatTabsModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AssetsComponent } from './components/funds/assets/assets.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { OverviewComponent } from './components/funds/overview/overview.component';
import { DepositComponent } from './components/funds/deposit/deposit.component';
import { WithdrawalComponent } from './components/funds/withdrawal/withdrawal.component';
import { TradehistoryComponent } from './components/funds/tradehistory/tradehistory.component';
import { GraphComponent } from './components/exchange/graph/graph.component';
import { RatesComponent } from './components/exchange/rates/rates.component';

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
    RatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
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
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthService,AuthGuard,GraphComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
