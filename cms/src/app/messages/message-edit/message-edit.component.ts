import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectLRef') subjectInputRef: ElementRef;
  @ViewChild('msgTextLRef') msgTextInputRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender = 'Marek Swan';

  constructor() { }

  ngOnInit() {
  }

  onSendMessage() {
    const subjectContent = this.subjectInputRef.nativeElement.value;
    const msgContent = this.msgTextInputRef.nativeElement.value;
    const senderName = this.currentSender;
    const newMessage = new Message(5, subjectContent, msgContent, senderName);
    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = null;
    this.msgTextInputRef.nativeElement.value = null;
  }

}
