import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-list/contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  currentContact: Contact;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

}
