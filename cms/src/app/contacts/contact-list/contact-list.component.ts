import { Component, OnInit } from '@angular/core';
import { Contact} from '../contact-list/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact (1, 'Bro.Jackson', 'JacksonK@byui.edu', 208-496-3771 , '../assets/images/Jackson.jpg', null),
    new Contact (2, 'Bro.Barzee', 'barzeer@byui.edu', 208-496-3767 , '../assets/images/Barzee.jpg', null)
  ];
  constructor() { }

  ngOnInit() {
  }

}
