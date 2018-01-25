import { Component, OnInit } from '@angular/core';
import { Contact} from '../contact-list/contact.model';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contacts: Contact[] = [];

  constructor() { }

  ngOnInit() {
  }

}