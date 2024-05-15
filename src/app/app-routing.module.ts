import { NgModule } from '@angular/core';
import { RouterModule, Routes,  TitleStrategy, RouterStateSnapshot } from '@angular/router';
// https://www.telerik.com/blogs/angular-basics-router-link-overview
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { A01c2GuestAboutComponent } from './a01c2-guest-about/a01c2-guest-about.component'
import { A01c4GuestWebLinksComponent } from './a01c4-guest-web-links/a01c4-guest-web-links.component'

const routes: Routes = [
  { path: 'guest', component: GuestProfileComponent },
  { path: 'guest-about', component: A01c2GuestAboutComponent },
  { path: 'guest-weblinks', component: A01c4GuestWebLinksComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '',  redirectTo: 'guest', pathMatch: "full" },
  { path: "**", redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// https://medium.com/@jaydeepvpatil225/routing-in-angular-924066bde43
// https://www.geeksforgeeks.org/routing-in-angular-9-10/
// https://www.codingame.com/playgrounds/8104/angular-router-tutorial

// https://blog.angular-university.io/angular2-router/