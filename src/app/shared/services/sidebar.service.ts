import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private isSidebarOpen = signal(false);
  constructor() {}
  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }
  get sideBarOpen(): boolean {
    console.log(this.isSidebarOpen());
    return this.isSidebarOpen();
  }
}
