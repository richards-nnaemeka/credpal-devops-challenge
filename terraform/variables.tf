variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "certificate_arn" {
  description = "ARN of SSL certificate"
  type        = string
}

variable "ghcr_token" {
  description = "GitHub Container Registry token"
  type        = string
  sensitive   = true
}

variable "ghcr_username" {
  description = "GitHub username"
  type        = string
}

variable "github_repository" {
  description = "GitHub repository name"
  type        = string
  default     = "richards-nnaemeka/credpal-devops-challenge"
}
