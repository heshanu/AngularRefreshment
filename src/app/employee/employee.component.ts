import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { EmployeeInterface } from '../shared/interfaces/employeeInterface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  errorMessage!: string;
  isLoading: boolean = true;
  employeeList: EmployeeInterface[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'email', 'position', 'department'];

  dataSource = new MatTableDataSource<EmployeeInterface>();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public getAllEmployees() {
    this.isLoading = true;
    this.employeeService.getEmployees()
      .subscribe((data: EmployeeInterface[]) => {
        this.employeeList = data;
        this.dataSource.data = this.employeeList;
        this.isLoading = false;
        console.log('Fetched data:', this.employeeList); // Debugging line
      }, error => {
        console.error('Error fetching employees:', error);
        this.errorMessage=error; // Debugging line
      });
      this.isLoading = false;
  }
}
