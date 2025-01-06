import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userloginstate:boolean = false
  constructor(
    private _router:Router
  ) { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve , reject)=>{
    setTimeout(()=>{
    //to get token in LS in condn
    if(localStorage.getItem('tokenvalue')){
      this.userloginstate = true
    }else{
      this.userloginstate = false
      this._router.navigate(['/'])
    }

    resolve(this.userloginstate)


    },400)
    })
  }

  //signup


  //login
  onApplogin(usercredential:{email:string,password:string}){
    //API call for login
    if(usercredential.email === 'deepti@gmail.com' && usercredential.password === 'deepti@30'){
      this.userloginstate = true
      //if user login is successfully then it is redirect to dashboard

      //userinfo(after refresh log in credential also gone , hence we check the token)
      localStorage.setItem('tokenvalue' , "JWT token taken from LS");
      localStorage.setItem('userrole' , "Buyer")
      this._router.navigate(['home'])
    }else if(usercredential.email === 'jay@gmail.com' && usercredential.password === 'deepti@30'){
      this.userloginstate = true
      localStorage.setItem('tokenvalue' , "JWT token taken from LS");
      localStorage.setItem('userrole' , "Admin")
      this._router.navigate(['home'])
    }else if(usercredential.email === 'ritvi@gmail.com' && usercredential.password === 'deepti@30'){
      this.userloginstate = true
      localStorage.setItem('tokenvalue' , "JWT token taken from LS");
      localStorage.setItem('userrole' , "SuperAdmin")
      this._router.navigate(['home'])
    }
    else{
      alert('Invalid email or password!!!')
    }
  }


  //logout
  logoutfromApp(){
    //remove the taken value and userrole from LS
    localStorage.removeItem('tokenvalue')

    //navigate to auth comp
    this._router.navigate(['/'])
  }


  //resetpwd
}
