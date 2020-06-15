import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public goToProjects() {
    this.viewportScroller.scrollToAnchor('projects');
  }

}
