import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DropdownFeaturesDirective } from './Custom Directives Shared/dropdown-features.directive';
import { ContactService } from './contacts/contact.service';
import { DocumentService } from './documents/document.service';
import { MessageService } from './messages/messages.service';
import { AppRoutingModule } from './app-routing';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import { WindRefService } from './wind-ref.service';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactsDetailComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DropdownFeaturesDirective,
    DocumentEditComponent,
    DocumentViewComponent,
    ContactEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactService, DocumentService, MessageService, WindRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
