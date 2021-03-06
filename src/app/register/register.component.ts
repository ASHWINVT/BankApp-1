import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  aim = "REGISTRATION"

  registerForm = this.fb.group({
    uname:['' ,[Validators.required]],
    accno:['',[Validators.required]],
    pswd:['',[Validators.required]]
  })

  constructor(private dataService:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  register(){
    var uname = this.registerForm.value.uname
    var accno = this.registerForm.value.accno
    var pswd = this.registerForm.value.pswd
    console.log(this.registerForm.get('uname')?.errors)
    if(this.registerForm.valid){
      const result=this.dataService.register(accno,pswd,uname)
      if(result){
      alert("Registration successfull");
      this.router.navigateByUrl("")
    }
  else{
    alert("Account already exist!!!")
  }
  }
else{
  alert("Invalid Form")
    }
  }
}
