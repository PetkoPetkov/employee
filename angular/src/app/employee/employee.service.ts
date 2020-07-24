import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from './Employee';

const baseUrl = 'http://localhost:3000/employee/';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {}

  findAllEmployees() {
    return this.http.get<Employee[]>(baseUrl);
  }

  readById(id: number) {
    return this.http.get<Employee>(baseUrl + id);
  }

  create(employee: Employee) {
    return this.http.post<number>(baseUrl, employee);
    //   .subscribe(response => {
    // console.log('response log---', response);
    // });
  }

  update(employee: Employee) {
    return this.http.put<Employee>(baseUrl + employee.id, employee);
  }

  delete(id: number) {
    return this.http.delete<Employee[]>(baseUrl + id);
  }

}
