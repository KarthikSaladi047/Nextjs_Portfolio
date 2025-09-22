export const summaryText = [
  `I'm a versatile and impact-driven Cloud & DevOps Engineer with 4+ years of experience across the Cloud, DevOps, and SRE landscape — delivering reliability and scale in real-world environments. My core strengths lie in Kubernetes and OpenStack, where I've consistently supported and optimized production-grade systems, including complex air-gapped and multi-tenant deployments.`,
  `I've driven SRE outcomes through effective incident response, postmortems, and observability improvements using tools like Cortex, Grafana, and custom alerting pipelines. I’m passionate about reducing operational toil, improving infrastructure with Terraform automation, and building internal tooling with Python and Next.js.`,
  `Whether it's optimizing AWS costs, supporting CSI, managing hybrid workloads, or maintaining high availability in challenging environments, I approach each challenge with curiosity and accountability. I'm multi-cloud certified — holding credentials across CKA, AWS, Azure, GCP, and OCI — and thrive in fast-paced, collaborative teams that value reliability, scale, and continuous learning.`,
];

export const services = [
  {
    title: "Cloud Computing",
    icon: "/icons/cloud.png",
  },
  {
    title: "DevOps Automation",
    icon: "/icons/devops.png",
  },
  {
    title: "SRE Operations",
    icon: "/icons/sre.png",
  },
  {
    title: "Cloud Architecture",
    icon: "/icons/arc.png",
  },
];

export const experiences = [
{
    title: "Technical Services Engineer",
    company: "Pure Storage",
    logo: "/icons/pure.png",
    date: "Sep 2025 – Present",
    points: [
      "Analyzed, troubleshot, and supported large-scale customer deployments in both public and private cloud environments.",
      "Delivered technical expertise across all phases of Portworx deployment for key enterprise customers.",
       "Partnered with customers and stakeholders to optimize deployments, application workflows, and workloads across multiple software stack layers.",
       "Collaborated with engineering teams to analyze logs, reproduce complex issues, and devise effective resolution strategies.",
       "Ensured customer success through proactive, clear communication with internal and external teams.",
      "Supported pre-sales activities, including technical discussions, POCs, and production installations."
  },
  {
    title: "L1 Cloud Support Engineer",
    company: "Platform9 Systems",
    logo: "/icons/pf9.png",
    date: "Oct 2023 – Sep 2025",
    points: [
      "Delivering enterprise-grade support for Platform9-managed Kubernetes and OpenStack workloads across multi-cloud and air-gapped environments.",
      "Led customer-facing incident response and zero-downtime migrations, improving SLA adherence and reducing MTTR.",
      "Automated SaaS environment provisioning using Terraform and Ansible to enable scalable, repeatable deployments formultiple tenants.",
      "Built Python-based tooling for cloud cost optimization, compliance automation, and database migration orchestration across GCP and AWS.",
      "Designed and deployed observability stacks using Prometheus (Cortex), Loki, and Grafana with dynamic service discovery and SLO-driven alerting.",
      "Embedded security best practices in CI/CD pipelines, including secrets management, TLS configuration, and automated vulnerability scanning.",
      "Collaborated cross-functionally to enforce cloud-native practices and uphold SRE principles such as toil reduction, high availability, and scalability.",
    ],
  },
  {
    title: "Program Analyst - DevOps",
    company: "Cognizant Technology Solutions",
    logo: "/icons/cognizant.png",
    date: "Dec 2021 – Oct 2023",
    points: [
      "Contributed to cloud transformation projects by automating infrastructure provisioning and configuration using Terraform and Ansible on Azure and GCP.",
      "Managed Kubernetes clusters (AKS and GKE) for production workloads; implemented health checks, autoscaling, and rolling upgrades.",
      "Built and maintained CI/CD pipelines using Jenkins and Azure Pipelines with integrated with security scans.",
      "Deployed centralized monitoring and alerting stacks to enable proactive observability for distributed applications.",
      "Applied DevSecOps practices by automating TLS enforcement, secret rotation, and vulnerability checks in container pipelines.",
      "Participated in the planning and execution of cloud migrations from on-prem to GCP/Azure, supporting service discovery and cutover strategy.",
      "Handled IAM configuration, service account policies, and SSL/TLS certificate management in cloud-native applications.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "PhysicsWallah",
    logo: "/icons/pw.png",
    date: "Aug 2021 – Nov 2021",
    points: [
      "Built and maintained responsive UI components using React.js and collaborated with Product team to integrate APIs.",
      "Gained hands-on experience with component-based design, state management, and modern front-end development workflows.",
    ],
  },
];

export const projects = [
  {
    title: "SaaS Lifecycle Automation Tool",
    description:
      "Built a full-stack internal tool using Next.js, to automate provisioning, configuration, and monitoring of SaaS environments across customer accounts. Reduced manual operational effort by 60%, cloud cost by 22% and standardized lifecycle actions across teams.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Kubernetes"],
    image: "/projects/pcd.png",
    github: "https://github.com/KarthikSaladi047/SaaS-Lifecycle-Automation",
    demo: "",
  },
  {
    title: "Kubernetes-from-Scratch",
    description: "Building and maintaining a Kubernetes Cluster from Scratch",
    tech: ["Kubernetes", "Bash", "Linux", "TLS Certficates"],
    image: "/projects/k8s.png",
    github:
      "https://github.com/KarthikSaladi047/Kubernetes-from-Scratch-Project",
    demo: "",
  },
  {
    title: "GitOps Pipeline with ArgoCD",
    description:
      "Implemented GitOps workflows using ArgoCD for Kubernetes-based applications. Configured auto-sync, rollback, and secure promotion pipelines to multiple environments. Practiced GitOps principles for reproducible deployments.",
    tech: ["Argocd", "GitHub Actions", "Docker", "Kubernetes"],
    image: "/projects/gitops.png",
    github: "https://github.com/KarthikSaladi047/Infrastructure-Automation",
    demo: "",
  },
  {
    title: "Automation WIth Ansible and Terraform",
    description:
      "Building and maintaining a Web application using Ansible for configuration management and Terraform to provision Infrastructure",
    tech: ["Ansible", "Azure", "Terraform", "Apache"],
    image: "/projects/ansible.png",
    github: "https://github.com/KarthikSaladi047/Infrastructure-Automation",
    demo: "",
  },
  {
    title: "Monitoring Stack",
    description:
      "Designed and deployed a comprehensive observability stack using Prometheus, Grafana, Alertmanager, Pushgateway, Node Exporter, Docker metrics, and Sandbox Exporter. Implemented dynamic service discovery and custom alerting rules.",
    tech: ["Promethus", "Grafana", "Cortex", "Linux"],
    image: "/projects/monitoring.png",
    github: "https://github.com/KarthikSaladi047/Infrastructure-Automation",
    demo: "",
  },
  {
    title: "CI/CD with Jenkins",
    description: "End to End CICD pipeline using Jenkins.",
    tech: ["Jenkins", "Azure", "Terraform", "Node.js"],
    image: "/projects/jenkins.png",
    github: "https://github.com/KarthikSaladi047/Jenkins-Project",
    demo: "",
  },
];

export const techStack = [
  { name: "Linux", icon: "/tech/linux.svg" },
  { name: "Kubernetes", icon: "/tech/kubernetes.svg" },
  { name: "Opnestack", icon: "/tech/openstack.svg" },
  { name: "Terraform", icon: "/tech/terraform.svg" },
  { name: "Portworx", icon: "/tech/portworx.svg" },
  { name: "Cloud", icon: "/tech/googlecloud.svg" },
  { name: "Python", icon: "/tech/python.svg" },
  { name: "Next.js", icon: "/tech/nextdotjs.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "Bash", icon: "/tech/gnubash.svg" },
  { name: "Ansible", icon: "/tech/ansible.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  { name: "Jenkins", icon: "/tech/jenkins.svg" },
  { name: "Prometheus", icon: "/tech/prometheus.svg" },
  { name: "Grafana", icon: "/tech/grafana.svg" },
  { name: "Helm", icon: "/tech/helm.svg" },
];
