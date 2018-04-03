import { Document } from './document.model';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs/Subject';

export class DocumentService {
    @Output() documentSelectedEvent = new EventEmitter<Document>();
    @Output() documentListChangedEvent = new Subject <Document[]>();
    maxDocumentId: number;
    documents: Document[] = [];

    constructor() {
        this.documents = MOCKDOCUMENTS;
        this.maxDocumentId = this.getMaxID();
    }

    getDocuments(): Document[] {
        return this.documents.slice();
    }

    getDocument(id: string): Document {
        for (const document in this.documents) {
            if (this.documents[document].id === id) {
                return this.documents[document];
            }
        }
        return null;
    }

    deleteDocument(document: Document) {
        if (!document) {
          return;
        }
         var pos = this.documents.indexOf(document);
             if (pos < 0) {
             return;
             }
        this.documents.splice(pos, 1);
        this.documentListChangedEvent.next(this.documents);
 }

     addDocument(newDocument: Document) {
         if (newDocument == null) {
             return;
         }

         this.maxDocumentId++;
         newDocument.id = this.maxDocumentId.toString();
         this.documents.push(newDocument);
         this.documentListChangedEvent.next(this.documents.slice());
     }

     updateDocument(originalDocument: Document, newDocument: Document ) {
         if (!originalDocument) {
             return;
             }

         var pos = this.documents.indexOf(originalDocument);
         if (pos < 0 ) {
             return;
         }

         newDocument.id = originalDocument.id;
         this.documents[pos] = newDocument;
         this.documentListChangedEvent.next(this.getDocuments());
     }

     getMaxID(): number {
         let maxID = 0;

         for (let document in this.documents) {
            let currentID = parseInt(this.documents[document].id);
            if (currentID > maxID) {
                maxID = currentID;
            }
         }
         return maxID;

     }

}
