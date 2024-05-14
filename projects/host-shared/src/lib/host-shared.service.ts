import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostSharedService {


  public shared : WritableSignal<string> = signal('');

  constructor() { }

  
}
