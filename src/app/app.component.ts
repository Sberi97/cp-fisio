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
  title = 'cp-fisio';
  serviceList = [
    {
      title: 'Ultrasuoni Terapia',
      img: '_MG_4512-min.jpg',
    },
    {
      title: 'Terapia Manuale',
      img: '_MG_4521-min.jpg',
    },
    {
      title: 'Tecar Terapia',
      img: '_MG_4588-min.jpg',
    },
    {
      title: 'Laser Terapia',
      img: '_MG_4568-min.jpg',
    },
    {
      title: 'Kinesiterapia',
      img: '_MG_4535-min.jpg',
    },
    {
      title: 'Riabilitazione Geriatrica',
      img: '_MG_4475-min.jpg',
    },
    {
      title: 'Riabilitazione Cardio-Respiratoria',
      img: '_MG_4472-min.jpg',
    },
    {
      title: 'Massoterapia',
      img: '_MG_4531-min.jpg',
    },
    {
      title: 'Osteopatia',
      img: '_MG_4554-min.jpg',
    },
  ];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  private scrollInterval: any;

  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 300;
  }

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }

  startAutoScroll() {
    this.scrollInterval = setInterval(() => {
      this.scrollToNext();
    }, 3000);
  }

  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    if (container) {
      container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  }

  scrollRight() {
    this.scrollToNext();
  }

  // scrollToNext() {
  //   const container = this.scrollContainer.nativeElement;
  //   const totalWidth = container.scrollWidth;
  //   const containerWidth = container.clientWidth;
  //   const currentScrollPosition = container.scrollLeft;

  //   if (currentScrollPosition + containerWidth >= totalWidth) {
  //     container.scrollTo({ left: 0, behavior: 'smooth' }); // Torna alla prima immagine
  //   } else {
  //     container.scrollBy({ left: containerWidth, behavior: 'smooth' }); // Altrimenti scrolla alla prossima immagine
  //   }
  // }

  scrollToNext() {
    const container = this.scrollContainer.nativeElement;
    const containerWidth = container.clientWidth;

    // Se siamo alla fine, torniamo all'inizio
    if (container.scrollLeft + containerWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: containerWidth, behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault(); // Impedisce l'azione predefinita del link (il salto all'ancora)

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll fluido
    }
  }
}
