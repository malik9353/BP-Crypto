import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.scss']
})
export class TradeHistoryComponent implements OnInit
{
  res;
  history;
  showSpinner:boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit()
  {
    this.authService.tradeHistory().subscribe(data =>
    {
      this.res=data;
      this.history=this.res.result;
      this.showSpinner=false;
    });
  }

}
