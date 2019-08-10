import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule {}
