import { Component, OnInit, Output, } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [
    new Message (1, 'This is a test', 'hahah this works', 'Bro.Jackson'),
    new Message (2, 'Need HELP!!!', 'I need some Bro Jackson', 'Marek'),
    new Message (3, 're:Need HELP!!!', 'Sure come in =)', 'Bro.Jackson'),
    new Message (4, 're:re:Need HELP!!!', 'Cool I will be there shortly', 'Marek'),
   ];

  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
    }

}
