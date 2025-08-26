import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
myClass = 'highlight';
  
 myClasses = ['highlight', 'boldText'];

//  isError = true;
//   isSpecial = true;

// Conditions (flags) to control styling
  hasError: boolean = true;
  isSpecial: boolean = false;
  isActive: boolean = true;

  // Method to toggle flags (for demo)
  toggleStates() {
    this.hasError = !this.hasError;
    this.isSpecial = !this.isSpecial;
    this.isActive = !this.isActive;
  }

}
