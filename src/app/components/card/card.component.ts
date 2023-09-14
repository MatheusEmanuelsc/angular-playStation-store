import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gameCover:string=""

  @Input()
  gameType:string="Digital ps4"
  @Input()
  gamePrice:string="399,90"
  @Input()
  gameLabel:string="";
}
