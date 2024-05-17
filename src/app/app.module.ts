import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { A01aGuestSignInComponent } from './a01a-guest-sign-in/a01a-guest-sign-in.component';
import { A01aGuestSignUpComponent } from './a01a-guest-sign-up/a01a-guest-sign-up.component';
import { A01bGuestWelcomeComponent } from './a01b-guest-welcome/a01b-guest-welcome.component';
import { A01bGuestWelcomeBackComponent } from './a01b-guest-welcome-back/a01b-guest-welcome-back.component';
import { A01c2GuestAboutComponent } from './a01c2-guest-about/a01c2-guest-about.component';
import { A01c3GuestSocialMediaComponent } from './a01c3-guest-social-media/a01c3-guest-social-media.component';
import { A01c4GuestWebLinksComponent } from './a01c4-guest-web-links/a01c4-guest-web-links.component';
import { A01d1GuestHomeComponent } from './a01d1-guest-home/a01d1-guest-home.component';
import { A01d2GuestDisplayComponent } from './a01d2-guest-display/a01d2-guest-display.component';
import { B04aVendorBioAboutComponent } from './b04a-vendor-bio-about/b04a-vendor-bio-about.component';
import { B04bVendorBioLandingDisplayComponent } from './b04b-vendor-bio-landing-display/b04b-vendor-bio-landing-display.component';
import { B04cVendorMediaBuildComponent } from './b04c-vendor-media-build/b04c-vendor-media-build.component';
import { B04dVendorMediaDisplayComponent } from './b04d-vendor-media-display/b04d-vendor-media-display.component';
import { B04eVendorShopDisplayComponent } from './b04e-vendor-shop-display/b04e-vendor-shop-display.component';
import { B04fVendorStoreConnectComponent } from './b04f-vendor-store-connect/b04f-vendor-store-connect.component';
import { B04gVendorStoreConnectCodesComponent } from './b04g-vendor-store-connect-codes/b04g-vendor-store-connect-codes.component';
import { D09aQuestBadgesComponent } from './d09a-quest-badges/d09a-quest-badges.component';
import { D09bQuestStatsComponent } from './d09b-quest-stats/d09b-quest-stats.component';
import { D09cQuestQrComponent } from './d09c-quest-qr/d09c-quest-qr.component';
import { D09dQuestRewardsComponent } from './d09d-quest-rewards/d09d-quest-rewards.component';
import { D09eQuestsRedeemedComponent } from './d09e-quests-redeemed/d09e-quests-redeemed.component';
import { E08aEventHomeComponent } from './e08a-event-home/e08a-event-home.component';
import { E08bEventScheduleComponent } from './e08b-event-schedule/e08b-event-schedule.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { A02aUpdateYourPasswordComponent } from './a02a-update-your-password/a02a-update-your-password.component';
import { A04aHamburgerNavComponent } from './a04a-hamburger-nav/a04a-hamburger-nav.component';
import { A05bGuestPublicLandingComponent } from './a05b-guest-public-landing/a05b-guest-public-landing.component';
import { B04aVendorAboutLandingDisplayComponent } from './b04a-vendor-about-landing-display/b04a-vendor-about-landing-display.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    A01aGuestSignInComponent,
    A01aGuestSignUpComponent,
    A01bGuestWelcomeComponent,
    A01bGuestWelcomeBackComponent,
    A01c2GuestAboutComponent,
    A01c3GuestSocialMediaComponent,
    A01c4GuestWebLinksComponent,
    A01d1GuestHomeComponent,
    A01d2GuestDisplayComponent,
    B04aVendorBioAboutComponent,
    B04bVendorBioLandingDisplayComponent,
    B04cVendorMediaBuildComponent,
    B04dVendorMediaDisplayComponent,
    B04eVendorShopDisplayComponent,
    B04fVendorStoreConnectComponent,
    B04gVendorStoreConnectCodesComponent,
    D09aQuestBadgesComponent,
    D09bQuestStatsComponent,
    D09cQuestQrComponent,
    D09dQuestRewardsComponent,
    D09eQuestsRedeemedComponent,
    E08aEventHomeComponent,
    E08bEventScheduleComponent,
    SitemapComponent,
    GuestProfileComponent,
    PageNotFoundComponent,
    PageErrorComponent,
    A02aUpdateYourPasswordComponent,
    A04aHamburgerNavComponent,
    A05bGuestPublicLandingComponent,
    B04aVendorAboutLandingDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
