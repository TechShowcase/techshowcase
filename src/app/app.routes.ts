import { Routes } from '@angular/router';
import { FqaComponent } from './components/pages/fqa/fqa.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DevelopersComponent } from './components/fields/developers/developers.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { OpenSourceComponent } from './components/fields/open-source/open-source.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'open-source', component: OpenSourceComponent },
  { path: 'history', component: HistoryComponent},
  { path: 'fqa', component: FqaComponent },
  { path: 'about', component: AboutComponent },
  { path: "**", redirectTo: "", pathMatch: "full"}
];
