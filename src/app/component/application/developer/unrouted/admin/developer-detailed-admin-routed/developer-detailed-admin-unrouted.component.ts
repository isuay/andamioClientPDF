import { Component, Input, OnInit } from '@angular/core';
import { IDeveloper } from 'src/app/model/developer-interface';
import { DeveloperService } from 'src/app/service/developer.service';

@Component({
    selector: 'app-developer-detailed-admin-unrouted',
    templateUrl: './developer-detailed-admin-unrouted.component.html',
    styleUrls: ['./developer-detailed-admin-unrouted.component.css']
})
export class DeveloperDetailedAdminUnroutedComponent implements OnInit {

    @Input() id: number;

    oDeveloper: IDeveloper = null;

    constructor(
        private oDeveloperService: DeveloperService,
    ) { }

    ngOnInit() {
        this.getOne();
    }

    getOne() {
        this.oDeveloperService.getOne(this.id).subscribe({
            next: (data: IDeveloper) => {
                console.log(this.id);
                this.oDeveloper = data;
                //console.log(data);
            }
        })
    }

    changeID(ev: any) {
        //console.log(ev);
        this.id = ev.target.value;
        //console.log(this.id);
        this.getOne();
    }

}
