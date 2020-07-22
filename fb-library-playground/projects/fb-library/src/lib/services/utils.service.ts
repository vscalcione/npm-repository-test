import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  /**
   * Hello message
   */
  title = 'Card footer';

  /**
   * Add operation
   */
  add(a: number, b: number){
    return a + b;
  }
}
