import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found.component';
import { HomeComponent } from './core/home/home.component';


  const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},

    { path: '**', component: HomeComponent }
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
  public get SeedRoutes() : Routes {
    return appRoutes;
  }
}
