import {
	AfterViewInit,
	Component,
	EventEmitter,
	inject,
	OnInit,
	Output,
} from "@angular/core";
import { NavigationEnd, Router, RouterLink } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from "@angular/material/icon";
import { ThemeService } from "../../../services/theme.service";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
		RouterLink,
		MatToolbarModule,
		MatButtonModule,
		MatSlideToggleModule,
		MatIconModule,
	],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, AfterViewInit {
	@Output() toggleSidenav = new EventEmitter<void>();

	title = "";
	showSidenavToggle = false;
	switchIcons: any;
	router = inject(Router);
	themeService = inject(ThemeService);

	ngOnInit() {
		// Subscribe to router events to detect route changes
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				let title = "";
				switch (this.router.url) {
					case "/":
						title = "Main Search";
						break;
					case "/developers":
						title = "Software Engineers & Developers";
						break;
					case "/open-source":
						title = "Open Source Involved";
						break;
					case "/history":
						title = "Throughout History";
						break;
					default:
						title = "TechShowcase"; // Set a default title if needed
				}
				this.title = title;
			}
		});
	}

	onToggleSidenav() {
		this.toggleSidenav.emit();
	}

	ngAfterViewInit() {
		this.switchIcons = document.querySelector(".mdc-switch__icons");
		this.switchIcons.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" class="mdc-switch__icon mdc-switch__icon--off"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" aria-hidden="true" fill="currentColor" class="mdc-switch__icon mdc-switch__icon--on"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
      `;
	}

	toggleTheme() {
		this.themeService.updateTheme();
	}
}
