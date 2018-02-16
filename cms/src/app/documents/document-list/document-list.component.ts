import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document} from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelectedEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document (1,
      'CIT260 - Object Oriented Programming',
      'Learn Java and how to say O-lava-son!',
      // tslint:disable-next-line:max-line-length
      'http://www.byui.edu/catalog/#/courses/NJsaox3sW?bc',
      null),
    new Document (2,
      'CIT366 - Full Web Stack Devlopment',
      'Prepare to be blown away how complex wed dev can really be!',
      // tslint:disable-next-line:max-line-length
      'http://www.byui.edu/catalog/#/courses/E1qTje2iW?bc=',
      null),
    new Document (3,
      'CIT425 - Data Warehousing',
      'DATA IS IN WAREHOUSES????!',
      // tslint:disable-next-line:max-line-length
      'http://www.byui.edu/catalog/#/courses/E1qTje2iW?bc=',
      null),
    new Document (4,
       'CIT470 - System Security 2',
        'Hack Brother Rigbys servers',
        // tslint:disable-next-line:max-line-length
        'http://www.byui.edu/catalog/#/courses/E1qTje2iW?bc=',
        null),
    new Document (5,
      'CIT 495 - Senior Practicum',
      'Show us you really learnt something here at BYU-I!',
       // tslint:disable-next-line:max-line-length
       'http://www.byui.edu/catalog/#/courses/E1qTje2iW?bc=',
       null)
  ];

  constructor() { }

  ngOnInit() {
  }

  onDocumentSelected(document: Document) {
    this.documentWasSelectedEvent.emit(document);
    }

}
