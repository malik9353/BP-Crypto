import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit
{
  res;
  users;
  showSpinner:boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit()
  {
    this.authService.userData().subscribe(data=>
    {
      this.res=data;
      this.users=this.res.result;
      this.showSpinner=false;
    })
  }

}
