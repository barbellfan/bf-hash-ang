import { Component } from '@angular/core';

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

  bfStart(hashcode: string, maxlen: number) {
    this.bfRequest.hashcode = hashcode;
    this.bfRequest.maxLen = maxlen;
    console.log("hashcode: " + this.bfRequest.hashcode);
    console.log("maxLen: " + this.bfRequest.maxLen);
  }
}
