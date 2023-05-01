import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BFRequest } from './bfhash/bfrequest'
import { BFResponse } from './bfhash/bfresponse';

@Injectable({
  providedIn: 'root'
})
export class BfhashWsHandlerService {

  constructor(private http: HttpClient) { }

  BfHashRequest(request: BFRequest) {

    const myObserver = {
      next: (response: String) => console.log("Response from web service: " + response),
      error: (error: Error) => console.log("Response failed with error: " + error.name + ": " + error.message),
      complete: () => console.log("Response complete")
    };

    const req = this.http.get("http://127.0.0.1:8000/BruteForceHashcode", { responseType: "text" });

    req.subscribe(myObserver);
  }

  nextHandler(response: String) {
    console.log("Response from web service: " + response);
  }

  responseHandler(error: Error) {
    console.log("Response failed with error: ");
    console.log(error.name);
    console.log(error.message);
  }

  completeHandler() {
    console.log("Response complete");
  }
}
