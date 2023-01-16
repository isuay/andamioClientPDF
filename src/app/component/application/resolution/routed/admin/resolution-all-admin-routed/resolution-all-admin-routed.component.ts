import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Resolution, ResolutionResponse } from 'src/app/model/resolution-interface';
import { ResolutionService } from 'src/app/service/resolution.service';

@Component({
  selector: 'app-resolution-all-admin-routed',
  templateUrl: './resolution-all-admin-routed.component.html',
  styleUrls: ['./resolution-all-admin-routed.component.css']
})
export class ResolutionAllAdminRoutedComponent implements OnInit {

  allContent: any;

  constructor(
    private oResolutionService: ResolutionService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.oResolutionService.getAll()
      .subscribe({
        next: (data: ResolutionResponse) => {
          this.allContent = data;
          console.log(this.allContent);
        },
        error(err: HttpErrorResponse) {
          console.log(err);
        },
      })
  }

  getPageContent(): Resolution[] {
    return this.allContent;
  }

}
