
## CI/CD Status

![CI/CD Pipeline](https://github.com/richards-nnaemeka/credpal-devops-challenge/actions/workflows/ci-cd.yml/badge.svg)

The CI/CD pipeline is successfully configured and running. Latest runs:
- ✅ Workflow #2: Add terraform.tfvars.example template (36s)
- ✅ Workflow #1: Complete DevOps challenge implementation (42s)

The pipeline automatically:
- Runs tests on every push
- Builds Docker images
- Pushes to GitHub Container Registry


Note About AWS Deployment:

The Terraform code in this repository is complete and follows best practices,
but I haven't actually deployed it to AWS. This is to avoid unexpected charges
on my personal AWS account since this is a take-home assessment.

The code includes everything required:
- VPC with public subnets
- Security groups
- Load balancer with HTTPS
- Auto Scaling Group with EC2 instances

To deploy for real, you would:
1. Configure AWS credentials
2. Run terraform init
3. Run terraform apply
4. Then terraform destroy when done to avoid charges

The CI/CD pipeline is fully working though - you can see the passing status
and the Docker images are being pushed to GitHub Container Registry.
