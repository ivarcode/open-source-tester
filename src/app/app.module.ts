import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxKeyboardShortcutsModule } from 'ngx-keyboard-shortcuts';
import { KeyboardShortcutModule } from '@mt-ng2/keyboard-shortcuts-module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxKeyboardShortcutsModule,
    KeyboardShortcutModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
