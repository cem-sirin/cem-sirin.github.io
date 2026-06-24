export interface EducationItem {
	degree: string;
	details?: string;
	startDate: string;
	endDate: string;
}

export interface Education {
	institution: string;
	items: EducationItem[];
}

export interface Experience {
	title: string;
	description: string;
	link?: {
		text: string;
		url: string;
	};
	startDate: string;
	endDate: string;
}

export interface Publication {
	title: string;
	authors: string;
	venue: string;
	date: string;
	link?: {
		text: string;
		url: string;
	};
}

export interface Project {
	name: string;
	description: string;
	link?: {
		text: string;
		url: string;
	};
	date: string;
}

export interface CVData {
	education: Education[];
	publications: Publication[];
	experience: Experience[];
	projects: Project[];
}
