export const projects = [
  {
    id: 1,
    title: "AWS Cost Optimization & Architecture Migration",
    description:
      "Led a comprehensive AWS infrastructure optimization initiative that resulted in a 56% reduction in cloud costs through strategic architecture redesign, resource right-sizing, and implementation of cost-effective services. Migrated legacy workloads to modern AWS services while maintaining 99.9% uptime.",
    techStack: [
      "AWS",
      "EC2",
      "S3",
      "ECR",
      "Lambda",
      "SQS",
      "SNS",
      "CloudWatch",
      "Cost Explorer",
      "Terraform",
      "CloudFormation",
    ],
    image: "aws-cost-optimization.png", // Image to be added to public folder
    isEnterprise: true,
  },
  {
    id: 2,
    title: "Amazon RDS MySQL Upgrade (5.6 → 8.0)",
    description:
      "Executed a zero-downtime database migration from MySQL 5.6 to 8.0 across production environments, achieving approximately 40% performance improvement in query execution times. Implemented comprehensive backup strategies and rollback procedures to ensure data integrity throughout the migration process.",
    techStack: [
      "Amazon RDS",
      "MySQL",
      "AWS DMS",
      "CloudWatch",
      "Lambda",
      "S3",
      "Bash",
    ],
    image: "rds-mysql-upgrade.png", // Image to be added to public folder
    isEnterprise: true,
  },
  {
    id: 3,
    title: "Multi-Website Docker Migration",
    description:
      "Architected and executed a large-scale containerization project migrating 60+ web applications to Docker containers, resulting in approximately 80% cost savings through improved resource utilization and automated scaling. Established CI/CD pipelines and container orchestration workflows for seamless deployments.",
    techStack: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Jenkins",
      "Nginx",
      "Linux",
      "Bash",
    ],
    image: "docker-migration.png", // Image to be added to public folder
    isEnterprise: true,
  },
];
