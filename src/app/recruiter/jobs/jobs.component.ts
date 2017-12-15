import { Component, OnInit,TemplateRef } from '@angular/core';
import { JobService } from './job.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'eteki-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers:[JobService]
})
export class JobsComponent implements OnInit {
  jobs=[];
  modalRef: BsModalRef;
  constructor(private jobsService:JobService,private modalService: BsModalService) { }

  ngOnInit() {
    this.jobsService.jobs().subscribe(
      (res:Response)=>{
        console.log(res)
        this.jobs=res['jobs'];
      }
    );
  }

  edit(template: TemplateRef<any>){
      this.modalRef = this.modalService.show(template);
  }


}
