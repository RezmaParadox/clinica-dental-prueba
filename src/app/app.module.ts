import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


import { MainLayoutComponent } from './domains/layouts/main-layout/main-layout.component';
import { HeaderComponent } from './domains/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroSectionComponent } from './domains/sections/hero-section/hero-section.component';
import { FooterComponent } from './domains/components/footer/footer.component';
import { HeaderSectionComponent } from './domains/components/header-section/header-section.component';
import { MeetDoctorsComponent } from './domains/sections/meet-doctors/meet-doctors.component';
import { StepsServicesComponent } from './domains/sections/steps-services/steps-services.component';
import { MakeAppoinmentComponent } from './domains/sections/make-appoinment/make-appoinment.component';
import { SubscriptionNewsComponent } from './domains/sections/subscription-news/subscription-news.component';
import { ServicesProvidedComponent } from './domains/sections/services-provided/services-provided.component';
import { SpecialFeaturesComponent } from './domains/sections/special-features/special-features.component';
import { SuggestionComponent } from './domains/sections/suggestion/suggestion.component';
import { HistoryComponent } from './domains/sections/history/history.component';
import { CommentsComponent } from './domains/sections/comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    HeaderSectionComponent,
    MeetDoctorsComponent,
    StepsServicesComponent,
    MakeAppoinmentComponent,
    SubscriptionNewsComponent,
    ServicesProvidedComponent,
    SpecialFeaturesComponent,
    SuggestionComponent,
    HistoryComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
