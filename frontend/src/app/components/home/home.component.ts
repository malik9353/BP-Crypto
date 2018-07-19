import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  title = 'app';
  test = 2;

  constructor() {}

  ngOnInit()
  {
    this.loadScript();
  }
  public loadScript()
  {
	    var isFound = false;
	    var scripts = document.getElementsByTagName("script")
	    for (var i = 0; i < scripts.length; ++i)
      {
	        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader"))
          {
	            isFound = true;
	        }
	    }

	    if (!isFound)
      {
	        var dynamicScripts = ["https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"];
	        for (var i = 0; i < dynamicScripts .length; i++)
          {
	            let node = document.createElement('script');
	            node.src = dynamicScripts [i];
	            node.type = 'text/javascript';
	            node.async = true;
	            node.charset = 'utf-8';
	            node.text = '{"width": "100%","height": "500","locale": "en","symbolsGroups": [{"name": "Crypto Market","symbols": [{"name": "BINANCE:ADABTC","displayName": "ADA/BTC"},{"name": "BINANCE:ADXBTC","displayName": "ADX/BTC"},{"name":"BINANCE:AEBTC","displayName":"AE/BTC"},{"name":"BINANCE:AGIBTC","displayName":"AGI/BTC"},{"name":"BINANCE:AIONBTC","displayName":"AION/BTC"},{"name":"BINANCE:AMBBTC","displayName":"AMB/BTC"},{"name":"BINANCE:APPCBTC","displayName":"APPC/BTC"},{"name":"BINANCE:ARKBTC","displayName":"ARK/BTC"},{"name":"BINANCE:ARNBTC","displayName":"ARN/BTC"},{"name":"BINANCE:ASTBTC","displayName":"AST/BTC"},{"name":"BINANCE:BATBTC","displayName":"BAT/BTC"},{"name":"BINANCE:BCCBTC","displayName":"BCC/BTC"},{"name":"BINANCE:BCDBTC","displayName":"BCD/BTC"},{"name":"BINANCE:BCNBTC","displayName":"BCN/BTC"},{"name":"BINANCE:BCPTBTC","displayName":"BCPT/BTC"},{"name":"BINANCE:BLZBTC","displayName":"BLZ/BTC"},{"name":"BINANCE:BNBBTC","displayName":"BNB/BTC"},{"name": "BINANCE:BNTBTC","displayName": "BNT/BTC"},{"name": "BINANCE:BQXBTC","displayName": "BQX/BTC"},{"name": "BINANCE:BRDBTC","displayName": "BRD/BTC"},{"name": "BINANCE:BTGBTC","displayName": "BTG/BTC"},{"name": "BINANCE:BTSBTC","displayName": "BTS/BTC"},{"name": "BINANCE:CDTBTC","displayName": "CDT/BTC"},{"name": "BINANCE:CHATBTC","displayName": "CHAT/BTC"},{"name": "BINANCE:CLOAKBTC","displayName":"CLOCK/BTC"},{"name": "BINANCE:CMTBTC","displayName": "CMT/BTC"},{"name": "BINANCE:CNDBTC","displayName": "CND/BTC"},{"name": "BINANCE:CVCBTC","displayName": "CVC/BTC"},{"name": "BINANCE:DASHBTC","displayName": "DASH/BTC"},{"name": "BINANCE:DATABTC","displayName": "DATA/BTC"},{"name": "BINANCE:DENTBTC","displayName": "DENT/BTC"},{"name": "BINANCE:DGDBTC","displayName": "DGD/BTC"},{"name": "BINANCE:DLTBTC","displayName": "DLT/BTC"},{"name": "BINANCE:DNTBTC","displayName": "DNT/BTC"},{"name": "BINANCE:EDOBTC","displayName": "EDO/BTC"},{"name": "BINANCE:ELFBTC","displayName": "ELF/BTC"},{"name": "BINANCE:ENGBTC","displayName": "ENG/BTC"},{"name": "BINANCE:ENJBTC","displayName": "ENJ/BTC"},{"name": "BINANCE:EOSBTC","displayName": "EOS/BTC"},{"name": "BINANCE:ETCBTC","displayName": "ETC/BTC"},{"name": "BINANCE:ETHBTC","displayName": "ETH/BTC"},{"name": "BINANCE:EVXBTC","displayName": "EVX/BTC"},{"name": "BINANCE:FUELBTC","displayName": "FUEL/BTC"},{"name": "BINANCE:FUNBTC","displayName": "FUN/BTC"},{"name": "BINANCE:GASBTC","displayName": "GAS/BTC"},{"name": "BINANCE:GNTBTC","displayName": "GNT/BTC"},{"name": "BINANCE:GRSBTC","displayName": "GRS/BTC"},{"name": "BINANCE:GTOBTC","displayName": "GTP/BTC"},{"name": "BINANCE:GVTBTC","displayName": "GVT/BTC"},{"name": "BINANCE:GXSBTC","displayName": "GXS/BTC"},{"name": "BINANCE:HSRBTC","displayName": "HSR/BTC"},{"name": "BINANCE:ICNBTC","displayName": "ICN/BTC"},{"name": "BINANCE:ICXBTC","displayName": "ICX/BTC"},{"name": "BINANCE:INSBTC","displayName": "INS/BTC"},{"name": "BINANCE:IOSTBTC","displayName": "IOST/BTC"},{"name": "BINANCE:IOTABTC","displayName": "IOTA/BTC"},{"name": "BINANCE:IOTXBTC","displayName": "IOTX/BTC"},{"name": "BINANCE:KEYBTC","displayName": "KEY/BTC"},{"name": "BINANCE:KMDBTC","displayName": "KMD/BTC"},{"name": "BINANCE:KNCBTC","displayName": "KNC/BTC"},{"name": "BINANCE:LENDBTC","displayName": "LEND/BTC"},{"name": "BINANCE:LINKBTC","displayName": "LINK/BTC"},{"name": "BINANCE:LOOMBTC","displayName": "LOOM/BTC"},{"name": "BINANCE:LRCBTC","displayName": "LRC/BTC"},{"name": "BINANCE:LSKBTC","displayName": "LSK/BTC"},{"name": "BINANCE:LTCBTC","displayName": "LTC/BTC"},{"name": "BINANCE:LUNBTC","displayName": "LUN/BTC"},{"name": "BINANCE:MANABTC","displayName": "MANA/BTC"},{"name": "BINANCE:MCOBTC","displayName": "MNO/BTC"},{"name": "BINANCE:MDABTC","displayName": "MDA/BTC"},{"name": "BINANCE:MFTBTC","displayName": "MFT/BTC"},{"name": "BINANCE:MODBTC","displayName": "MOD/BTC"},{"name": "BINANCE:MTHBTC","displayName": "MTH/BTC"},{"name": "BINANCE:MTLBTC","displayName": "MTL/BTC"},{"name": "BINANCE:NANOBTC","displayName": "NANO/BTC"},{"name": "BINANCE:NASBTC","displayName": "NAS/BTC"},{"name": "BINANCE:NAVBTC","displayName": "NAV/BTC"},{"name": "BINANCE:NCASHBTC","displayName": "NCASH/BTC"},{"name": "BINANCE:NEBLBTC","displayName": "NEBL/BTC"},{"name": "BINANCE:NEOBTC","displayName": "NEO/BTC"},{"name": "BINANCE:NPXSBTC","displayName": "NPXS/BTC"},{"name": "BINANCE:NULSBTC","displayName": "NULS/BTC"},{"name": "BINANCE:NXSBTC","displayName": "NXS/BTC"},{"name": "BINANCE:OAXBTC","displayName": "OAX/BTC"},{"name": "BINANCE:OMGBTC","displayName": "OMG/BTC"},{"name": "BINANCE:ONTBTC","displayName": "ONT/BTC"},{"name": "BINANCE:OSTBTC","displayName": "OST/BTC"},{"name": "BINANCE:PIVXBTC","displayName": "PIVX/BTC"},{"name": "BINANCE:POABTC","displayName": "POA/BTC"},{"name": "BINANCE:POEBTC","displayName": "POE/BTC"},{"name": "BINANCE:POWRBTC","displayName": "POWR/BTC"},{"name": "BINANCE:PPTBTC","displayName": "PPT/BTC"},{"name": "BINANCE:QKCBTC","displayName": "QKC/BTC"},{"name": "BINANCE:QLCBTC","displayName": "QLC/BTC"},{"name": "BINANCE:QSPBTC","displayName": "QSP/BTC"},{"name": "BINANCE:QTUMBTC","displayName": "QTUM/BTC"},{"name": "BINANCE:RCNBTC","displayName": "RCN/BTC"},{"name": "BINANCE:RDNBTC","displayName": "RDN/BTC"},{"name": "BINANCE:REPBTC","displayName": "REP/BTC"},{"name": "BINANCE:REQBTC","displayName": "REQ/BTC"},{"name": "BINANCE:RLCBTC","displayName": "RLC/BTC"},{"name": "BINANCE:RPXBTC","displayName": "RPX/BTC"},{"name": "BINANCE:SALTBTC","displayName": "SALT/BTC"},{"name": "BINANCE:SCBTC","displayName": "SC/BTC"},{"name": "BINANCE:SKYBTC","displayName": "SKY/BTC"},{"name": "BINANCE:SNGLSBTC","displayName": "SNGLS/BTC"},{"name": "BINANCE:SNMBTC","displayName": "SNM/BTC"},{"name": "BINANCE:STEEMBTC","displayName": "STEEM/BTC"},{"name": "BINANCE:STORJBTC","displayName": "STORJ/BTC"},{"name": "BINANCE:STORMBTC","displayName": "STORM/BTC"},{"name": "BINANCE:SUBBTC","displayName": "SUB/BTC"},{"name": "BINANCE:SYSBTC","displayName": "SYS/BTC"},{"name": "BINANCE:THETABTC","displayName": "THETA/BTC"},{"name": "BINANCE:TNBBTC","displayName": "TNB/BTC"},{"name": "BINANCE:TNTBTC","displayName": "TNT/BTC"},{"name": "BINANCE:TRIGBTC","displayName": "TRIG/BTC"},{"name": "BINANCE:TRXBTC","displayName": "TRX/BTC"},{"name": "BINANCE:TUSDBTC","displayName": "TUSD/BTC"},{"name": "BINANCE:VENBTC","displayName": "VEN/BTC"},{"name": "BINANCE:VIBEBTC","displayName": "VIBE/BTC"},{"name": "BINANCE:WABIBTC","displayName": "WABI/BTC"},{"name": "BINANCE:WANBTC","displayName": "WAN/BTC"},{"name": "BINANCE:WAVESBTC","displayName": "WAVES/BTC"},{"name": "BINANCE:WINGSBTC","displayName": "WINGS/BTC"},{"name": "BINANCE:WPRBTC","displayName": "WPR/BTC"},{"name": "BINANCE:WTCBTC","displayName": "WTC/BTC"},{"name": "BINANCE:XEMBTC","displayName": "XEM/BTC"},{"name": "BINANCE:XLMBTC","displayName": "XLM/BTC"},{"name": "BINANCE:XMRBTC","displayName": "XMR/BTC"},{"name": "BINANCE:XRPBTC","displayName": "XRP/BTC"},{"name": "BINANCE:XVGBTC","displayName": "XVG/BTC"},{"name": "BINANCE:XZCBTC","displayName": "XZC/BTC"},{"name": "BINANCE:YOYOBTC","displayName": "YOYO/BTC"},{"name": "BINANCE:ZECBTC","displayName": "ZEC/BTC"},{"name": "BINANCE:ZENBTC","displayName": "ZEN/BTC"},{"name": "BINANCE:ZILBTC","displayName": "ZIL/BTC"},{"name": "BINANCE:ZRXBTC","displayName": "ZRX/BTC"}]}],"largeChartUrl": "http://localhost:4200/exchange"}';
	            document.getElementById('scripttag').appendChild(node);
	        }

	    }
	}
}
