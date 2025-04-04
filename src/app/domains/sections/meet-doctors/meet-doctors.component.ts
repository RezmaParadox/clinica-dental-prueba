import { Component, inject, signal } from '@angular/core';
import { GetDoctorsService } from '../../shared/services/get-doctors.service';
import { Doctors } from '../../shared/models/doctors.model';


@Component({
  selector: 'app-meet-doctors',
  templateUrl: './meet-doctors.component.html',
  styleUrls: ['./meet-doctors.component.scss']
})
export class MeetDoctorsComponent {
  private getDoctorsService = inject(GetDoctorsService);
  doctors = signal<Doctors[] | null>(null)
  visibleDoctors = signal<Doctors[] | null>(null);
  currentIndex = signal<number>(0);
  doctorsPerPage = 4;

  ngOnInit(){
    this.setDoctorsPerPage();
    this.getDoctorsService.getDoctors().subscribe({
      next: (response) => {
        if (response.list) {
          this.doctors.set(response.list);
          this.updateVisibleDoctors();
        }
      },
      error: (error) => console.log('Error al obtener los doctores: ',error)
    });
    window.addEventListener('resize', this.setDoctorsPerPage.bind(this));
  }

  setDoctorsPerPage() {
    const width = window.innerWidth;
    this.doctorsPerPage = width <= 768 ? 1 : 4;
    this.currentIndex.set(0); 
    this.updateVisibleDoctors();
  }


  updateVisibleDoctors() {
    if (this.doctors()) {
      this.visibleDoctors.set(
        this.doctors()!.slice(this.currentIndex(), this.currentIndex() + this.doctorsPerPage)
      );
    }
  }

  nextDoctors() {
    if (this.doctors() && this.currentIndex() + this.doctorsPerPage < this.doctors()!.length) {
      this.currentIndex.set(this.currentIndex() + this.doctorsPerPage);
      this.updateVisibleDoctors();
    }
  }

  prevDoctors() {
    if (this.currentIndex() - this.doctorsPerPage >= 0) {
      this.currentIndex.set(this.currentIndex() - this.doctorsPerPage);
      this.updateVisibleDoctors();
    }
  }
  
}
