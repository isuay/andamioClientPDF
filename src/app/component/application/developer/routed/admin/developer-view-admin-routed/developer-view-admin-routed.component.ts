import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-developer-view-admin-routed',
  templateUrl: './developer-view-admin-routed.component.html',
  styleUrls: ['./developer-view-admin-routed.component.css']
})
export class DeveloperViewAdminRoutedComponent implements OnInit {

  id: number;

  constructor(
    private oActivatedRoute: ActivatedRoute,
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
