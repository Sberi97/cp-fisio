import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cp-fisioterapia';

  serviceList = [
    {
      title: 'Ultrasuoni Terapia',
      img: 'MG_4512-min.jpg',
    },
    {
      title: 'Terapia Manuale',
      img: 'MG_4521-min.jpg',
    },
    {
      title: 'Tecar Terapia',
      img: 'MG_4588-min.jpg',
    },
    {
      title: 'Laser Terapia',
      img: 'MG_4568-min.jpg',
    },
    {
      title: 'Kinesiterapia',
      img: 'MG_4535-min.jpg',
    },
    {
      title: 'Riabilitazione Geriatrica',
      img: 'MG_4475-min.jpg',
    },
    {
      title: 'Riabilitazione Cardio-Respiratoria',
      img: 'MG_4472-min.jpg',
    },
    {
      title: 'Massoterapia',
      img: 'MG_4531-min.jpg',
    },
    {
      title: 'Osteopatia',
      img: 'MG_4554-min.jpg',
    },
  ];

  images = [
    'assets/MG_4422-min.jpg',
    'assets/MG_4427-min.jpg',
    'assets/MG_4428-min.jpg',
    'assets/MG_4429-min.jpg',
  ];

  index = 0;

  @ViewChild('slider') slider!: ElementRef;

  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 300;
  }

  ngAfterViewInit() {
    setInterval(() => this.autoScroll(), 3000);
  }

  autoScroll() {
    const container = this.slider.nativeElement;
    this.index = (this.index + 1) % this.images.length;
    container.scrollTo({
      left: this.index * container.clientWidth,
      behavior: 'smooth',
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
