import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "new-project";
  items: any;
  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {}
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {}
}
