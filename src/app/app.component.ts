import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ThemeService } from "./services/theme.service";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
    RouterLink,
		MatCardModule,
		MatToolbarModule,
		MatSlideToggleModule,
		MatButtonModule,
    MatIconModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "TechShwocase";
  themeService = inject(ThemeService);

  cards = [
      { title: 'Women In Tech', subTitle: 'Women in Technology', imageSrc: "../assets/images/women-in-tech-logo.png", url: 'https://womenintech.dev' },
      { title: 'Built With Analog', subTitle: 'Projects Collection', imageSrc: "../assets/images/analog-logo.png", url: 'https://builtwithanalog.dev' },
      { title: 'Built With Angular', subTitle: 'Personal Resource', imageSrc: "../assets/images/angular-gradient.png", url: 'https://builtwithangular.dev' },
  ];

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github.svg'));
    this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter.svg'));
  }

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
