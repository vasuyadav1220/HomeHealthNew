import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent {
  constructor(
    private route :Router
  ){

  }
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }



  logouts() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('id')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
