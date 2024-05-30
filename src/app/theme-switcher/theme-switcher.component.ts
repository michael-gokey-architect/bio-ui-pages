import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
	
export class ThemeSwitcherComponent implements OnInit {
	theme: string = 'protoGrays'
	
	ngOnInit() {
		let switcher = document.getElementById("themeoptions")! as HTMLSelectElement;
		switcher?.addEventListener('change', (e: Event) => {
			let selectedThemeIndex: number = switcher.options.selectedIndex
			this.theme = switcher.options[selectedThemeIndex].getAttribute('value') || 'protoGrays';
		})
	}
}



// https://codepen.io/ryanparag/pen/qBJOQWZ