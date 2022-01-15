import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeheaderComponent } from './welcomeheader/welcomeheader.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { InputComponent } from './input/input.component';
import { DatainputComponent } from './datainput/datainput.component';
import { OperationsComponent } from './operations/operations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DomeventsComponent } from './domevents/domevents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeheaderComponent,
    InstructionsComponent,
    InputComponent,
    DatainputComponent,
    OperationsComponent,
    DomeventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
