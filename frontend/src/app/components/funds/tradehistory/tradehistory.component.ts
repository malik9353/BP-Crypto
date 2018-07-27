import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-tradehistory',
  templateUrl: './tradehistory.component.html',
  styleUrls: ['./tradehistory.component.scss']
})
export class TradehistoryComponent implements OnInit
{
  btc=0;
  open=0;
  coin;
  i=0;
  x=0;
  y=0;
  cal;
  bitcoin;
  filled=[];
  unfilled=[];
  ids = localStorage.getItem('id');
  trades;
  sub;

  constructor(private authService: AuthService, private socketService: SocketService) { }

  tradeHistory(crypto)
  {
    this.coin= crypto.concat("BTC");
    this.socketService.checktrade(this.coin,this.ids);
  }

  ngOnInit()
  {
    this.socketService.getTrade().subscribe(data =>
      {
        this.open=0;
        this.filled=[];
        this.unfilled=[];
        this.x=0;
        this.y=0;
        this.trades=data;
        this.trades=this.trades.history;
        // console.log(this.trades);
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
        // console.log("OpenOrder BTC = ",this.open);
        // console.log("Filled : ",this.filled);
        // console.log("UnFilled : ",this.unfilled);
      });

    setTimeout(() =>
    {
      this.tradeHistory("XRP");
    }, 500);
  }

}
