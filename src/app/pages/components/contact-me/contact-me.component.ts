import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Highlight } from 'ngx-highlightjs';
import { UnderscoreDashPipe } from "../../../shared/pipes/underscore-dash.pipe";
import { ExplorerItem } from '../../models/details.models';


@Component( {
	selector: 'app-contact-me',
	standalone: true,
	templateUrl: './contact-me.component.html',
	styleUrl: './contact-me.component.css',
	imports: [
		ReactiveFormsModule,
		UnderscoreDashPipe,
		Highlight,
		NgClass
	],
} )
export class ContactMeComponent implements OnInit {
	sections: ExplorerItem[] = [];
	isSectionOpened: boolean = false;
	contactForm!: FormGroup;
	contactCode = '';
	submitSuccess: boolean = false;

	name: string = "";
	email: string = "";
	subject: string = "";
	message: string = "";

	constructor() {
	}

	ngOnInit(): void {
		// hljs.registerLanguage( 'javascript', javascript );

		this.contactForm = new FormGroup( {
			name: new FormControl( '', Validators.required ),
			email: new FormControl( '', [ Validators.required, Validators.email ] ),
			subject: new FormControl( '', Validators.required ),
			message: new FormControl( '', Validators.required )
		} );

		this.contactForm.valueChanges.subscribe( value => {
			this.name = value.name;
			this.email = value.email;
			this.subject = value.subject;
			this.message = value.message;
			this.updateCode();
		} );

		this.updateCode();

		this.sections = [
			{
				id: 0,
				title: 'contact',
				folders: [
					{
						id: 0,
						title: 'abdelrahman.m1097@gmail.com',
						icon: 'ri-mail-fill',
						isSelected: false
					},
					{
						id: 0,
						title: '+20 0101 7343 667',
						icon: 'ri-phone-fill',
						isSelected: false
					}
				],
				isSelected: false
			},
			// {
			// 	id: 1,
			// 	title: 'find me also in',
			// 	folders: [
			// 		{
			// 			id: 0,
			// 			title: 'YouTube channel',
			// 			icon: 'ri-external-link-fill',
			// 			isSelected: false
			// 		}
			// 	],
			// 	isSelected: false
			// }
		]
	}

	updateCode() {
		this.contactCode = `const button = document.querySelector('#sendBtn');

const message = {
	name: "`+ this.name + `",
	email: "`+ this.email + `",
	subject: "`+ this.subject + `",
	message: "`+ this.message + `",
	date: "Thu 21 Apr"
};

button.addEventListener('click', () => {
	form.send(message);
});`;
	}

	onSubmit() {
		if ( this.contactForm.valid ) {
			console.log( this.contactForm.value );
			this.submitSuccess = true;
		}
	}

	resetForm() {
		this.contactForm.reset( {
			name: '',
			email: '',
			subject: '',
			message: ''
		} );

		this.name = '';
		this.email = '';
		this.subject = '';
		this.message = '';

		this.submitSuccess = false;
	}
}
