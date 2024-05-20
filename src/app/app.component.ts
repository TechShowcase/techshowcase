import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { ThemeService } from "./services/theme.service";

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
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "TechShwocase";
  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
