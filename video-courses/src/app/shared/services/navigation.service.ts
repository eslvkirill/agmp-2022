import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  redirectToLoginPage(): Promise<boolean> {
    return this.router.navigate(['login']);
  }

  redirectToCoursesPage(): void {
    this.router.navigate(['courses']);
  }
}
