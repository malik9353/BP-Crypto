import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-total-assets',
  templateUrl: './total-assets.component.html',
  styleUrls: ['./total-assets.component.scss']
})
export class TotalAssetsComponent implements OnInit
{
  res;
  total;
  showSpinner:boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit()
  {
    this.authService.totalBalance().subscribe(data=>
    {
      console.log(data);
      this.res=data;
      this.total=this.res.balance;
      this.showSpinner=false;
    });

  }

}
