import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit
{
  res;
  currentUrl;
  user;
  coins;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit()
  {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.authService.checkCoins(this.currentUrl.id).subscribe(data=>
    {
      console.log(data);
      this.res=data;
      this.user=this.res.user;
      this.coins=this.res.coins;
    });
  }

}
