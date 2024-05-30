import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent implements OnInit {
	theme: string = localStorage.getItem('theme') || 'protoGrays';

  ngOnInit() {
    let switcher = document.getElementById(
      'themeoptions'
    )! as HTMLSelectElement;
    switcher?.addEventListener('change', (e: Event) => {
      let selectedThemeIndex: number = switcher.options.selectedIndex;
			localStorage.setItem('theme', switcher.options[selectedThemeIndex].getAttribute('value') || 'protoGrays');
      this.theme = localStorage.getItem('theme')!;
    });
	}
}



// https://codepen.io/ryanparag/pen/qBJOQWZ