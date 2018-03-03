import { Component, OnInit, Input } from '@angular/core';
import { Contact} from '../contact-list/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
      this.contactService.contactSelectedEvent.subscribe(
        (contact: Contact) => {
          this.contact = contact;
        }
      );
    }

}
