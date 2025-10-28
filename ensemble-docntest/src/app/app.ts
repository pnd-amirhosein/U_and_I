// import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  protected readonly title = signal('testington');

  public showClose = false;

  constructor(private router: Router) {



    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e) => {
      if (e.urlAfterRedirects === '/' || e.url === '/') {
        this.showClose = false;
      } else {
        this.showClose = true;
      }
    });
  }

  public async fetch() {
    return await fetch(`assets/icons/solid/home.svg`);
  }

  public async openButtons() {
    await this.fetch()
    this.router.navigateByUrl("button")
  }
  public openInputs() {
    this.router.navigateByUrl("input")
  }
  public closeDoc() {
    this.router.navigateByUrl("")
  }
  public openIcons() {
    this.router.navigateByUrl("/icon")
  }
}
