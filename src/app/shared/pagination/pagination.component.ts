import { Component, Input, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  standalone: true,
  imports: [MatPaginatorModule],
})
export class PaginationComponent implements OnInit {

  @Input() Length!:number;
  @Input() PageSize!:number;  
  
  ngOnInit(): void {
    this.Length;
    this.PageSize;
  }

  

}
