import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
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
  sell: FormGroup;
  buy: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService:AuthService)
  {
    this.createForm();
  }

  createForm()
  {
    this.buy = this.formBuilder.group(
    {
      price: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15)
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

  onSubmitBuy()
  {

  }

  onSubmitSell()
  {

  }

  ngOnInit() {}

}
