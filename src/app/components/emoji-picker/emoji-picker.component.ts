import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent implements OnInit {
  name = 'World';
  content = '';
  showEmoji = false;
  caretPos: number = 0;
  color = "";
  @ViewChild('inputColor', { static: true }) inputColor;
  @Output('touchEmitter') touchEmitter = new EventEmitter;

  ngOnInit(): void { }

  getCaretPos(evt) {
    if (evt.selectionStart || evt.selectionStart == '0') {
      this.caretPos = evt.selectionStart;
    }
    // console.log(this.touchEmitter);
    let message = 'Oh my god its clicked!!'
    this.touchEmitter.emit(message)
  }

  addEmoji(evt) {
    this.content = [
      this.content.slice(0, this.caretPos),
      evt.emoji.native,
      this.content.slice(this.caretPos)].join('');
  }
}
