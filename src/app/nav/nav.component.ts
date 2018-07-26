import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navLinks: any[];
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

      this.matIconRegistry.addSvgIcon(
        'pint',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/pint.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'whiskey',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/whiskey.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'cider',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/cider.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'nachos',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/nachos.svg")
      );

      this.navLinks = [
        { 'path': '/beers', 'icon': 'pint', 'label': 'Beers' },
        { 'path': '/ciders', 'icon': 'cider', 'label': 'Ciders' },
        { 'path': '/whiskey', 'icon': 'whiskey', 'label': 'Whiskey' }
      ]
   }

  ngOnInit() {
  }

}
