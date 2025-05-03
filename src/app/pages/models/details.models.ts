import { FoldersColor } from 'src/app/pages/models/folder.colors.enum';

export interface SideBarItem {
	id: number,
	title: string,
	icon: string,
	details?: string,
	explorerItems: ExplorerItem[],
	isSelected: boolean
}

export interface ExplorerItem {
	id: number,
	title: string,
	folders?: ExplorerFolder[],
	files?: FolderFile[],
	icon?: string;
	isSelected: boolean
}

export interface ExplorerFolder {
	id: number,
	title: string,
	files?: FolderFile[],
	icon?: string;
	color?: FoldersColor,
	isSelected: boolean
}

export interface FolderFile {
	id: number,
	title: string,
	content: string,
	isSelected: boolean
	icon?: string;
}
