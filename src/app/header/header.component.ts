import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorService } from '../services/color.service';
// import { Admin } from '../admin/admin.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	defaultColor = '#A0A0A0';

	@Input() event: Event;

	constructor(private color: ColorService) {}


	ngOnInit(): void {
	}
}
