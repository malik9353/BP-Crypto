import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
{

    users=0;
    btc=0;
    xrp=0;
    ada=0;
    res;
    ret;

    constructor(private authService:AuthService) { }

    localStorage()
    {
      this.authService.totalBalance().subscribe(data=>
      {
        this.res=data;
        this.btc=parseFloat(this.res.balance.BTC.available);
        this.xrp=parseFloat(this.res.balance.XRP.available);
        this.ada=parseFloat(this.res.balance.ADA.available);
        localStorage.setItem('BTC', JSON.stringify(this.btc));
        localStorage.setItem('XRP', JSON.stringify(this.xrp));
        localStorage.setItem('ADA', JSON.stringify(this.ada));
      });
    }

    ngOnInit()
    {
      this.authService.userCount().subscribe(data=>
      {
        this.ret=data;
        this.users=this.ret.result;
      });
      this.localStorage();
    }
}
