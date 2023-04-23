import { Component } from '@angular/core';

import { BfhashWsHandlerService } from '../bfhash-ws-handler.service';
import { BFRequest } from './bfrequest'
import { BFResponse } from './bfresponse';

@Component({
  selector: 'app-bfhash',
  templateUrl: './bfhash.component.html',
  styleUrls: ['./bfhash.component.css']
})
export class BfhashComponent {
  bfRequest: BFRequest = {
    hashcode: "",
    maxLen: 0,
    includeDigits: false,
    includeLowerCase: false,
    includeUpperCase: false,
    includePunctuation: false,
    includeWhiteSpace: false
  }

  bfResponse: BFResponse = {
    resultFound: undefined,
    error: undefined
  }

  constructor(private bfhashWsHandlerService: BfhashWsHandlerService) {}

  bfStart() {
    this.bfhashWsHandlerService.BfHashRequest(this.bfRequest);
    console.log("From bfStart(): response result found = " + this.bfResponse.resultFound);
  }
}
