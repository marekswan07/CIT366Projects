import { Contact } from './contact-list/contact.model';
import { Injectable, EventEmitter } from '@angular/core';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable()
export class ContactService {
    contactSelectedEvent = new EventEmitter<Contact>();
    contacts: Contact[] = [];

    constructor() {
        this.contacts = MOCKCONTACTS;
    }

    getContacts(): Contact[] {
        return this.contacts.slice();
    }

    getContact(id: string): Contact {
        for (let contact in this.contacts) {
            if (this.contacts[contact].id === id) {
                return this.contacts[contact];
            }
        }
    }

}
