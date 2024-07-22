
import { ChangeDetectorRef, Component, inject, ViewChild } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { ThemeService } from "./services/theme.service";
import { DomSanitizer } from "@angular/platform-browser";

import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
    RouterLink,
		HeaderComponent,
		FooterComponent,
		MatMenuModule,
    MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {

  @ViewChild('snav') sidenav!: MatSidenav;

	title = "techshowcase";
	themeService = inject(ThemeService);

	navItems = [
		{ name: "Software Engineers / Developers", route: "/developers", icon: "developer_board"},
		{ name: "Open Source Involved", route: "/open-source", icon: "developer_board"},
		{ name: "Data Scientists / Analysts", route: "/developers", icon: "developer_board"},
		{ name: "Network / Systems Administrators", route: "/developers", icon: "developer_board"},
		{ name: "Cybersecurity Specialists", route: "/developers", icon: "developer_board"},
		{ name: "Mentors & Educators", route: "/developers", icon: "developer_board"},
		{ name: "Content Creators", route: "/developers", icon: "developer_board"},
		{ name: "Human-Computer Interaction Experts", route: "/developers", icon: "developer_board"},
		{ name: "Technical Writers", route: "/developers", icon: "developer_board"},
		{ name: "Throughout History", route: "/history", icon: "developer_board"},
	];

	constructor(
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer
	) {
		this.iconRegistry.addSvgIcon(
			"angular",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/angular.svg")
		);
		this.iconRegistry.addSvgIcon(
			"angular-old",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/angular-old.svg")
		);
		this.iconRegistry.addSvgIcon(
			"angular-material",
			this.sanitizer.bypassSecurityTrustResourceUrl(
				"/icons/angular-material.svg"
			)
		);
		this.iconRegistry.addSvgIcon(
			"primeng",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/primeng.svg")
		);
		this.iconRegistry.addSvgIcon(
			"spartan",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/spartan.svg")
		);
		this.iconRegistry.addSvgIcon(
			"github",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/github.svg")
		);
		this.iconRegistry.addSvgIcon(
			"linkedin",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/linkedin.svg")
		);
		this.iconRegistry.addSvgIcon(
			"twitter",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/twitter.svg")
		);
	}
}
