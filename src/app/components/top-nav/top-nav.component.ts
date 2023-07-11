import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
@Output() toggleSideMenuEvent = new EventEmitter();


  toggleSideMenu(){
    this.toggleSideMenuEvent.emit();
  }
}
