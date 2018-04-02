import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagenotfound' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: true
    })
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static applicationRoutes: Routes = appRoutes;
}
