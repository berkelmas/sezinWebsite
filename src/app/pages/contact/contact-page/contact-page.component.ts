import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { take } from "rxjs/operators";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"],
})
export class ContactPageComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  loadingState: boolean;
  successState: boolean;
  failState: boolean;
  @ViewChild("contactForm", { static: false }) contactForm: NgForm;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  handleSubmit() {
    let params = new HttpParams();
    params = params.append("to", "me@berkelmas.com");
    params = params.append("subject", this.contactForm.value.email);
    params = params.append("message", this.contactForm.value.message);
    this.loadingState = true;
    this.http
      .get("https://us-central1-digitarc-site.cloudfunctions.net/helloWorld", {
        params,
      })
      .pipe(take(1))
      .subscribe(
        () => {
          this.contactForm.reset();
          this.successState = true;
          this.loadingState = false;
          setTimeout(() => {
            this.successState = false;
          }, 3000);
        },
        () => {
          this.contactForm.reset();
          this.failState = true;
          this.loadingState = false;
          setTimeout(() => {
            this.failState = false;
          }, 3000);
        }
      );
  }
}
