import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ColorService {

	constructor(private http: HttpClient) {
	}

	//Post Data
	colorSelected(bgColor: any) {
		// console.warn("service called", bgColor);
		return this.http.post('http://localhost:3000/sender', {
			"color": bgColor
		})
	}

	//Get Data
	getSelectedColor(){
	  return this.http.get('http://localhost:3000/sender');
	}

}
