import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environments';

interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormSubmissionState {
	isSubmitting: boolean;
	submitted: boolean;
	submitSuccess: boolean;
	errorMessage: string | null;
}

interface ContactInfo {
	type: string;
	label: string;
	value: string;
	icon: any;
}

@Component( {
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ ReactiveFormsModule ],
} )
export class ContactComponent implements OnInit {
	private _formBuilder = inject( FormBuilder );

	private _formState = signal<FormSubmissionState>( {
		isSubmitting: false,
		submitted: false,
		submitSuccess: false,
		errorMessage: null
	} );

	contactInfo = signal<ContactInfo[]>( [
		{
			type: 'email',
			label: 'Email',
			value: 'abdelrahman.m1097@gmail.com',
			icon: '✉️'
		},
		{
			type: 'phone',
			label: 'Phone',
			value: '+20-1017-343-667',
			icon: '📞'
		},
		{
			type: 'location',
			label: 'Location',
			value: 'Cairo, Egypt',
			icon: '🌍'
		}
	] );

	isSubmitting = computed( () => this._formState().isSubmitting );
	submitted = computed( () => this._formState().submitted );
	submitSuccess = computed( () => this._formState().submitSuccess );
	errorMessage = computed( () => this._formState().errorMessage );

	f = computed( () => this.form.controls );
	isFormValid = computed( () => this.form.valid );

	form!: FormGroup;

	ngOnInit(): void {
		this.initializeForm();
	}

	private initializeForm(): void {
		const now = new Date();
		const day = String( now.getDate() ).padStart( 2, '0' );
		const month = String( now.getMonth() + 1 ).padStart( 2, '0' );
		const year = now.getFullYear();
		const hours = String( now.getHours() ).padStart( 2, '0' );
		const minutes = String( now.getMinutes() ).padStart( 2, '0' );
		const formattedTime = `${ day }-${ month }-${ year } ${ hours }:${ minutes }`;

		this.form = this._formBuilder.group( {
			name: [ '', [ Validators.required, Validators.minLength( 2 ) ] ],
			email: [ '', [ Validators.required, Validators.email ] ],
			subject: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
			message: [ '', [ Validators.required, Validators.minLength( 10 ), Validators.maxLength( 500 ) ] ],
			time: formattedTime
		} );
	}

	async onSubmit(): Promise<void> {
		this.updateFormState( { submitted: true } );

		if ( !this.isFormValid() ) {
			return;
		}

		this.updateFormState( {
			isSubmitting: true,
			errorMessage: null
		} );
		try {

			const formData = this.form.value as ContactFormData;
			await this.sendEmail( formData );

			this.updateFormState( {
				isSubmitting: false,
				submitSuccess: true,
				submitted: false
			} );

			this.form.reset();

		} catch ( error ) {
			console.error( 'Error sending email:', error );

			// Error state
			this.updateFormState( {
				isSubmitting: false,
				errorMessage: 'Failed to send message. Please try again.'
			} );
		}
	}
	private async sendEmail( formData: any ): Promise<any> {
		return emailjs.send(
			environment.emailJs.serviceId,
			environment.emailJs.templateId,
			formData,
			environment.emailJs.publicKey,
		);
	}

	resetForm(): void {
		this.form.reset();
		this.updateFormState( {
			submitted: false,
			submitSuccess: false,
			errorMessage: null,
			isSubmitting: false
		} );
	}

	private updateFormState( partialState: Partial<FormSubmissionState> ): void {
		this._formState.update( currentState => ( {
			...currentState,
			...partialState
		} ) );
	}

	hasFieldError( fieldName: string ): boolean {
		return this.submitted() && !!this.f()[ fieldName ].errors;
	}

	getFieldError( fieldName: string ): string | null {
		const field = this.f()[ fieldName ];
		if ( !this.submitted() || !field.errors ) {
			return null;
		}

		if ( field.errors[ 'required' ] ) {
			return `${ this.getFieldDisplayName( fieldName ) } is required`;
		}
		if ( field.errors[ 'minlength' ] ) {
			const requiredLength = field.errors[ 'minlength' ].requiredLength;
			return `${ this.getFieldDisplayName( fieldName ) } must be at least ${ requiredLength } characters`;
		}
		if ( field.errors[ 'maxlength' ] ) {
			const maxLength = field.errors[ 'maxlength' ].requiredLength;
			return `${ this.getFieldDisplayName( fieldName ) } must be at most ${ maxLength } characters`;
		}
		if ( field.errors[ 'email' ] ) {
			return 'Please enter a valid email address';
		}

		return null;
	}

	private getFieldDisplayName( fieldName: string ): string {
		const displayNames: Record<string, string> = {
			name: 'Name',
			email: 'Email',
			subject: 'Subject',
			message: 'Message'
		};
		return displayNames[ fieldName ] || fieldName;
	}
}
