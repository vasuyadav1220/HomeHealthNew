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

   superAdminLogin(data: any) {
    return this.post(superAdminEndPoints.superAdminLogin,data)
   }

   doctorsForSuperAdmin(){
    return this.get(superAdminEndPoints.getdoctors)
   }

   postDoctors(data:any){
    return this.post(superAdminEndPoints.doctorsAdd, data)
   }

   nursesForSuperAdmin(){
    return this.get(superAdminEndPoints.getnurses)
   }
   nursesForAdmin(){
    return this.get(superAdminEndPoints.getNursesForAdmin)
   }
   adnursesForSuperAdmin(data:any){
    return this.post(superAdminEndPoints.addnurses, data)
   }
   patientsForSuperAdmin(){
    return this.get(superAdminEndPoints.getpatients)
   }

   patientsForAdmin(){
    return this.get(superAdminEndPoints.getPatientsForAdmin)
   }

   patientById(id:any){
    return this.get(superAdminEndPoints.patientById + id )
   }

   updatePatientById(id: any, updatedData: any) {
    return this.http.put(`https://alora-plus.vercel.app/api/v1/patient/${id}`, updatedData);
  }

   deletepatient(id:any){
    return this.delete(superAdminEndPoints.patientById + id )
   }


   nurseById(id:any){
    return this.get(superAdminEndPoints.nursesById + id )
   }

   updateNurseById(id: any, updatedData: any) {
    return this.http.put(`https://alora-plus.vercel.app/api/v1/nurse/${id}`, updatedData);
  }

   deleteNurse(id:any){
    return this.delete(superAdminEndPoints.nursesById + id )
   }

   addpatientsForSuperAdmin(data :any){
    return this.post(superAdminEndPoints.addpatients, data)
   }

}
