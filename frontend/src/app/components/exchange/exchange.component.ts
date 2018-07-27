import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocketService } from '../../services/socket.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExchangeComponent implements OnInit
{
  showSpinner:boolean = true;
  price;
  adressres;
  bitcoin=0;
  altcoin=0;
  market=[];
  total;
  coinz="XRP";
  alpha;
  info;
  req;
  boo;
  small;
  pricecolor = 'black';
  connectionData;
  connectionData1;
  trades;
  oldprice=0;
  askk=[];
  bidask;
  bidsasks=[];
  sub;
  g=0;
  p1;
  name=false;
  prize=0;
  res;
  a1;
  p2;
  a2;
  index;
  sys;
  i=0;
  x=0;
  y=0;
  filled=[];
  unfilled=[];
  ids = localStorage.getItem('id');
  coin;
  buy_sell_res;
  sell: FormGroup;
  buy: FormGroup;
  processing = false;

  constructor(private formBuilder: FormBuilder, private dashboardComponent:DashboardComponent, private authService:AuthService, private _flashMessagesService: FlashMessagesService, private socketService: SocketService)
  {
    this.createForm();
  }

  createForm()
  {
    this.buy = this.formBuilder.group(
    {
      price: ['', Validators.compose([
        Validators.required
      ])],
      quantity: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.sell = this.formBuilder.group(
    {
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  coins(cryptos)
  {
    this.coinz=cryptos;
  }

  disableFormbuy()
  {
    this.buy.controls['price'].disable();
    this.buy.controls['quantity'].disable();
  }

  enableFormbuy()
  {
    this.buy.controls['price'].enable();
    this.buy.controls['quantity'].enable();
  }

  disableFormsell()
  {
    this.sell.controls['price'].disable();
    this.sell.controls['quantity'].disable();
  }

  enableFormsell()
  {
    this.sell.controls['price'].enable();
    this.sell.controls['quantity'].enable();
  }

  onSubmitBuy()
  {
    this.processing=true;
    this.disableFormbuy();
    const buy = {
      type: "buy",
      quantity: this.buy.get('quantity').value,
      price: this.buy.get('price').value,
      coinName: this.coin
    }
    this.authService.buy_sell(buy).subscribe(data=>
    {
      console.log(data);
      this.buy_sell_res=data;
      this._flashMessagesService.show(this.buy_sell_res.message, { cssClass: 'alert-info', timeout: 2000 });
      this.processing=false;
      this.enableFormbuy();
    });
  }

  onSubmitSell()
  {
    this.processing=true;
    this.disableFormsell();
    const sell = {
      type: "sell",
      quantity: this.sell.get('quantity').value,
      price: this.sell.get('price').value,
      coinName: this.coin
    }
    this.authService.buy_sell(sell).subscribe(data=>
    {
      console.log(data);
      this.buy_sell_res=data;
      this._flashMessagesService.show(this.buy_sell_res.message, { cssClass: 'alert-danger', timeout: 2000 });
      this.processing=false;
      this.enableFormsell();
    });
  }

  cancel()
  {
    this.authService.cancelOrder().subscribe(data=>
    {
      console.log(data);
    });
  }

  cancelone(id,symbol)
  {
    this.unfilled.forEach( (item, index) =>
    {
     if(item.status.orderId === id) this.unfilled.splice(index,1);
    });
    this.authService.cancelone(id,symbol).subscribe(data=>
    {
      console.log(data);
    });
  }

  prices(crypto)
  {
    this.showSpinner=true;
    this.coinz=crypto;
    this.coin= crypto.concat("BTC");
    this.socketService.checkPrice(this.coin);
    this.g=1;
    this.price=[];
    this.name=false;
    this.bidask=[];
    this.req=0;
    this.authService.getAddress(this.coinz).subscribe(data=>
    {
      this.adressres=data;
      if(this.adressres.coin!=null)
      {
        this.altcoin=this.adressres.coin.amount[0];
      }
      this.bitcoin=this.adressres.btc.amount[0];
    })
  }

  ticker(crypto)
  {
    this.coin= crypto.concat("BTC");
    this.socketService.checkTicker(this.coin);
  }

  markets(crypto)
  {
    this.coin= crypto.concat("BTC");
    this.socketService.checkmarket(this.coin);
  }

  tradeHistory()
  {
    this.socketService.checktrade("XRPBTC",this.ids);
  }

  ngOnInit()
  {
    this.dashboardComponent.localStorage();
    this.g=1;
    this.authService.getAddress(this.coinz).subscribe(data=>
    {
      console.log(data);
      this.res=data;
      if(this.res.coin!=null)
      {
        this.altcoin=this.res.coin.amount[0];
      }
    })

    this.socketService.getPrice().subscribe(data =>
    {
      this.sys=data;
      if(this.coin==this.sys.symbol)
      {
        this.price=data;
        this.bidask=this.price.bidask;
        this.index=this.price.symbol.indexOf("B");
        this.price.symbol=this.price.symbol.slice(0,this.index);

        this.bidsasks.push(this.bidask);
        if (this.bidsasks.length > 3) this.bidsasks.splice(0, 1);

        if(this.g==1)
        {

          this.prize=this.price.close;
        }
        this.g=0;
        this.showSpinner=false;
        this.name=true;
      }
    });

    this.connectionData = this.socketService.getmarket().subscribe(data =>
    {
      this.market.push(data);
      if (this.market.length > 5) this.market.splice(0, 1);
    });

    this.connectionData1 = this.socketService.miniTicker().subscribe(data =>
    {
      this.askk.push(data);
      if (this.askk.length > 5) this.askk.splice(0, 1);
    });

    this.socketService.getTrade().subscribe(data =>
    {
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
          this.y++;
        }
      }
    });

    // this.sub = Observable.interval(5000).subscribe((val) =>
    // {
    //   this.tradeHistory();
    // });

    setTimeout(() =>
    {
      this.tradeHistory();
    }, 500);

    setTimeout(() =>
    {
      this.prices("XRP");
    }, 500);

    setTimeout(() =>
    {
      this.ticker("XRP");
    }, 2000);

    setTimeout(() =>
    {
      this.markets("XRP");
    }, 500);
  }

}
