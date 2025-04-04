import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  private collapseInstance: bootstrap.Collapse | null = null; 
  isNavbarOpen = false;

  ngAfterViewInit(): void {
    this.collapseInstance = new bootstrap.Collapse(this.navbarCollapse.nativeElement, {
      toggle: false
    });

    this.navbarCollapse.nativeElement.addEventListener('shown.bs.collapse', () => {
      this.isNavbarOpen = true;
    });

    this.navbarCollapse.nativeElement.addEventListener('hidden.bs.collapse', () => {
      this.isNavbarOpen = false;
    });
  }

  toggleNavbar() {
    this.collapseInstance?.toggle(); 
  }

  closeNavbar() {
    this.collapseInstance?.hide();
  }
}
