import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from '../services/color.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	selectedColor: any = [];
	colorChosen:any;

	@Input() bgColor: any;

	@Output() colorChanged: EventEmitter<string> = new EventEmitter();

	constructor(private colorSelected: ColorService, public router: Router) { }

	ngOnInit() {
	}

	//For Header
	colorHeader(bgColor: string): void {
		this.bgColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

		this.colorSelected.colorSelected(this.bgColor).subscribe((result) => {
			// console.log(result);
		});

		this.viewSelectedColor();
	}

	viewSelectedColor() {
		this.colorSelected.getSelectedColor().subscribe((res) => {
			this.selectedColor = res;
			if (res) {
				let last: any = this.selectedColor[this.selectedColor.length - 1];
				this.colorChosen = last.color;
			}
			this.colorChanged.emit(this.colorChosen);

		});
	}

}
