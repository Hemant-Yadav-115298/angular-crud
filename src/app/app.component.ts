import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';

  empployeeForm: FormGroup = new FormGroup({});

  employeeObj: EmployeeModel = new EmployeeModel();

  employeeList: EmployeeModel[] = [];

  constructor() {
    this.createForm()
    const oldData = localStorage.getItem('EmpData')
    if (oldData != null) {
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;

    }
  }

  createForm() {
    this.empployeeForm = new FormGroup({
      empId: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name),
      email: new FormControl(this.employeeObj.email),
      contact: new FormControl(this.employeeObj.contact),
      city: new FormControl(this.employeeObj.city)
    })
  }

  onSave() {
    const oldData = localStorage.getItem("EmpData")
    if (oldData != null) {
      const parseData = JSON.parse(oldData);
      this.empployeeForm.controls['empId'].setValue(parseData.length + 1)
      this.employeeList.unshift(this.empployeeForm.value)
    }
    else {
      this.employeeList.unshift(this.empployeeForm.value)
    }
    localStorage.setItem('EmpData', JSON.stringify(this.employeeList))
  }

}
