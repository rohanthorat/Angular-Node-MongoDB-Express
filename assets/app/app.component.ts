import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message = {
        content: 'Just testing',
        author: 'Rohan Thorat'
    }
}