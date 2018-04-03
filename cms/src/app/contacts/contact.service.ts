import { Contact } from './contact-list/contact.model';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactService {
    @Output() contactSelectedEvent: EventEmitter<Contact> = new EventEmitter<Contact>();
    @Output() contactChangedEvent: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();
    contactListChangedEvent = new Subject<Contact[]>();
    contacts: Contact[] = [];
    maxContactID: number;



    constructor() {
        this.contacts = MOCKCONTACTS;
        this.maxContactID = this.getMaxID();
    }

    getContacts(): Contact[] {
        return this.contacts.slice();
    }

    getContact(id: string): Contact {
        for (const contact in this.contacts) {
            if (this.contacts[contact].id === id) {
                return this.contacts[contact];
            }
        }
        return null;
    }

    deleteContact(contact: Contact) {
        if (!contact) {
            return;
        }
        var pos = this.contacts.indexOf(contact);
            if (pos < 0) {
                return;
            }
        this.contacts.splice(pos, 1);
        this.contactListChangedEvent.next(this.contacts);
    }

    addContact(newContact: Contact) {
        if (!newContact){
            return;
        }
        this.maxContactID++;
        newContact.id = this.maxContactID.toString();
        this.contacts.push(newContact);
        this.contactListChangedEvent.next(this.contacts.slice());

    }

    updateContact(orginalContact: Contact, newContact: Contact) {
        if (!orginalContact) {
           return;
        }

        var pos = this.contacts.indexOf(orginalContact);
        if (pos < 0) {
            return;
        }

        newContact.id = orginalContact.id;
        this.contacts[pos] = newContact;
        this.contactListChangedEvent.next(this.getContacts());

    }

    getMaxID(): number {
        let maxID = 0;

        for (let contact in this.contacts) {
           let currentID = parseInt(this.contacts[contact].id);
           if (currentID > maxID) {
               maxID = currentID;
           }
        }
        return maxID;

    }

}
