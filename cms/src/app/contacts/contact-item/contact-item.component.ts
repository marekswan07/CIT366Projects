import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact-list/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    console.log( 'contact = ' + this.contact);
  }

  // onContactSelected(contact: Contact) {
  //   this.contactWasSelectedEvent.emit(contact);
  //   }
}
