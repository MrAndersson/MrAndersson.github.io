import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

	httpOptions: { headers; observe; } = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json'
		}),
		observe: 'response'
	};

	calendarApiUrl: string
	riddleUrl: string;

	todayIs: string;
	riddle: string;
	namesDay: string;
	weekNr: string;

  	constructor(public http: HttpClient) {
		const today : Date = new Date();
		this.calendarApiUrl = `https://api.dryg.net/dagar/v2.1/${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`;
		this.riddleUrl      = 'https://www.riddles.com/riddle-of-the-day'
	}

	ngOnInit() {
		this.http.get(this.calendarApiUrl, {
			headers: this.httpOptions
		}).subscribe((res: any) => {
			var days = res.dagar[0];
			this.todayIs  = days.flaggdag || days.veckodag;
			this.namesDay = days.namnsdag.join(" & ");
			this.weekNr   = days.vecka;
		});
		
		this.http.get('https://www.riddles.com/riddle-of-the-day', {
			headers: this.httpOptions, 
			responseType:'text'
		}).subscribe((res: any) => {
			let resSTR = JSON.stringify(res);
			// let resJSON = JSON.parse(resSTR);

			const parser = new DOMParser();
			var doc = parser.parseFromString(resSTR, "text/html");
			this.riddle = doc.body.getElementsByTagName('blockquote')[0].innerText;
		});
	}
}
