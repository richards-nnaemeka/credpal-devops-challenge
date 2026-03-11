CredPal DevOps Challenge

Project Overview
A production-ready DevOps pipeline for a Node.js application with CI/CD, containerization, and AWS infrastructure.

Application Endpoints
GET /health - Health check endpoint
GET /status - Application status with database connection info
POST /process - Data processing endpoint (expects JSON with 'data' field)
The app runs on port 3000.

How to Run the Application Locally

Prerequisites
- Docker and Docker Compose
- Node.js 18+ (optional)

Steps
git clone https://github.com/richards-nnaemeka/credpal-devops-challenge.git
cd credpal-devops-challenge
docker-compose up -d

Test the endpoints:
curl http://localhost:3000/health
curl http://localhost:3000/status
curl -X POST http://localhost:3000/process -H "Content-Type: application/json" -d '{"data":"test"}'

To stop: docker-compose down

How to Access the App
Local: http://localhost:3000
Health check: http://localhost:3000/health
Status: http://localhost:3000/status
Process endpoint: POST to http://localhost:3000/process with JSON body

How to Deploy the Application

Deploy Infrastructure with Terraform
cd terraform
aws configure (if not already done)
cp terraform.tfvars.example terraform.tfvars (edit with your values)
terraform init
terraform plan
terraform apply
terraform output app_url (to get the URL)

Deploy via CI/CD Pipeline
Push code to the main branch and GitHub Actions will:
- Install dependencies
- Run tests
- Build Docker image
- Push to GitHub Container Registry
For production, manual approval is required in GitHub Actions.

Clean Up
terraform destroy

Key Decisions

Security
- Used non-root user in Docker container to prevent privilege escalation
- No secrets in GitHub (all via GitHub Secrets or terraform.tfvars)
- Load balancer configured with HTTPS and HTTP to HTTPS redirection
- Security groups only open necessary ports
- Health checks at both app and infrastructure level

CI/CD
- Chose GitHub Actions because it integrates well with GitHub and has a free tier
- Added simple tests to catch basic issues before building
- Using GitHub Container Registry for storing images
- Added manual approval for production deployments
- Added caching to make builds faster

Infrastructure
- Spread resources across two availability zones for high availability
- Auto Scaling Group with min 2, max 4 instances to handle traffic
- Application Load Balancer for traffic distribution and SSL
- Public subnets with Internet Gateway for external access
- Auto Scaling Group with launch templates for consistent deployments

CI/CD Status

The CI/CD pipeline is successfully configured and running. Latest runs:
- Workflow #2: Add terraform.tfvars.example template (36s)
- Workflow #1: Complete DevOps challenge implementation (42s)

The pipeline automatically:
- Runs tests on every push
- Builds Docker images
- Pushes to GitHub Container Registry
- 
Note for VirtualBox users: If running in a VM and you want to access from your Windows browser,
use http://127.0.0.1:3000/health after setting up port forwarding in VirtualBox.
Note About AWS Deployment:

The Terraform code in this repository is complete and follows best practices, but I haven't actually deployed it to AWS. This is to avoid unexpected charges on my personal AWS account since this is a take-home assessment.

The code includes everything required:
- VPC with public subnets across 2 availability zones
- Security groups with least-privilege access
- Application Load Balancer with HTTP to HTTPS redirection
- Auto Scaling Group with EC2 instances (min 2, max 4)
- SSL certificate configuration for HTTPS

To deploy for real, follow the steps in the "How to Deploy" section above.

Repository Structure
app/ - Node.js application
  server.js - Main application with endpoints
  package.json - Dependencies
  test.js - Simple tests for CI/CD
terraform/ - Infrastructure as Code
  main.tf - AWS resources (VPC, ALB, ASG, etc.)
  variables.tf - Input variables
  outputs.tf - Output values
  terraform.tfvars.example - Example variables template
.github/workflows/ - CI/CD pipelines
  ci-cd.yml - GitHub Actions workflow
Dockerfile - Multi-stage Docker build with non-root user
docker-compose.yml - Local development with PostgreSQL
.gitignore - Git ignore rules
README.md - This documentation

Technologies Used
- Application: Node.js, Express
- Containerization: Docker, Docker Compose
- CI/CD: GitHub Actions
- Infrastructure: Terraform, AWS (VPC, EC2, ALB, ASG)
- Database: PostgreSQL
- Security: HTTPS, non-root containers, secrets management

Author
Richard Nnaemeka

Submission Details
Position: DevOps Engineer
Company: CredPal
Deadline: Wednesday, 11th March 2026 by 4pm
Repository: https://github.com/richards-nnaemeka/credpal-devops-challenge
