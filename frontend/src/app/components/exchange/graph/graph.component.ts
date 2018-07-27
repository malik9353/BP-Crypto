import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component(
{
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit
{

  constructor() {}

  chart(coinz)
  {
    if(coinz=="XRP")
    {
      $.getScript('../../../assets/js/trading.js')
      $.getScript('../../../assets/js/XRP.js');
    }
    else if(coinz=="ADX")
    {
      $.getScript('../../../assets/js/trading.js')
      $.getScript('../../../assets/js/ADX.js');
    }
    else if(coinz=="ADA")
    {
      $.getScript('../../../assets/js/trading.js')
      $.getScript('../../../assets/js/ADA.js');
    }
    else if(coinz=="AION")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/AION.js')
    }
    else if(coinz=="AE")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/AE.js');
    }
    else if(coinz=="BNB")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/BNB.js');
    }
    else if(coinz=="BCC")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/BCC.js');
    }
    else if(coinz=="BQX")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/BQX.js');
    }
    else if(coinz=="ICN")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/ICN.js');
    }
    else if(coinz=="NEO")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/NEO.js');
    }
    else if(coinz=="LINK")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/LINK.js')
    }
    else if(coinz=="SALT")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/SALT.js')
    }
    else if(coinz=="IOTA")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/IOTA.js')
    }
    else if(coinz=="ETC")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/ETC.js');
    }
    else if(coinz=="KNC")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/KNC.js');
    }
    else if(coinz=="WTC")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/WTC.js');
    }
    else if(coinz=="SNT")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/SNT.js');
    }
    else if(coinz=="GAS")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/GAS.js');
    }
    else if(coinz=="SNM")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/SNM.js');
    }
    else if(coinz=="QTUM")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/QTUM.js');
    }
    else if(coinz=="LTC")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/LTC.js');
    }
    else if(coinz=="ETH")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/ETH.js');
    }
    else if(coinz=="STRAT")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/STRAT.js');
    }
    else if(coinz=="OMG")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/OMG.js');
    }
    else if(coinz=="MCO")
    {
      $.getScript('../../../assets/js/trading.js');
      $.getScript('../../../assets/js/MCO.js');
    }
  }

  ngOnInit()
  {
    $.getScript('../../../assets/js/trading.js');
    setTimeout(() =>
    {
      $.getScript('../../../assets/js/XRP.js');
    }, 1000);
  }

}
