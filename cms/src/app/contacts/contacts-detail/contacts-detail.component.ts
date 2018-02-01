import { Component, OnInit, Input } from '@angular/core';
import { Contact} from '../contact-list/contact.model';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  @Input() contact: Contact;
  contacts: Contact[] = [];

  constructor() { }

  ngOnInit() {
  }

}
