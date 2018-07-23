import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit
{
  show:boolean = false;
  rates:any;
  alpha;
  bitcoin:any;

  constructor(private socketService: SocketService, private graphComponent:GraphComponent) {}

  prices(crypto)
  {
    this.socketService.checkPrice(crypto);
  }

  coin(cryptos)
  {
    this.graphComponent.chart(cryptos);
  }

  ngOnInit()
  {
    setTimeout(() =>
    {
      this.prices("XRPBTC");
    }, 500);

    this.socketService.getPrice().subscribe(data =>
    {
      this.alpha=data;
      this.rates=this.alpha.tickers;
      this.show=true;
    });
  }

}
