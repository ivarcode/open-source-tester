import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  IListenerHandle,
  IKeyboardShortcutListenerConstructorObject,
  KeyboardKeys,
  KeyboardShortcutsService,
  IKeyboardShortcutListenerOptions,
  KeyboardShortcutCombination
} from '@mt-ng2/keyboard-shortcuts-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'open-source-tester';
  form = new FormGroup({
    key1: new FormControl(''),
    key2: new FormControl('')
  });
  listenerObjectStatus: string;
  outputArray = [];
  listeners: any[];
  constructor(private keyboardShortcutsService: KeyboardShortcutsService) {}

  ngOnInit() {
    this.listenerObjectStatus = '';
    this.listeners = [];
    this.outputArray = [];
    // populating element that displays current Keyboard Listeners
    this.populateOutputArray();
  }

  ngOnDestroy() {
    // destroys all the listeners when the component is destroyed
    for (let i of this.listeners) {
      i.listener.remove();
    }
  }

  // creates and adds listener object to array listeners
  addShortcut(): void {
    const newListenerConstructor = {} as IKeyboardShortcutListenerConstructorObject;
    const kb = [this.form.value.key1, this.form.value.key2];
    Object.assign(
      newListenerConstructor,
      { handler: this.alertMessage.bind(kb) },
      {
        keyBinding: kb,
        description: 'new shortcut'
      }
    );
    this.listeners.push({
      listener: this.keyboardShortcutsService.listen(newListenerConstructor),
      output: kb[0] + ' + ' + kb[1]
    });
    this.populateOutputArray();
  }

  // delete's listener object from array at index i
  deleteShortcut(i: number): void {
    this.listeners[i].listener.remove();
    this.listeners.splice(i, 1);
    this.populateOutputArray();
  }

  private alertMessage(): void {
    const keyboardCombo: KeyboardShortcutCombination = this as any;
    alert(
      'shortcut ' +
        keyboardCombo[0] +
        ' + ' +
        keyboardCombo[1] +
        ' successfully triggered'
    );
  }

  populateOutputArray(): void {
    this.outputArray = [];
    for (let i of this.listeners) {
      this.outputArray.push(i.output);
    }
    this.listenerObjectStatus = 'LISTENER OBJECT ACTIVE :: contains ' + this.outputArray.length + ' listeners';
  }
}
