import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

@Input() card;
  constructor() { }

  ngOnInit() {
  }

}
