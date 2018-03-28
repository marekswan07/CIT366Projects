import { Document } from './document.model';
import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

export class DocumentService {
    documentSelectedEvent = new EventEmitter<Document>();
    documents: Document[] = [];

    constructor() {
        this.documents = MOCKDOCUMENTS;
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
        if (document === null) {
          return;
    }

 }
}
