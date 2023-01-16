import { IDeveloper } from 'src/app/model/developer-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeveloperService } from 'src/app/service/developer.service';

@Component({
  selector: 'app-developer-delete-admin-routed',
  templateUrl: './developer-remove-admin-routed.component.html',
  styleUrls: ['./developer-remove-admin-routed.component.css']
})

export class DeveloperRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  oDeveloper: IDeveloper = null;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oDeveloperService: DeveloperService,
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oDeveloperService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Developer " + this.id + " removed";
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }

}
