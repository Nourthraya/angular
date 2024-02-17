import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  color:string="red";
  title: string="welcome projectBI";
msg(){
  alert("welcome to project bi");
  console.log("hello test :");
}

}
