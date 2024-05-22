import { NgModule } from '@angular/core';
import { RouterModule, Routes,  TitleStrategy, RouterStateSnapshot } from '@angular/router';
// https://www.telerik.com/blogs/angular-basics-router-link-overview
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { A01c2GuestAboutComponent } from './a01c2-guest-about/a01c2-guest-about.component'
import { A01c4GuestWebLinksComponent } from './a01c4-guest-web-links/a01c4-guest-web-links.component'
import { A02aUpdateYourPasswordComponent } from './a02a-update-your-password/a02a-update-your-password.component'

import { A01aGuestSignInComponent } from './a01a-guest-sign-in/a01a-guest-sign-in.component';
import { A01aGuestSignUpComponent } from './a01a-guest-sign-up/a01a-guest-sign-up.component';
import { A04aHamburgerNavComponent } from './a04a-hamburger-nav/a04a-hamburger-nav.component';
import { A05bGuestPublicLandingComponent } from './a05b-guest-public-landing/a05b-guest-public-landing.component';
import { B04aVendorAboutLandingDisplayComponent } from './b04a-vendor-about-landing-display/b04a-vendor-about-landing-display.component';
import { A01bGuestWelcomeComponent } from './a01b-guest-welcome/a01b-guest-welcome.component';
import { A01c3GuestSocialMediaComponent } from './a01c3-guest-social-media/a01c3-guest-social-media.component';
import { A01bGuestWelcomeBackComponent } from './a01b-guest-welcome-back/a01b-guest-welcome-back.component';
import { A04a2HamNavManageAccountComponent } from './a04a2-ham-nav-manage-account/a04a2-ham-nav-manage-account.component';
import { B04dVendorMediaKitDisplayComponent } from './b04d-vendor-media-kit-display/b04d-vendor-media-kit-display.component';
import { B04eVendorShopDisplayComponent } from './b04e-vendor-shop-display/b04e-vendor-shop-display.component';
import { D09aQuestBadgesComponent } from './d09a-quest-badges/d09a-quest-badges.component';
import { D09bQuestStatsComponent } from './d09b-quest-stats/d09b-quest-stats.component';
import { D09dQuestRewardsComponent } from './d09d-quest-rewards/d09d-quest-rewards.component';


const routes: Routes = [
  { path: 'guest', component: GuestProfileComponent },
  { path: 'guest-about', component: A01c2GuestAboutComponent },
  { path: 'guest-weblinks', component: A01c4GuestWebLinksComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'guest-sign-in', component: A01aGuestSignInComponent},
  { path: 'guest-sign-up', component: A01aGuestSignUpComponent},
  { path: 'guest-welcome', component: A01bGuestWelcomeComponent},
  { path: 'quest-badges', component: D09aQuestBadgesComponent},
  { path: 'quest-stats', component: D09bQuestStatsComponent},
  { path: 'quest-rewards', component: D09dQuestRewardsComponent},
  { path: 'update-password', component: A02aUpdateYourPasswordComponent},
  { path: 'hamburger-nav', component: A04aHamburgerNavComponent},
  { path: 'hamburger-nav-account', component: A04a2HamNavManageAccountComponent},
  { path: 'guest-landing', component: A05bGuestPublicLandingComponent},
  { path: 'guest-social', component: A01c3GuestSocialMediaComponent},
  { path: 'vendor-media-display', component: B04dVendorMediaKitDisplayComponent},
  { path: 'vendor-media-shop', component: B04eVendorShopDisplayComponent},
  { path: 'guest-welcome-back', component: A01bGuestWelcomeBackComponent},
  { path: 'vendor-landing', component: B04aVendorAboutLandingDisplayComponent},
  { path: '',  redirectTo: 'guest', pathMatch: 'full'},
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