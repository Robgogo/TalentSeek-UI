import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { DataSharingService } from "../../services/data-sharing.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ed-ex',
  templateUrl: './ed-ex.component.html',
  styleUrls: ['./ed-ex.component.css']
})
export class EdExComponent implements OnInit {
  edexForm: FormGroup;
  availabilityForm: FormGroup;
  availability:boolean;
  userData:any={};
  info:any={};
  id:any={};
  constructor(private dataSharing: DataSharingService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dataService:DataService,
    private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.id = this.dataSharingService.getInfo();
    this.edexForm = this.formBuilder.group({
      school: ['', Validators.required],
      qualification: ['', Validators.required],
      startYear: ['', Validators.required],
      endYear: ['', Validators.required],
      companyName: ['' ,Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      cgpa:[''],
      availability:['',Validators.required]

    });

    this.availabilityForm = this.formBuilder.group({
      nextDate: ['', Validators.required],
    });

  }

  showSuccess(message:string) {
    this.toastr.success(message);
  }
  showError(message:string) {
    this.toastr.error(message);
  }

  goBack(){
    this.router.navigateByUrl('dashboard');
  }

  closeModal(){
    // Get the modal 
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }


  openModal(){
    // Get the modal
    var modal = document.getElementById('myModal');
    // When the user clicks the button, open the modal 
    modal.style.display = "block";
  }

  get f(){
    return this.edexForm.controls;
  }
  get f1(){
    return this.availabilityForm.controls;
  }
  
  onSubmit() {
    if(this.edexForm.valid){
      if(this.f.availability.value == "no"){
        this.availability=false;
        this.openModal();
      }else{
        this.availability=true;
        this.submitInfo();
    }
  }
  }

  submitInfo(){

    this.userData.id=localStorage.getItem('id');
    this.userData.school=this.f.school.value;
    this.userData.qualification=this.f.qualification.value;
    this.userData.startYear=this.f.startYear.value;
    this.userData.endYear=this.f.endYear.value;
    this.userData.cgpa=this.f.cgpa.value;
    this.userData.companyName=this.f.companyName.value;
    this.userData.startDate=this.f.startDate.value;
    this.userData.endDate=this.f.endDate.value;
    this.userData.availability=this.availability;
    this.userData.nextDate=this.f1.nextDate.value;
    // this.showSuccess("Registration Successful !!!");
    alert(JSON.stringify(this.userData))
    this.closeModal();
    this.dataService.postEdExInfo(this.userData)
      .subscribe((result:any)=>{
        if(result.message == "Successful"){
          // alert(JSON.stringify(result))
          this.showSuccess("Information Successfully recorded !");
        // this.router.navigateByUrl('login');
        }
        else{
          this.showError("Information is not recorded !");
        }
          
      }); 
  }
}
