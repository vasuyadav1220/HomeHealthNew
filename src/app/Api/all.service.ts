import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/httpServices';
import { superAdminEndPoints } from '../Urls/ApiUrl';


@Injectable({
  providedIn: 'root'
})
export class AllService extends HttpService {

  constructor(public override http:HttpClient) {
    super(http)
   }

   // Super Admin API's

   superAdminLogin(data: any) {
    return this.post(superAdminEndPoints.superAdminLogin,data)
   }

   doctorsForSuperAdmin(){
    return this.get(superAdminEndPoints.doctorsCrud)
   }

   postDoctors(data:any){
    return this.post(superAdminEndPoints.doctorsAdd, data)
   }

   nursesForSuperAdmin(){
    return this.get(superAdminEndPoints.nursesCrud)
   }
   patientsForSuperAdmin(){
    return this.get(superAdminEndPoints.patientsCrud)
   }

}
