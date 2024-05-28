import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent {
  defaultTheme = 'protoGrays';

  theme = {
    protoGrays: false,
    pathWRQ: false,
    nyAutoshow: false,
    dragonCon: false,
  };

  setTheme(selectedTheme: string) {
    if (selectedTheme === 'protoGrays') {
      this.theme.protoGrays = true;
      this.theme.pathWRQ = false;
      this.theme.nyAutoshow = false;
      this.theme.dragonCon = false;
    }
    if (selectedTheme === 'pathWRQ') {
      this.theme.protoGrays = false;
      this.theme.pathWRQ = true;
      this.theme.nyAutoshow = false;
      this.theme.dragonCon = false;
    }
    if (selectedTheme === 'nyAutoshow') {
      this.theme.protoGrays = false;
      this.theme.pathWRQ = false;
      this.theme.nyAutoshow = true;
      this.theme.dragonCon = false;
    }
    if (selectedTheme === 'dragonCon') {
      this.theme.protoGrays = false;
      this.theme.pathWRQ = false;
      this.theme.nyAutoshow = false;
      this.theme.dragonCon = true;
    }
  }
}



// https://codepen.io/ryanparag/pen/qBJOQWZ