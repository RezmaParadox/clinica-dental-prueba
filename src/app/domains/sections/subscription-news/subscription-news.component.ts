import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { SubscribeNewsService } from '../../shared/services/subscribe-news.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from '../../shared/models/subscribe.model';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-subscription-news',
  templateUrl: './subscription-news.component.html',
  styleUrls: ['./subscription-news.component.scss']
})
export class SubscriptionNewsComponent implements AfterViewInit {

  @ViewChild('successToast') successToastRef!: ElementRef;
  @ViewChild('alertToast') alertToastRef!: ElementRef;

  private subscribeNewsService = inject(SubscribeNewsService);

  subscriptionForm =  this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
  })

  successToast!: Toast;
  alertToast!: Toast;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
      if(this.subscriptionForm.valid){
        const formData = this.subscriptionForm.value;
        this.subscribeNewsService.subscribeNews(formData as Subscription ).subscribe({
          next: (response) => {
            console.log('Subscrito con exito', response);
            this.subscriptionForm.reset();
            this.successToast.show();
          },
          error: (error) => {
            console.log('Error al subscribirse', error);
            this.alertToast.show();
          }
        })    
      }else{
        console.log('El formulario no pudo ser enviado');
        this.alertToast.show();
      }
  }

  ngAfterViewInit(): void {
    this.successToast = new Toast(this.successToastRef.nativeElement);
    this.alertToast = new Toast(this.alertToastRef.nativeElement);
  }
}
