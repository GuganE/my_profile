import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  profile = {
    name: 'Gugan Elangovan',
    title: 'Senior Data Analyst',
    location: 'Richmond, VA',
    email: 'guganelangovan04@gmail.com',
    phone: '(804) 298-8110',
    linkedin: 'https://www.linkedin.com/in/prem-kiran-osipalli-40b09622a/',
    summary: `Data analyst with extensive experience designing scalable ETL pipelines, automating data
      workflows, and developing BI dashboards to inform business decisions. Skilled in SQL, Python,
      Snowflake, Azure, AWS, and visualization tools. Proven track record reducing processing time by
      72% and driving a $1.9M revenue uplift through data-driven initiatives. Adept at synthesizing
      complex datasets, detecting abnormalities, and presenting clear insights to stakeholders.`
  };

  stats = [
    { value: '72%', label: 'Pipeline Processing Time Reduced' },
    { value: '$1.9M', label: 'Revenue Uplift Driven' },
    { value: '5+', label: 'Years of Experience' },
    { value: '3 days → 4 min', label: 'Refund Processing Optimized' }
  ];

  skillGroups = [
    {
      category: 'Programming Languages',
      icon: 'code',
      tags: ['SQL', 'Python', 'Pandas', 'NumPy', 'PySpark', 'R', 'Scala']
    },
    {
      category: 'Data Engineering',
      icon: 'account_tree',
      tags: ['ETL Pipelines', 'Data Modeling', 'dbt', 'Airflow', 'Data Warehousing']
    },
    {
      category: 'Cloud Platforms',
      icon: 'cloud',
      tags: ['Snowflake', 'Azure Data Factory', 'Azure Synapse', 'Data Lake', 'AWS Redshift', 'AWS Glue', 'S3']
    },
    {
      category: 'Databases',
      icon: 'storage',
      tags: ['SQL Server', 'Snowflake', 'MySQL', 'PostgreSQL']
    },
    {
      category: 'Business Intelligence',
      icon: 'bar_chart',
      tags: ['Power BI', 'Tableau', 'Data Visualization']
    },
    {
      category: 'Tools & DevOps',
      icon: 'build',
      tags: ['Git', 'Docker', 'Azure DevOps', 'Linux', 'JMeter', 'Postman', 'SOAP UI']
    },
    {
      category: 'Analytical Techniques',
      icon: 'insights',
      tags: ['Competitive Analysis', 'Predictive Analysis', 'Market Segmentation']
    }
  ];

  experience = [
    {
      company: 'Capital One',
      role: 'Senior Data Analyst',
      period: 'Jul 2025 – Present',
      current: true,
      bullets: [
        'Design and maintain Snowflake data pipelines using dbt to transform and model customer data; automate pipeline triggers and scheduling via Airflow, reducing pipeline failures and latency.',
        'Build Python-based automation tools for ingestion of third-party datasets (PSU and state-specific CSV files) from cloud services (S3/Blob) into Snowflake; standardize and optimize transformation logic.',
        'Develop and manage stored procedures in Snowflake and SQL Server to handle complex data transformations, ensuring performance and reusability across projects.',
        'Collaborate with data scientists and product teams to deliver high-impact data solutions and support predictive analysis.'
      ]
    },
    {
      company: 'Markel Group Inc',
      role: 'Data Engineer',
      period: 'Nov 2022 – Jun 2025',
      current: false,
      bullets: [
        'Designed and maintained SQL Server stored procedures to optimize data processing for internal applications and reporting pipelines.',
        'Developed Python automation workflows that reduced customer refund processing from 3 days to under 4 minutes, improving operational efficiency.',
        'Integrated external lead data into internal databases, performing competitive analysis that supported underwriting teams and contributed to $1.9M revenue growth within 6 months.',
        'Built and maintained Power BI dashboards for mortgage, commission audit, and risk reporting with automated distribution to stakeholders, enhancing data visualization and supporting market segmentation insights.',
        'Created web scraping tools for extracting metadata from third-party sources to enrich internal datasets, enabling improved predictive analysis.',
        'Collaborated with front-end teams to support QA for new UI features, ensuring reliable data integration.'
      ]
    },
    {
      company: 'TATA Consultancy Services – East Jet Airlines',
      role: 'Data & QA Analyst',
      period: 'Jul 2019 – Mar 2020',
      current: false,
      bullets: [
        'Automated secure passenger data checks using government APIs and internal databases.',
        'Wrote and optimized SQL queries to support data validation and reporting.',
        'Conducted load and security testing using JMeter, SOAP UI, and Python.'
      ]
    },
    {
      company: 'TATA Consultancy Services – Lufthansa German Airlines',
      role: 'Data & QA Analyst',
      period: 'Jul 2016 – Jun 2019',
      current: false,
      bullets: [
        'Led analysis of real-time customer data for functional and security testing.',
        'Received recognition for building backend tools used for PNR validation.',
        'Specialized in WCAG compliance testing and produced documentation for internal tools.'
      ]
    }
  ];

  education = [
    {
      institution: 'Virginia Commonwealth University',
      degree: 'M.S., Decision Analytics',
      year: '2022',
      icon: 'school'
    },
    {
      institution: 'Christ University',
      degree: 'MBA, Business Analytics',
      year: '2020',
      icon: 'school'
    },
    {
      institution: 'M. Kumarasamy College of Engineering',
      degree: 'B.E., Mechanical Engineering',
      year: '2016',
      icon: 'engineering'
    }
  ];

  certifications = [
    {
      name: 'AWS Certified Data Analytics – Specialty',
      code: 'DAS-C01',
      year: '2024',
      status: 'active',
      icon: 'verified'
    },
    {
      name: 'Microsoft Azure Data Engineer Associate',
      code: 'DP-203',
      year: 'In Progress',
      status: 'pending',
      icon: 'pending'
    }
  ];

  navLinks = [
    { label: 'Summary', href: '#summary' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' }
  ];
}
