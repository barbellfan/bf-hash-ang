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

  bfStart() {
    console.log("hashcode: " + this.bfRequest.hashcode);
    console.log("maxLen: " + this.bfRequest.maxLen);
    console.log("includeDigits: " + this.bfRequest.includeDigits);
    console.log("includeLowerCase: " + this.bfRequest.includeLowerCase);
    console.log("includeUpperCase: " + this.bfRequest.includeUpperCase);
    console.log("includePunctuation: " + this.bfRequest.includePunctuation);
    console.log("includeWhiteSpace: " + this.bfRequest.includeWhiteSpace);
  }
}
