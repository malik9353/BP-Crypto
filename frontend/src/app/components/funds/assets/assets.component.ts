import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit
{
  showSpinner:boolean = true;
  btc=0;
  assests=[];
  sys;
  coinsss="";
  i=0;
  open=0;
  x=0;
  y=0;
  cal;
  bitcoin;
  filled=[];
  unfilled=[];
  ids = localStorage.getItem('id');
  trades;
  sub;
  res;
  ret;

  constructor(private authService:AuthService, private socketService: SocketService) {}

  tradeHistory(crypto)
  {
    this.coinsss= crypto.concat("BTC");
    this.socketService.checktrade(this.coinsss,this.ids);
  }

  ngOnInit()
  {
    this.socketService.getTrade().subscribe(data =>
    {
      this.i=0;
      this.open=0;
      this.filled=[];
      this.unfilled=[];
      this.x=0;
      this.y=0;
      this.trades=data;
      this.trades=this.trades.history;
      for(this.i=0;this.i<this.trades.length;this.i++)
      {
        if(this.trades[this.i].status.status=="FILLED")
        {
          this.filled[this.x]=this.trades[this.i];
          this.x++;
        }
        else if(this.trades[this.i].status.status=="NEW")
        {
          this.trades[this.i].status.status=="UNFILLED"
          this.unfilled[this.y]=this.trades[this.i];
          this.open=this.open+(this.trades[this.i].status.price*this.trades[this.i].status.origQty);
          this.y++;
        }
      }
    });

    this.authService.balance(this.ids).subscribe(data=>
    {
      this.res=data;
      this.btc=this.res.btcValue;
      this.assests=this.res.coins;
      this.cal=this.btc-this.open;
      this.showSpinner=false;
    });

    this.authService.getprice().subscribe(data =>
    {
      this.ret=data;
      this.bitcoin=this.ret.BTC.USD;
    });

    setTimeout(() =>
    {
      this.tradeHistory("XRP");
    }, 500);
  }
}
