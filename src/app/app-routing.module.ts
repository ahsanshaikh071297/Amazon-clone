import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'search-result', component: SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
