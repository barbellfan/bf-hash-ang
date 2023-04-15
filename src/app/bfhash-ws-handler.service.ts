import { Injectable } from '@angular/core';

import { BFRequest } from './bfhash/bfrequest'
import { BFResponse } from './bfhash/bfresponse';

@Injectable({
  providedIn: 'root'
})
export class BfhashWsHandlerService {

  constructor() { }

  BfHashRequest(request: BFRequest): BFResponse {

    console.log("From BfHashRequest()");
    console.log("hashcode: " + request.hashcode);
    console.log("maxLen: " + request.maxLen);
    console.log("includeDigits: " + request.includeDigits);
    console.log("includeLowerCase: " + request.includeLowerCase);
    console.log("includeUpperCase: " + request.includeUpperCase);
    console.log("includePunctuation: " + request.includePunctuation);
    console.log("includeWhiteSpace: " + request.includeWhiteSpace);

    let response: BFResponse = {
      resultFound: "nothing yet",
      error: ""
    }

    return response;
  }
}
