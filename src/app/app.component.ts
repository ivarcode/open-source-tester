import { Component, OnInit, NgModule } from '@angular/core';
import {
  KeyboardKeys,
  IKeyboardShortcutListenerOptions
} from '@mt-ng2/keyboard-shortcuts-module';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'open-source-tester';
  form = new FormGroup({
    key1: new FormControl(''),
    key2: new FormControl('')
  });
  outputElement = 'this is the output element default text';
  ksl: IKeyboardShortcutListenerOptions[] = [];
  kslo1: IKeyboardShortcutListenerOptions = {
    keyBinding: [KeyboardKeys.Alt, 'S', 'U'],
    description: 'test kslo'
  };

  ngOnInit() {
    this.ksl.push(this.kslo1);
    this.outputElement = '';
    this.populateOutputElement();
  }

  addShortcut(): void {
    console.log(this.form.value.key1);
    this.outputElement = '';
    this.ksl.push({
      keyBinding: [this.form.value.key1, this.form.value.key2],
      description: 'add that shortcut legoo'
    });
    this.populateOutputElement();
  }

  populateOutputElement(): void {
    console.log(this.ksl);
    for (let kslo of this.ksl) {
      for (let i = 0; i < kslo.keyBinding.length; i++) {
        if (i !== 0) {
          this.outputElement += ' + ';
        }
        this.outputElement += kslo.keyBinding[i];
      }
      this.outputElement += '\n';
    }
  }

  save(): void {
    // TODO
  }
}
