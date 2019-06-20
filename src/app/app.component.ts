import { Component } from '@angular/core';
import {
  KeyboardShortcutCombination,
  KeyboardKeys,
  KeyboardShortcutDirective,
  IKeyboardShortcutListenerOptions
} from '@mt-ng2/keyboard-shortcuts-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-source-tester';

  kslo: IKeyboardShortcutListenerOptions = {
    keyBinding: [KeyboardKeys.Alt, 'S'],
    description: 'test kslo'
  };

  save(): void {
    // TODO
  }
}
