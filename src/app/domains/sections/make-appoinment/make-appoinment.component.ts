import { AfterViewInit, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetDoctorsService } from '../../shared/services/get-doctors.service';
import { CreateDateService } from '../../shared/services/create-date.service';
import { Doctors } from '../../shared/models/doctors.model';
import { Date } from '../../shared/models/date.model';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-make-appoinment',
  templateUrl: './make-appoinment.component.html',
  styleUrls: ['./make-appoinment.component.scss']
})
export class MakeAppoinmentComponent implements AfterViewInit {
  @ViewChild('successToast') successToastRef!: ElementRef;
  @ViewChild('alertToast') alertToastRef!: ElementRef;

  private getDoctorsService = inject(GetDoctorsService);
  private createDateService = inject(CreateDateService);
  doctors = signal<Doctors[] | null>(null);
  successToast!: Toast;
  alertToast!: Toast;

  

  appoinmentForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]],
    fecha: ['', [Validators.required]],
    doctor: ['', Validators.required],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
    policy: [false, Validators.requiredTrue]
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.getDoctorsService.getDoctors().subscribe({

      next: (response) => {
        if (response.list) {
          this.doctors.set(response.list);
        }
      },
      error: (error) => console.log('Error al obtener los doctores: ',error)
    });
  }


  ngAfterViewInit(): void {
    this.successToast = new Toast(this.successToastRef.nativeElement);
    this.alertToast = new Toast(this.alertToastRef.nativeElement);
  }



  doctorNames(){
    return this.doctors()?.map((doctor) => doctor.name) ?? [];
  }

  onSubmit() {
    if(this.appoinmentForm.valid){
      const { policy, ...formData } = this.appoinmentForm.value;
      this.createDateService.createDate(formData as Date).subscribe({
        next: (response) => {
          console.log('Cita creada con exito', response);
          this.appoinmentForm.reset();
          // Mostrar el toast
          this.successToast.show();
        },
        error: (error) => {
          console.log('Error al crear la cita', error);
          // Mostrar el toast de error
          this.alertToast.show();
        }
      })    
    }else{
      console.log('El formulario no pudo ser enviado')
      // Mostrar el toast de error
      this.alertToast.show();

    }
  }

}
