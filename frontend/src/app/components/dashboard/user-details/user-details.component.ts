import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ModalModule, WavesModule, InputsModule } from 'angular-bootstrap-md';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit
{
  ret;
  user;
  coins;
  res;
  users;
  show:boolean = false;

  constructor(private authService: AuthService) { }

  checkcoins(id)
  {
    console.log(id);
    this.authService.checkCoins(id).subscribe(data=>
    {
      this.ret=data;
      this.user=this.ret.user[0];

      console.log(this.user)
      this.coins=this.ret.coins;
      this.show=true;
    });
  }

  ngOnInit()
  {
    this.authService.userData().subscribe(data=>
    {
      this.res=data;
      this.users=this.res.result;
    })
  }

}
