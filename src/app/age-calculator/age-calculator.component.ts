import { AgePipe } from '../age.pipe';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss']
})
export class AgeCalculatorComponent implements OnInit {
  public year: any = {};
  public age: any = {};
  public ageType: any = {};
  showColor: any;

  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit ():void {
    this.age.name = new AgePipe().transform(this.year.name);
    if(this.age.name > 18 && this.age.name < 50) {
      this.showColor = 'green';
      this.ageType.name = 'Major of 18';
    }
    else if(this.age.name > 60) {
      this.showColor = 'orange';
      this.ageType.name = 'Senior';
    }
    else if(this.age.name < 18) {
      this.showColor = 'red';
      this.ageType.name = 'Minor of 18';
    }
  }
}
