import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // UntukIcon
  faMagnifyingGlass = faMagnifyingGlass
  faSlidersUp = faSliders
  constructor(private modalService: NgbModal) {
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, {centered: true});
  }
}
