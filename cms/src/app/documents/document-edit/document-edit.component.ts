import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Document } from '../document.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

  document: Document;
  origianlDocument: Document;
  editMode: boolean = false;

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute) {

              }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    const id = params ['id'];
    if (!id) {
      this.editMode = false;
      return;
    }

    this.origianlDocument = this.documentService.getDocument(id);
    if (!this.origianlDocument) {
      return;
    }
    this.editMode = true;
    this.document = JSON.parse(JSON.stringify(this.origianlDocument));
      }
    );
  }

  onSubmit(form: NgForm) {
    let newDocument = new Document (String(this.documentService.getMaxID()),
                      form.value.name, form.value.description, form.value.url, null);

    if (this.editMode === true) {
      this.documentService.updateDocument(this.origianlDocument, newDocument);
    } else {
        this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents']);
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }

}
