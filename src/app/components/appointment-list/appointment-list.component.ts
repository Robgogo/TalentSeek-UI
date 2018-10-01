import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Subject } from 'rxjs';
import { temp } from "../../tempoData";
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { AuthenticationService } from "../../Auth/authentication.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit,OnDestroy {
  dtOptions: DataTables.Settings = {};
  id:number;
  statusId:number;
  isClicked=false;
  error:boolean;
  appointment:any;
  appointmentList: any=[];
  tempData:{};
  myData:Array<temp>=[];

  dtTrigger: Subject<any> = new Subject();
  hospitalId=2;
  constructor(private router: Router,
    private authenticationService:AuthenticationService,
    private dataService:DataService,private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
      // pageLength: 2
    };

    this.dataService.getAppointmentList().subscribe(result=>{
      this.appointmentList=result;
      this.dtTrigger.next();
    });
    this.error=false;
    
  }

  openModal(info:any){
    // Get the modal
    var modal = document.getElementById('myModal');
    // When the user clicks the button, open the modal 
    modal.style.display = "block";
    this.appointment=info;
  }

  goBack(){
    // Get the modal 
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  editAppointmentInfo(appointment:any){
    this.id=appointment.id;
    this.dataSharingService.sendAppointmentInfo(appointment);
    this.router.navigateByUrl('appointment/updateAppointment/'+this.id);
  }

  cancelAppointment(){

    
    // this.myData.push('id',appointment.id,'statusId',appointment.statusId);
    this.tempData={id:this.appointment.id,customerId:this.appointment.statusId};
  
    
    // // this.dataSharingService.deleteAppointment(customer);
    // alert(JSON.stringify(this.tempData));
    this.dataService.cancelAppointment(this.tempData)
      .subscribe(res=>{
        // alert(JSON.stringify(res));
        if(!res.status){
          this.goBack();
          this.dataService.getAppointmentList().subscribe(result=>{
            this.appointmentList=result;
            
          });
          // window.location.reload();
          this.isClicked=true;
        }
        else{
          this.error=true;
          this.goBack();
        }
        // alert(JSON.stringify(res));


      });
     

  }



}
