type EducationEntry = {
  institution: string;
  degree: string;
  dateRange: [string, string];
  description?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "University of Rome Sapienza",
    degree: "MSc in Data Science",
    dateRange: ["2022", "2024"],
    description: "GPA: 110/110. Honor Student.",
  },
  {
    institution: "Erasmus University Rotterdam",
    degree: "Double BSc in Econometrics & Economics",
    dateRange: ["2018", "2022"],
    description: "GPA: 7.7/10.",
  },
  {
    institution: "Robert College of Istanbul",
    degree: "High School Diploma",
    dateRange: ["2013", "2018"],
  },
];

type ExperienceEntry = {
  label: string;
  dateRange: string[];
  description: string;
  link?: {
    url: string;
    label?: string;
  };
  tools?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    label: "Data Science Researcher",
    dateRange: ["Oct. 2024", "Jan. 2025"],
    description:
      "Game Theory models for online ad auctions under Prof. Stefano Leonardi.",
    link: {
      url: "https://regret-minimizing-agents.streamlit.app/",
      label: "View Project",
    },
    tools: ["python", "streamlit", "numpy"],
  },
  {
    label: "Teaching Assistant @ Erasmus University Rotterdam",
    dateRange: ["Sep. 2021", "Aug. 2022"],
    description:
      "TA for the courses Combinatorial Optimization and Stochastic Simulation.",
    tools: ["java", "matlab"],
  },
];

type ProjectEntry = {
  label: string;
  date: string;
  description: string;
  link?: {
    url: string;
    label?: string;
  };
  tools?: string[];
};
export const projects: ProjectEntry[] = [
  {
    label: "123offerte.it",
    date: "Jul. 2025",
    description:
      "Website built with a custom AI research algorithm that extracts structured subscription plans from unstructured data.",
    link: {
      url: "https://123offerte.it",
      label: "Visit Website",
    },
    tools: ["python", "nextjs", "cloudflare"],
  },
  {
    label: "MLX-OCR Library",
    date: "Feb. 2025",
    description:
      "Deep learning Python library that uses Apple's MLX for image to text conversion.",
    link: {
      url: "https://github.com/cem-sirin/mlx_ocr",
      label: "View on GitHub",
    },
    tools: ["python", "mlx", "opencv"],
  },
  {
    label: "Master's Thesis in Neural Network Merging",
    date: "Sep. 2024",
    description:
      "Enhanced linear merging methods with improved the SoTA accuracy up to 7%.",
    tools: ["python", "pytorch", "transformers"],
    link: {
      url: "/docs/master-thesis.pdf",
      label: "View in PDF",
    },
  },
  {
    label: "Multiplex Network Analysis Toolkit",
    date: "May. 2024",
    description:
      "Python library for multiplex graph network analysis including new measures for multiplex networks.",
    link: {
      url: "https://pypi.org/project/mplexaa/",
      label: "View on PyPI",
    },
    tools: ["python", "numpy", "networkx"],
  },
  {
    label: "Neural Image Geolocation",
    date: "Feb. 2024",
    description:
      "Multimodal transformer for predicting coordinates of street level images with novel contrastive learning and PEFT.",
    tools: ["python", "tensorflow", "transformers"],
  },
  {
    label: "Bayesian Vector Error Correction Model",
    date: "Jul. 2023",
    description:
      "Bayesian Vector Error Correction Model (VECM) estimator using Gibbs Sampling to predict stock market returns.",
    tools: ["r"],
  },
  {
    label: "Bachelor's Thesis on Hierarchical Cluster Analysis.",
    date: "Jul. 2022",
    description:
      "Novel class of model multi-layered Gaussian Mixture Models with constrained covariance structure.",
    link: {
      url: "https://thesis.eur.nl/pub/63367",
      label: "View in PDF",
    },
    tools: ["matlab"],
  },
  {
    label: "Spatial Implications of Sectoral Changes in Netherlands",
    date: "Apr. 2021",
    description:
      "Time series and fixed effects models to estimate the economic sectoral developments and its spatial consequences.",
    link: {
      url: "https://dev.to/cemsirin",
      label: "View on dev.to",
    },
    tools: ["python", "pandas", "r", "networkx", "qgis"],
  },
];

type ToolsAndSkillsEntry = {
  tools: {
    label: string;
    slug: string;
  }[];
  skills: string[];
  langDescription: string;
};

export const toolsAndSkills: ToolsAndSkillsEntry = {
  tools: [
    { label: "Python", slug: "python" },
    { label: "PyTorch", slug: "pytorch" },
    { label: "TensorFlow", slug: "tensorflow" },
    { label: "MLX", slug: "mlx" },
    { label: "Transformers", slug: "transformers" },
    { label: "Pandas", slug: "pandas" },
    { label: "NumPy", slug: "numpy" },
    { label: "OpenCV", slug: "opencv" },
    { label: "statsmodels", slug: "statsmodels" },
    { label: "NetworkX", slug: "networkx" },
    { label: "Streamlit", slug: "streamlit" },
    { label: "Java", slug: "java" },
    { label: "R", slug: "r" },
    { label: "MATLAB", slug: "matlab" },
    { label: "QGIS", slug: "qgis" },
    { label: "Next.js", slug: "nextjs" },
    { label: "Cloudflare", slug: "cloudflare" },
  ],
  skills: [
    "Artificial Intelligence",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Machine Learning",
    "Time Series Analysis",
    "Econometrics",
    "Data Mining",
  ],
  langDescription:
    "Native in English and Turkish; professional proficiency in Italian",
};
