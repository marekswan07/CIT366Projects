import { Message } from './message.model';
import { Injectable, EventEmitter } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable()
export class MessageService {
    messageChangeEvent = new EventEmitter<Message[]>();
    messages: Message[] = [];

    constructor() {
        this.messages = MOCKMESSAGES;
    }

    getMessages(): Message[] {
        return this.messages.slice();
    }

    getMessage(id: string): Message {
        for (let message in this.messages) {
            if (message.id === id) {
             return message;
            }
        }
        return null;
    }

    addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangeEvent.emit(this.messages.slice());
    }
}
