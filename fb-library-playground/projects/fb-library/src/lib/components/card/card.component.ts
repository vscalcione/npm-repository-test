import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

/**
 * This component is a simplier card
 */
@Component({
  selector: 'fb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  /**
   * The title of the card
   */
  @Input() title: string; 
  
  /**
   * Represents if panel is opened or not
   */
  @Input() opened: boolean;
  
  /**
   * Invated when the user click on the titlebar
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor(public utils: UtilsService) {
    
  }
}
