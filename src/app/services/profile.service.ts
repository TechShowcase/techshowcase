import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);

  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('/data/profiles.json');
  }

  gedDeveloperProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('/data/profiles.json').pipe(
      map((profiles) => profiles.filter(profile => profile.field.includes('Developer')))
    );
  }

  getOpenSourceProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('/data/profiles.json').pipe(
      map((profiles) => profiles.filter(profile => profile.openSource && profile.openSource.length > 0))
    );
  }

}
