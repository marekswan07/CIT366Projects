import { Component, OnInit, Input } from '@angular/core';
import { Contact} from '../contact-list/contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  @Input() contact: Contact;
  id: string;
  nativeWindow: any;

  constructor(private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private WindRefService: WindRefService ) { 
      this.nativeWindow = WindRefService.getNativeWindow();
    }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.contact = this.contactService.getContact(this.id);
        }
      );
    }

     onDelete() {
       this.contactService.deleteContact(this.contact);
       this.router.navigate(['/contacts'], {relativeTo: this.activatedRoute});
      }

}
