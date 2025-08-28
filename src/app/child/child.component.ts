import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

    // Step 1: Create EventEmitter with instance @Output
  @Output() studentSelected: EventEmitter<string> = new EventEmitter();

  // Step 2: Method to emit value
  sendStudentName() {
    const studentName = 'Andy';
    this.studentSelected.emit(studentName); // send data to parent
  }
}
