import { Component } from '@angular/core';
// import { Admin } from './admin/admin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
clickColor: any;

  colorWasChanged(colorChosen: string){
    this.clickColor = colorChosen;
    // console.log(colorChosen);
  }

}
