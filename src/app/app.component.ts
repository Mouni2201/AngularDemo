import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';

  
receivedStudentName: string = '';

  // Step 3: Method to receive data from child
  // onStudentReceived(name:string) this will be called when the child emit the event
  
  onStudentReceived(name: string) {
    this.receivedStudentName = name;
  }
}
