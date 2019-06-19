import { Component } from '@angular/core';
import {
  KeyboardShortcutCombination,
  KeyboardKeys
} from '@mt-ng2/keyboard-shortcuts-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-source-tester';

  shortcutKeyCombination: KeyboardShortcutCombination = [KeyboardKeys.Alt, 'S'];

  save(): void {
    // TODO
  }
}
