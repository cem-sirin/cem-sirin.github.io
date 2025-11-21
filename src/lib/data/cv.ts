import type { CVData } from '$lib/types/cv';

export const toolMap: Record<string, string> = {
	python: 'Python',
	pytorch: 'PyTorch',
	tensorflow: 'TensorFlow',
	mlx: 'MLX',
	transformers: 'Transformers',
	pandas: 'Pandas',
	numpy: 'NumPy',
	opencv: 'OpenCV',
	statsmodels: 'statsmodels',
	networkx: 'NetworkX',
	streamlit: 'Streamlit',
	java: 'Java',
	r: 'R',
	matlab: 'MATLAB',
	qgis: 'QGIS',
	nuxtjs: 'Nuxt.js',
	cloudflare: 'Cloudflare'
};

export const cvData: CVData = {
	education: [
		{
			institution: 'University of Rome Sapienza',
			degree: 'MSc in Data Science',
			details: 'GPA: 110/110. Honor Student.',
			startDate: '2022',
			endDate: '2024'
		},
		{
			institution: 'Erasmus University Rotterdam',
			degree: 'Double BSc in Econometrics & Economics',
			details: 'GPA: 7.7/10.',
			startDate: '2018',
			endDate: '2022'
		},
		{
			institution: 'Robert College of Istanbul',
			degree: 'High School Diploma',
			details: '',
			startDate: '2013',
			endDate: '2018'
		}
	],

	experience: [
		{
			title: 'PhD in Data Science',
			description: 'Doctoral research in Data Science at University of Rome Sapienza.',
			startDate: 'Nov. 2025',
			endDate: 'Present'
		},
		{
			title: 'Data Science Researcher',
			description: 'Game Theory models for online ad auctions under Prof. Stefano Leonardi.',
			technologies: ['python', 'streamlit', 'numpy'],
			link: {
				text: 'View Project',
				url: 'https://regret-minimizing-agents.streamlit.app/'
			},
			startDate: 'Oct. 2024',
			endDate: 'Jan. 2025'
		},
		{
			title: 'Teaching Assistant @ Erasmus University Rotterdam',
			description: 'TA for the courses Combinatorial Optimization and Stochastic Simulation.',
			technologies: ['java', 'matlab'],
			startDate: 'Sep. 2021',
			endDate: 'Aug. 2022'
		}
	],

	projects: [
		{
			name: '123offerte.it',
			description:
				'Website built with a custom AI research algorithm that extracts structured subscription plans from unstructured data.',
			technologies: ['python', 'nuxtjs', 'cloudflare'],
			link: {
				text: 'Visit Website',
				url: 'https://123offerte.it/'
			},
			date: 'Jul. 2025'
		},
		{
			name: 'MLX-OCR Library',
			description:
				"Deep learning Python library that uses Apple's MLX for image to text conversion.",
			technologies: ['python', 'mlx', 'opencv'],
			link: {
				text: 'View on GitHub',
				url: 'https://github.com/cem-sirin/mlx_ocr'
			},
			date: 'Feb. 2025'
		},
		{
			name: "Master's Thesis in Neural Network Merging",
			description: 'Enhanced linear merging methods with improved the SoTA accuracy up to 7%.',
			technologies: ['python', 'pytorch', 'transformers'],
			link: {
				text: 'View in PDF',
				url: '/docs/master-thesis.pdf'
			},
			date: 'Sep. 2024'
		},
		{
			name: 'Multiplex Network Analysis Toolkit',
			description:
				'Python library for multiplex graph network analysis including new measures for multiplex networks.',
			technologies: ['python', 'numpy', 'networkx'],
			link: {
				text: 'View on PyPI',
				url: 'https://pypi.org/project/mplexaa/'
			},
			date: 'May. 2024'
		},
		{
			name: 'Neural Image Geolocation',
			description:
				'Multimodal transformer for predicting coordinates of street level images with novel contrastive learning and PEFT.',
			technologies: ['python', 'tensorflow', 'transformers'],
			date: 'Feb. 2024'
		},
		{
			name: 'Bayesian Vector Error Correction Model',
			description:
				'Bayesian Vector Error Correction Model (VECM) estimator using Gibbs Sampling to predict stock market returns.',
			technologies: ['r'],
			date: 'Jul. 2023'
		},
		{
			name: "Bachelor's Thesis on Hierarchical Cluster Analysis",
			description:
				'Novel class of model multi-layered Gaussian Mixture Models with constrained covariance structure.',
			technologies: ['matlab'],
			link: {
				text: 'View in PDF',
				url: 'https://thesis.eur.nl/pub/63367'
			},
			date: 'Jul. 2022'
		},
		{
			name: 'Spatial Implications of Sectoral Changes in Netherlands',
			description:
				'Time series and fixed effects models to estimate the economic sectoral developments and its spatial consequences.',
			technologies: ['python', 'pandas', 'r', 'networkx', 'qgis'],
			link: {
				text: 'View on dev.to',
				url: 'https://dev.to/cemsirin'
			},
			date: 'Apr. 2021'
		}
	],

	toolsSection: {
		tools: [
			'python',
			'pytorch',
			'tensorflow',
			'mlx',
			'transformers',
			'pandas',
			'numpy',
			'opencv',
			'statsmodels',
			'networkx',
			'streamlit',
			'java',
			'r',
			'matlab',
			'qgis',
			'nuxtjs',
			'cloudflare'
		],
		skills: [
			'Artificial Intelligence',
			'Deep Learning',
			'Computer Vision',
			'Natural Language Processing',
			'Machine Learning',
			'Time Series Analysis',
			'Econometrics',
			'Data Mining'
		],
		languages: 'Native in English and Turkish; professional proficiency in Italian'
	}
};
