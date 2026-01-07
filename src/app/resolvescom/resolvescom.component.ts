import { Component, inject, OnInit } from '@angular/core';
import { UsersercicesService } from '../service/usersercices.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolvescom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resolvescom.component.html',
  styleUrl: './resolvescom.component.css'
})
export class ResolvescomComponent implements OnInit {
  employeeData:any;
  constructor(private users:UsersercicesService, private route :ActivatedRoute) { }
 //items = inject(ActivatedRoute).snapshot.data['items'] as any[];
  ngOnInit(): void {
  this.getEmployeeDataByResolve();
  }
  getEmployeeDataByResolve(){
  this.employeeData = this.route.snapshot.data['data'];
    console.log('route data', this.route.snapshot.data['data']);  
  }

}
