import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { SafeHtmlPipe } from 'src/app/shared/pipes/safe-html-pipe.pipe';
import { UnderscoreDashPipe } from 'src/app/shared/pipes/underscore-dash.pipe';
import { SideBarItem, ExplorerFolder, FolderFile, ExplorerItem } from "./../../models/details.models";
import { FoldersColor } from '../../models/folder.colors.enum';

@Component( {
	selector: 'app-about-me',
	standalone: true,
	imports: [
		CommonModule,
		UnderscoreDashPipe,
		SafeHtmlPipe
	],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.css'
} )
export class AboutMeComponent implements OnInit {

	sidebarItems: SideBarItem[] = [];
	sidebarIcons: string[] = [];
	selectedSidebarItem: SideBarItem | null = null;
	selectedFile: FolderFile | null = null;
	lineNumbers: number[] = [];
	formattedContent: string[] = [];

	isExploererOpen: boolean = true;

	constructor () { }

	ngOnInit(): void {
		this.sidebarIcons = [
			`<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="icon">
				<path
					d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12 15V17H18V15H12ZM8.41421 12L5.58579 14.8284L7 16.2426L11.2426 12L7 7.75736L5.58579 9.17157L8.41421 12Z"></path>
			</svg>`,
			`<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
				<g clip-path="url(#clip0_64_1620)">
					<path
						d="M5 20.6519H19V22.6519H5V20.6519ZM12 18.6519C9.87827 18.6519 7.84344 17.809 6.34315 16.3087C4.84285 14.8084 4 12.7736 4 10.6519C4 8.53012 4.84285 6.49529 6.34315 4.995C7.84344 3.49471 9.87827 2.65186 12 2.65186C14.1217 2.65186 16.1566 3.49471 17.6569 4.995C19.1571 6.49529 20 8.53012 20 10.6519C20 12.7736 19.1571 14.8084 17.6569 16.3087C16.1566 17.809 14.1217 18.6519 12 18.6519Z"
						fill="#607B96" />
				</g>
				<defs>
					<clipPath id="clip0_64_1620">
						<rect width="24" height="24" fill="white" transform="translate(0 0.651855)" />
					</clipPath>
				</defs>
			</svg>`,
			`<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="icon">
				<path
					d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM18 13H16V15H18V13ZM16 9H14V11H16V9Z"></path>
			</svg>`
		]

		this.sidebarItems = [
			{
				id: 0,
				title: 'Professional Info',
				icon: this.sidebarIcons[ 0 ],
				explorerItems: [
					{
						id: 0,
						title: 'experince',
						folders: [
							{
								id: 0,
								title: 'work',
								color: FoldersColor.green,
								files: [
									{
										id: 0,
										title: 'shefa orman hospital',
										content: `I worked as a full stack developer at Shefa Orman Hospital for 6 months, I was responsible for developing the hospital management system.`,
										isSelected: false
									},
									{
										id: 1,
										title: 'roboost',
										content: `Roboost is an AI-powered delivery management platform designed to automate and optimize last-mile delivery operations for businesses. It aims to streamline the entire delivery process—from order dispatch to real-time tracking—minimizing human intervention and enhancing efficiency. I worked as a full stack developer at Roboost for 1 year, I was responsible for developing the company website, and developing the company management system.`,
										isSelected: false
									},
									{
										id: 2,
										title: 'mophx',
										content: 'I worked as a full stack developer at Mophx for 6 months, I was responsible for developing the company website, and developing the company management system.',
										isSelected: false
									} ],
								isSelected: false
							}
						],
						isSelected: false
					},
					{
						id: 1,
						title: 'Courses',
						folders: [
							{
								id: 0,
								title: 'courses',
								color: FoldersColor.orange,
								files: [
									{
										id: 0,
										title: 'Full stack web development using .Net Track',
										content: 'I have completed the full stack web development using .Net Track at ITI, the track included the following topics: HTML, CSS, JavaScript, Bootstrap, JQuery, ASP.NET, MVC, Web API, Entity Framework, SQL Server, Angular, and TypeScript.',
										isSelected: false
									}
								],
								isSelected: false
							}
						],
						isSelected: false
					}
				],
				isSelected: false
			},
			{
				id: 1,
				title: 'Personal Info',
				icon: this.sidebarIcons[ 1 ],
				explorerItems: [
					{
						id: 0,
						title: 'Personal Info',
						folders: [
							{
								id: 0,
								title: 'bio',
								files: [],
								color: FoldersColor.orange,
								isSelected: false
							},
							{
								id: 1,
								title: 'interests',
								files: [],
								color: FoldersColor.green,
								isSelected: false
							},
							{
								id: 2,
								title: 'education',
								files: [],
								color: FoldersColor.indigo,
								isSelected: false
							}
						],
						isSelected: false
					},
					{
						id: 1,
						title: 'contacts',
						files: [
							{
								id: 0,
								title: 'mail',
								content: 'abdelrahman.m1097@gmail',
								isSelected: false
							},
							{
								id: 1,
								title: 'phone',
								content: '0100 000 0000',
								isSelected: false
							},
							{
								id: 2,
								title: 'address',
								content: 'Luxor, Egypt',
								isSelected: false
							},
							{
								id: 3,
								title: 'social media',
								content: 'https://www.linkedin.com/in/abdelrahman-mohamed-1097/',
								isSelected: false
							}
						],
						isSelected: false
					}
				],
				isSelected: false
			},
			{
				id: 2,
				title: 'Hobbies Info',
				icon: this.sidebarIcons[ 2 ],
				explorerItems: [],
				isSelected: false
			}
		]

		this.sidebarItems[ 0 ].isSelected = true;
		this.selectedSidebarItem = this.sidebarItems[ 0 ];
		this.selectedSidebarItem.explorerItems[ 0 ].isSelected = true;

		this.adjustLineLengthBasedOnWidth();
	}

	setSelectSideBarItem( item: SideBarItem ) {
		item.id !== this.selectedSidebarItem?.id ? this.isExploererOpen = true : this.isExploererOpen = !this.isExploererOpen;
		this.sidebarItems.forEach( x => x.id != item.id ? x.isSelected = false : item.isSelected = true );
		this.selectedSidebarItem = item;
	}

	setSelectedExplorerSection( section: ExplorerItem ) {
		section.isSelected = !section.isSelected
	}

	setSelectedFolder( folder: ExplorerFolder ) {
		folder.isSelected = !folder.isSelected;
	}

	setSelectedFile( file: FolderFile ) {
		this.lineNumbers.splice( 0 );
		this.selectedFile = file;
		this.adjustLineLengthBasedOnWidth();
	}

	adjustLineLengthBasedOnWidth() {
		const availableWidth = window.innerWidth;
		const lineLength = Math.floor( availableWidth / 24 );
		console.log( availableWidth, lineLength, Math.floor( availableWidth / 24 ) );
		this.formatContentToLines( this.selectedFile?.content || '', lineLength );
	}

	formatContentToLines( content: string, lineLength: number ) {
		if ( content.length === 0 ) return;

		const words = content.split( ' ' );
		let line = '';
		let linesArray: string[] = [];

		words.forEach( word => {
			( line.length + word.length ) <= lineLength ? line += ` ${ word }` : ( linesArray.push( `* ${ line.trim() }` ), line = word );
		} );

		if ( line.trim().length > 0 ) {
			linesArray.push( `* ${ line.trim() }` );
		}
		linesArray.unshift( `/**` );
		linesArray.push( `*/` );

		this.formattedContent = linesArray;
		this.lineNumbers = linesArray.map( ( _, index ) => index + 1 );
	}

	@HostListener( 'window:resize', [ '$event' ] )
	onResize( event: any ): void {
		this.adjustLineLengthBasedOnWidth();
	}
}
