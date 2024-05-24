import { NgModule } from '@angular/core';
import { RouterModule, Routes,  TitleStrategy, RouterStateSnapshot } from '@angular/router';
// https://www.telerik.com/blogs/angular-basics-router-link-overview
import { GuestProfileComponent } from './built/guest-profile/guest-profile.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageErrorComponent } from './page-error/page-error.component';
// import { A01c2GuestAboutComponent } from './built/a01c2-guest-about/a01c2-guest-about.component'
// import { A01c4GuestWebLinksComponent } from './built/a01c4-guest-web-links/a01c4-guest-web-links.component'
// import { A02aUpdateYourPasswordComponent } from './built/a02a-update-your-password/a02a-update-your-password.component'
// import { A01aGuestSignInComponent } from './built/a01a-guest-sign-in/a01a-guest-sign-in.component';
// import { A01aGuestSignUpComponent } from './built/a01a-guest-sign-up/a01a-guest-sign-up.component';
// import { A04aHamburgerNavComponent } from './built/a04a-hamburger-nav/a04a-hamburger-nav.component';
// import { A05bGuestPublicLandingComponent } from './built/a05b-guest-public-landing/a05b-guest-public-landing.component';
// import { B04aVendorAboutLandingDisplayComponent } from './built/b04a-vendor-about-landing-display/b04a-vendor-about-landing-display.component';
import { FooterComponent } from './footer/footer.component';
import { B04aVendorAboutLandingDisplayComponent } from './built/b04a-vendor-about-landing-display/b04a-vendor-about-landing-display.component';
// import { A01bGuestWelcomeComponent } from './built/a01b-guest-welcome/a01b-guest-welcome.component';
// import { A01c3GuestSocialMediaComponent } from './built/a01c3-guest-social-media/a01c3-guest-social-media.component';
import { A01bGuestWelcomeBackComponent } from './built/a01b-guest-welcome-back/a01b-guest-welcome-back.component';

// import { GuestTakingQrComponent } from './guest-taking-qr/guest-taking-qr.component';

// import { A04a2HamNavManageAccountComponent } from './a04a2-ham-nav-manage-account/a04a2-ham-nav-manage-account.component';
// import { B04dVendorMediaKitDisplayComponent } from './b04d-vendor-media-kit-display/b04d-vendor-media-kit-display.component';
// import { B04eVendorShopDisplayComponent } from './b04e-vendor-shop-display/b04e-vendor-shop-display.component';
// import { D09aQuestBadgesComponent } from './d09a-quest-badges/d09a-quest-badges.component';
// import { D09bQuestStatsComponent } from './d09b-quest-stats/d09b-quest-stats.component';
// import { D09dQuestRewardsComponent } from './d09d-quest-rewards/d09d-quest-rewards.component';
import { A05bGuestTakingQrComponent } from './a05b-guest-taking-qr/a05b-guest-taking-qr.component';
// import { GuestConnectionIndicatorComponent } from './guest-connection-indicator/guest-connection-indicator.component';
import { A06aGuestConnecionsLandingComponent } from './a06a-guest-connecions-landing/a06a-guest-connecions-landing.component';
import { A06a1GuestConnecionsLandingSwipeLeftComponent } from './a06a1-guest-connecions-landing-swipe-left/a06a1-guest-connecions-landing-swipe-left.component';
import { A06a2GuestConnecionsLandingSwipeRightComponent } from './a06a2-guest-connecions-landing-swipe-right/a06a2-guest-connecions-landing-swipe-right.component';
import { A06a3GuestConnecionsLandingScrollComponent } from './a06a3-guest-connecions-landing-scroll/a06a3-guest-connecions-landing-scroll.component';
import { A06bGuestConnecionsLandingSearchComponent } from './a06b-guest-connecions-landing-search/a06b-guest-connecions-landing-search.component';
import { A06cGuestRequestsLandingComponent } from './a06c-guest-requests-landing/a06c-guest-requests-landing.component';
import { A06c1GuestRequestsLandingSwipeLeftComponent } from './a06c1-guest-requests-landing-swipe-left/a06c1-guest-requests-landing-swipe-left.component';
import { A06c1GuestRequestsLandingSwipeRightComponent } from './a06c1-guest-requests-landing-swipe-right/a06c1-guest-requests-landing-swipe-right.component';



const routes: Routes = [
  { path: 'guest', component: GuestProfileComponent },
  // { path: 'guest-about', component: A01c2GuestAboutComponent },
  // { path: 'guest-landing', component: A05bGuestPublicLandingComponent},
  // { path: 'guest-social', component: A01c3GuestSocialMediaComponent},
  // { path: 'guest-weblinks', component: A01c4GuestWebLinksComponent },
  // { path: 'guest-sign-in', component: A01aGuestSignInComponent},
  // { path: 'guest-sign-up', component: A01aGuestSignUpComponent},
  // { path: 'update-password', component: A02aUpdateYourPasswordComponent},
  // { path: 'vendor-landing', component: B04aVendorAboutLandingDisplayComponent},
  // { path: 'hamburger-nav', component: A04aHamburgerNavComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'page-error', component: PageErrorComponent },
  // { path: 'guest-welcome', component: A01bGuestWelcomeComponent},
  { path: 'guest-welcome-back', component: A01bGuestWelcomeBackComponent},
  // { path: 'update-password', component: A02aUpdateYourPasswordComponent},
  // { path: 'hamburger-nav', component: A04aHamburgerNavComponent},
  // { path: 'guest-landing', component: A05bGuestPublicLandingComponent},

  // { path: 'quest-badges', component: D09aQuestBadgesComponent},
  { path: 'quest-taking-qr', component: A05bGuestTakingQrComponent},
  // { path: 'quest-stats', component: D09bQuestStatsComponent},
  { path: 'quest-connections', component: A06aGuestConnecionsLandingComponent},
  { path: 'quest-landing-swipe-left', component: A06a1GuestConnecionsLandingSwipeLeftComponent},
  { path: 'quest-requests-landing-search', component: A06cGuestRequestsLandingComponent},
  { path: 'quest-landing-swipe-right', component: A06a2GuestConnecionsLandingSwipeRightComponent},
  { path: 'quest-landing-scroll', component: A06a3GuestConnecionsLandingScrollComponent},
  { path: 'quest-landing-search', component: A06bGuestConnecionsLandingSearchComponent},
  { path: 'quest-requests-landing-swipe-left', component: A06c1GuestRequestsLandingSwipeLeftComponent},
  { path: 'quest-requests-landing-swipe-right', component: A06c1GuestRequestsLandingSwipeLeftComponent},
  // { path: 'quest-connection-indicator', component: GuestConnectionIndicatorComponent},
  // { path: 'quest-rewards', component: D09dQuestRewardsComponent},
  // { path: 'hamburger-nav-account', component: A04a2HamNavManageAccountComponent},
  // { path: 'vendor-media-display', component: B04dVendorMediaKitDisplayComponent},
  // { path: 'vendor-media-shop', component: B04eVendorShopDisplayComponent},
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