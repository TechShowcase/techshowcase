import { Component, inject, OnInit } from "@angular/core";
import { Profile } from "../../models/profile";
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
import { ProfileService } from "../../services/profile.service";


@Component({
  selector: 'app-open-source',
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
  templateUrl: './open-source.component.html',
  styleUrl: './open-source.component.scss'
})
export class OpenSourceComponent implements OnInit {
  profiles: Profile[] = [];
  filteredProfiles: Profile[] = [];
  involvementType: any[] = [];
  contributionType: any[] = [];
  filterApplied: boolean = false;
  selectedInvolvementType: string = '';
  selectedContributionType: string = '';
  leadDeveloper: boolean = false;
  profileService = inject(ProfileService);

  ngOnInit(): void {
    this.profileService.getOpenSourceProfiles().subscribe((profiles) => {
      this.profiles = profiles;
      this.involvementType = [...new Set(profiles.flatMap(profile => profile.openSource?.map(os => os.involvementType)))];
      this.contributionType = [...new Set(profiles.flatMap(profile => profile.openSource?.map(os => os.contributionType)))];
    });
  }

  applyFilter(): void {
    this.filterApplied = true;
    this.filteredProfiles = this.profiles.filter(profile => {
      return (
        (this.selectedInvolvementType === '' || profile.openSource?.some(os => os.involvementType === this.selectedInvolvementType)) &&
        (this.selectedContributionType === '' || profile.openSource?.some(os => os.contributionType === this.selectedContributionType)) &&
        (!this.leadDeveloper || profile.openSource?.some(os => os.leadDeveloper))
      );
    });
  }

  clearFilters(): void {
    this.filterApplied = false;
    this.selectedInvolvementType = '';
    this.selectedContributionType = '';
    this.leadDeveloper = false;
  }
}
