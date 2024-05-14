import { NgModule } from '@angular/core';
import { RouterModule, Routes,  TitleStrategy, RouterStateSnapshot } from '@angular/router';
// https://www.telerik.com/blogs/angular-basics-router-link-overview
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { A01aGuestSignInComponent } from './a01a-guest-sign-in/a01a-guest-sign-in.component';
import { A01aGuestSignUpComponent } from './a01a-guest-sign-up/a01a-guest-sign-up.component';


const routes: Routes = [
  { path: 'guest', component: GuestProfileComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'guest-sign-in', component: A01aGuestSignInComponent},
  { path: 'guest-sign-up', component: A01aGuestSignUpComponent},
  { path: '',  redirectTo: 'guest'},
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