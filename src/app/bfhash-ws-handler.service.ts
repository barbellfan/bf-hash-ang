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

    const req = this.http.get("http://127.0.0.1:8000/BruteForceHashcode",
      {
        responseType: "text"
      });
    req.subscribe(
      (response) => {
        console.log("Response from web service: " + response);
    },
    (error) => {
      console.log("Response failed with error: ");
      console.log(error.status);
      console.log(error.statusText);
      console.log(error.url);
      console.log(error.name);
      console.log(error.message);
    },
    () => {
      console.log("Response did something");
    });

  }
}
