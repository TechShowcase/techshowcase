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

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github.svg'));
    this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter.svg'));
  }

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
