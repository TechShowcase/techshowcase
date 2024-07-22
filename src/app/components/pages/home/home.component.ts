import { Component, inject, OnInit } from "@angular/core";
import { Profile } from "../../../models/profile";
import { HttpClient } from "@angular/common/http";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from "@angular/forms";


@Component({
	selector: "app-home",
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
    MatTooltipModule
	],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  profiles: Profile[] = [];
  filteredProfiles: Profile[] = [];
  fields: string[] = [];
  technologies: string[] = [];
  openSourceInvolvement: any[] = [];
  filterApplied: boolean = false;
  selectedField: string = '';
  selectedTech: string[] = [];
  selectedOpenSource: string = '';
  showHandsOnCoding: boolean = false;
  ossLeadDeveloper: boolean = false;
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Profile[]>("/data/profiles.json").subscribe((profiles) => {
      this.profiles = profiles;
      this.fields = Array.from(new Set(this.profiles.map((profile) => profile.field)));
      this.technologies = Array.from(new Set(this.profiles.flatMap((profile) => profile.technologies.map((tech) => tech.name  ))));
      this.openSourceInvolvement = Array.from(new Set(
        this.profiles.flatMap((profile) => profile.openSource?.map((os) => os.involvementType) || [])
      )).filter(involvement => involvement);
    });
  }

  applyFilter(): void {
    this.filterApplied = true;
    this.filteredProfiles = this.profiles.filter(profile => {
      return (
        (this.selectedField === '' || profile.field === this.selectedField) &&
        (this.selectedTech.length === 0 || profile.technologies.some(tech => this.selectedTech.includes(tech.name))) &&
        (this.selectedOpenSource === '' || profile.openSource?.some(os => os.involvementType === this.selectedOpenSource)) &&
        (!this.ossLeadDeveloper || profile.openSource?.some(os => os.leadDeveloper)) &&
        (!this.showHandsOnCoding || profile.handsOnCoding.some(hoc => hoc.status))
      );
    });
  }

  clearFilters(): void {
    this.filterApplied = false;
    this.selectedField = '';
    this.selectedTech = [];
    this.selectedOpenSource = '';
    this.ossLeadDeveloper = false;
    this.showHandsOnCoding = false;
  }
}
