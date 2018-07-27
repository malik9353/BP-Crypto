import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit
{
  showSpinner:boolean = true;
  ids = localStorage.getItem('id');
  btc=0;
  assests=[];
  res;

  constructor(private authService:AuthService) { }

  ngOnInit()
  {
    this.authService.balance(this.ids).subscribe(data=>
    {
      this.res=data;
      this.btc=this.res.btcValue;
      this.assests=this.res.coins;
      this.showSpinner=false;
    });
  }

}
