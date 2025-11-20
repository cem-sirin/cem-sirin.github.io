export interface Education {
	institution: string;
	degree: string;
	details?: string;
	startDate: string;
	endDate: string;
}

export interface Experience {
	title: string;
	description: string;
	technologies?: string[];
	link?: {
		text: string;
		url: string;
	};
	startDate: string;
	endDate: string;
}

export interface Project {
	name: string;
	description: string;
	technologies: string[];
	link?: {
		text: string;
		url: string;
	};
	date: string;
}

export interface ToolsSection {
	tools: string[];
	skills: string[];
	languages: string;
}

export interface CVData {
	education: Education[];
	experience: Experience[];
	projects: Project[];
	toolsSection: ToolsSection;
}
