import { Component, OnInit } from '@angular/core';
// auth service
import { AuthafService } from '../../../providers/authaf.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  constructor(public afs: AuthafService) {}

  ngOnInit() {}
}
