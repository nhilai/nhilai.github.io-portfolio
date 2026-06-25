window.Portfolio = window.Portfolio || {};

window.Portfolio.data = {
  site: {
    brand: 'NHI LAI · SYDNEY, AU',
    tagline: 'data & analytics — built end to end',
    eyebrow: '/* SELECT lineage FROM career */',
    headline: 'I build data solutions that end in decisions.',
    lede: `Data & Analytics professional with +3 years delivering end-to-end on Azure —
      from metadata-driven ingestion through dimensional warehouses to semantic layers,
      Power BI and GenAI automation, for insurance and financial clients.`,
    signOff: '-- end of pipeline. open to Data Engineer, Analytics Engineer & Data Analyst roles.',
    links: {
      linkedin: 'https://www.linkedin.com/in/nhi-lai',
      email: 'mailto:nhilai1105@gmail.com',
    },
  },
  pipelineStages: [
    { id: 'ingest', label: 'INGEST', description: 'Pipelines & cloud data movement' },
    { id: 'model', label: 'MODEL', description: 'Warehousing & SQL performance' },
    { id: 'serve', label: 'SERVE', description: 'Semantic layers & BI delivery' },
    { id: 'automate', label: 'AUTOMATE', description: 'AI & workflow automation' },
  ],
  projects: [
    // ---------- INGEST ----------
    {
      stage: 'ingest',
      tag: 'ETL/ELT PIPELINES',
      title: 'Production ETL/ELT ingestion pipelines',
      description:
        'Built and maintained production pipelines in Azure Data Factory, ingesting from disparate sources — on-premises databases, PostgreSQL, SFTP folders and APIs — into a centralised Azure SQL warehouse. Improved reliability with incremental loads, parallel execution, source availability checks, automated retry logic and deduplication, enabling consistent daily downstream reporting.',
      chips: ['Azure Data Factory', 'ETL/ELT', 'Logic Apps'],
    },
    {
      stage: 'ingest',
      tag: 'METADATA-DRIVEN FRAMEWORK',
      title: 'Metadata-driven ingestion framework',
      description:
        'Used a metadata-driven framework to dynamically manage source-to-target mappings, so new data sources could be onboarded within hours with minimal code changes.',
      chips: ['Azure Data Factory', 'Metadata-driven', 'Azure SQL', 'CI/CD'],
    },
 
    // ---------- MODEL ----------
    {
      stage: 'model',
      tag: 'DATA WAREHOUSING · MEDALLION',
      title: 'Dimensional warehouse design',
      description:
        'Developed and maintained Azure SQL data warehouse solutions using medallion architecture with star and snowflake schemas, building curated analytical layers with standardised business metrics for Power BI, enabling self-serve reporting and reducing reliance on technical team.',
      chips: ['Medallion architecture', 'Star & snowflake schemas', 'Azure SQL', 'Semantic layer'],
    },
    {
      stage: 'model',
      tag: 'SQL OPTIMISATION',
      title: 'SQL performance tuning',
      description:
        'Tuned SQL performance by analysing execution plans, adding targeted indexes on high-volume tables, replacing selected CTEs with temporary tables, and explicitly casting mismatched join columns to avoid implicit conversions — reducing runtime for some procedures by up to 80%.\n'
        +'Optimised reporting models by cutting unnecessary fact-table joins and consolidating attributes into core dimensions, improving Power BI refresh time by 50%.',
      chips: ['Execution plans', 'Index tuning', 'Query optimisation', 'T-SQL'],
    },
 
    // ---------- SERVE ----------
    {
      stage: 'serve',
      tag: 'POWER BI · DAX',
      title: 'PBI reporting suite — 500+ users',
      description:
        'Built and maintained 9 Power BI reports for a client serving 500+ lawyers, partners, operational and executive users — covering utilisation, revenue, profit, WIP, debt and other KPIs. Authored complex DAX measures and calculation groups, and implemented row-level security to restrict report access to entitled users.',
      chips: ['Power BI', 'DAX', 'Calculation Groups', 'Row-Level Security'],
    },
    {
      stage: 'serve',
      tag: 'AZURE SQL · POWER BI',
      title: 'Automated compliance reporting',
      description:
        'Automated quarterly complaints reporting for the Risk & Compliance team by reverse-engineering Excel-based business logic and rebuilding it in Azure SQL and Power BI. Validated outputs through iterative testing against the original Excel reports, cutting reporting effort from days to hours and enabling current, historical and self-service compliance analysis.',
      chips: ['Azure SQL', 'Power BI', 'Process automation'],
    },
    {
      stage: 'serve',
      tag: 'SQL · PYTHON · EXCEL',
      title: 'Ad-hoc analysis',
      description:
        'Delivered ad-hoc data analysis for compliance audits and business reporting — pulling and validating large datasets with SQL, Python and Excel, turning complex operational data into business insights, investigating cross-system discrepancies to find root causes, and presenting findings and resolutions clearly to non-technical stakeholders.',
      chips: ['SQL', 'Python', 'Excel', 'Ad-hoc analysis'],
    },
    // ---------- AUTOMATE ----------
    {
    stage: 'automate',
    tag: 'COPILOT STUDIO · LLM',
    title: 'GenAI assistant for product queries',
    description:
      'Delivered an AI chatbot using Copilot Studio with LLM, letting business users query insurance product information across 20+ ledgers in natural language and cutting time spent manually searching documents. Prepared a user manual to support adoption.',
    chips: ['Copilot Studio', 'LLM', 'RAG'],
  },
  {
    stage: 'automate',
    tag: 'AZURE AUTOMATION · LOGIC APPS',
    title: 'Operational automation & monitoring',
    description:
      'Developed Azure Automation and ADF workflows — sequencing runbooks via the Automation API, extracting user data through the Microsoft Graph API, generating CSVs to ADLS and loading into Azure SQL via ADF.\n Built Logic Apps to monitor pipeline health and catch failures, cross-system value mismatches and missing reference data before they reached reports.\n Led production incident response to restore loads within agreed service levels.',
    chips: ['Azure Automation', 'ADLS', 'Logic Apps', 'Incident management'],
  },
  ],
  stack: {
    groups: [
      {
        label: 'ENGINEERING',
        pills: ['SQL', 'Azure Data Factory', 'Azure DevOps CI/CD'],
      },
      {
        label: 'ANALYTICS',
        pills: ['Power BI', 'Datawarehousing', 'Dimensional modelling', 'Excel', 'Python', 'Power Apps'],
      },
      {
        label: 'AI & AUTOMATION',
        pills: ['Cursor', 'Copilot Studio', 'Power Automate', 'Logic Apps', 'Azure Automation'],
      },
    ],
    learning: 'Currently building: Microsoft Fabric (DP-700) · introductory Databricks,Snowflake, dbt exposure',
  },
  certifications: [
    { name: 'Azure Data Scientist Associate', org: 'MICROSOFT' },
    { name: 'Azure AI Engineer Associate', org: 'MICROSOFT' },
    { name: 'Power Platform Developer Associate', org: 'MICROSOFT' },
    { name: 'AWS Cloud Practitioner', org: 'AWS' },
    { name: 'Fabric Data Engineer (DP-700)', org: 'IN PROGRESS' },
    { name: 'dbt Fundamentals', org: 'DBT LABS' },
  ],
};
