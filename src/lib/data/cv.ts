import type { CVData } from '$lib/types/cv';

export const cvData: CVData = {
	education: [
		{
			institution: 'Sapienza University of Rome',
			items: [
				{
					degree: 'PhD in Data Science',
					details: 'advised by Stefano Leonardi.',
					startDate: '2025',
					endDate: 'now.'
				},
				{
					degree: 'MSc in Data Science',
					startDate: '2022',
					endDate: '2024'
				}
			]
		},
		{
			institution: 'Erasmus University Rotterdam',
			items: [
				{
					degree: 'Double BSc in Econometrics & Economics',
					startDate: '2018',
					endDate: '2022'
				}
			]
		},
		{
			institution: 'Robert College of Istanbul',
			items: [
				{
					degree: 'High School Diploma',
					details: '',
					startDate: '2013',
					endDate: '2018'
				}
			]
		}
	],

	publications: [
		{
			title: 'Multicalibration Yields Better Matchings',
			authors:
				'Riccardo Colini Baldeschi, Simone Di Gregorio, Simone Fioravanti, Federico Fusco, Ido Guy, Daniel Haimovich, Stefano Leonardi, Fridolin Linder, Lorenzo Perini, Matteo Russo, Cem Sirin, Niek Tax',
			venue: 'International Conference on Machine Learning (ICML)',
			date: '2026',
			link: {
				text: 'ICML poster page',
				url: 'https://icml.cc/virtual/2026/poster/65182'
			}
		}
	],

	experience: [
		{
			title: 'Research Assistant',
			description:
				'Worked with Prof. Stefano Leonardi on game-theoretic models for online ad auctions.',
			link: {
				text: 'Project demo',
				url: 'https://regret-minimizing-agents.streamlit.app/'
			},
			startDate: 'Oct. 2024',
			endDate: 'Jan. 2025'
		},
		{
			title: 'Teaching Assistant @ Erasmus University Rotterdam',
			description: 'TA for the courses Combinatorial Optimization and Stochastic Simulation.',
			startDate: 'Sep. 2021',
			endDate: 'Aug. 2022'
		}
	],

	projects: [
		{
			name: '123offerte.it',
			description:
				'Built a website and extraction pipeline for turning unstructured telecom subscription information into structured plan data.',
			link: {
				text: 'Visit Website',
				url: 'https://123offerte.it/'
			},
			date: 'Jul. 2025'
		},
		{
			name: 'MLX-OCR Library',
			description: "Small Python library for OCR experiments with Apple's MLX framework.",
			link: {
				text: 'View on GitHub',
				url: 'https://github.com/cem-sirin/mlx_ocr'
			},
			date: 'Feb. 2025'
		},
		{
			name: "Master's Thesis in Neural Network Merging",
			description:
				'Studied linear model merging methods for neural networks and their behavior across evaluation settings.',
			link: {
				text: 'View in PDF',
				url: '/thesis.pdf'
			},
			date: 'Sep. 2024'
		},
		{
			name: 'Multiplex Network Analysis Toolkit',
			description:
				'Python toolkit for multiplex graph analysis, including measures for multi-layer network structure.',
			link: {
				text: 'View on PyPI',
				url: 'https://pypi.org/project/mplexaa/'
			},
			date: 'May. 2024'
		}
	]
};
