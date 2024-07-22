import { Routes } from '@angular/router';
import { FqaComponent } from './components/pages/fqa/fqa.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { OpenSourceComponent } from './components/open-source/open-source.component';

export const routes: Routes = [
  { path: '', component: DevelopersComponent },
  { path: 'open-source', component: OpenSourceComponent },
  { path: 'history', component: HistoryComponent},
  { path: 'fqa', component: FqaComponent },
  { path: 'about', component: AboutComponent },
  { path: "**", redirectTo: "", pathMatch: "full"}
];
