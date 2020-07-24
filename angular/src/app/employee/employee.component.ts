import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  employee: Employee = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    address: ''
  };

  employees: Employee[] = [];

  ngOnInit() {
    this.employees.push(this.employee);

    this.findAllEmployees();

  }

  findAllEmployees() {
    this.employeeService.findAllEmployees()
      .subscribe(response => {
        this.employees = response;
        console.log('response log---', response);
      });
  }

  readById(id: number) {
    this.employeeService.readById(id)
      .subscribe(
      result => {
        this.employee = result;
        console.log('employee', this.employee);
      });
  }

  create(employee: Employee) {
    this.employeeService.create(employee)
      .subscribe(response => {
        employee.id = response;
        this.employees.push(employee);
        console.log('response log---', response);
      });
    this.clearData();
  }

  update(employee: Employee) {
    this.employeeService.update(employee)
      .subscribe(response => {
        employee = response;
        console.log('update log---', response);
      });
    this.updateElement(employee);
    this.clearData();
  }

  delete(id) {
    this.employeeService.delete(id)
      .subscribe(response => {
        this.employees = response;
        console.log('response log---', response);
      });
  }

  clearData() {
    this.employee = {
      id: 0,
      name: '',
      age: 0,
      email: '',
      address: ''
    };
  }

  updateElement(employee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === employee.id) {
        this.employees[i] = employee;
      }
    }
  }

  sortByAge() {
    this.employees.sort((a, b) => a.age - (b.age));
  }

}
