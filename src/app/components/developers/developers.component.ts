import { Component, inject, OnInit } from "@angular/core";
import { Profile } from "../../models/profile";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormsModule } from "@angular/forms";
import { ProfileService } from "../../services/profile.service";

@Component({
	selector: "app-developers",
	standalone: true,
	imports: [
		FormsModule,
		MatCardModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		MatCheckboxModule,
		MatTooltipModule,
	],
	templateUrl: "./developers.component.html",
	styleUrl: "./developers.component.scss",
})
export class DevelopersComponent implements OnInit {
	profiles: Profile[] = [];
	filteredProfiles: Profile[] = [];
	technologies: string[] = [];
	filterApplied: boolean = false;
	selectedTech: string[] = [];
	showHandsOnCoding: boolean = false;
	profileService = inject(ProfileService);

	ngOnInit(): void {
		this.profileService.gedDeveloperProfiles().subscribe((profiles) => {
			this.profiles = profiles;
			this.technologies = [...new Set(profiles.flatMap(profile => profile.technologies.map(tech => tech.name)))];
		});
	}

  applyFilter(): void {
    this.filterApplied = true;
    this.filteredProfiles = this.profiles.filter(profile => {
      return this.selectedTech.length === 0 ||
        profile.technologies.some(tech => this.selectedTech.includes(tech.name));
    });
  }

	clearFilters(): void {
		this.filterApplied = false;
		this.selectedTech = [];
		this.showHandsOnCoding = false;
	}
}
