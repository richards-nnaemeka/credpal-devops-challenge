output "alb_dns_name" {
  description = "DNS name of the load balancer"
  value       = aws_lb.main.dns_name
}

output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}

output "app_url" {
  description = "URL to access the application"
  value       = "https://${aws_lb.main.dns_name}"
}
