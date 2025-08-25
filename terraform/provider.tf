provider "aws" {
  region = "ap-south-1"
}

# S3 bucket for frontend
resource "aws_s3_bucket" "frontend" {
  bucket = "my-frontend-bucket-12345"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

# Public read policy
resource "aws_s3_bucket_policy" "frontend_policy" {
  bucket = aws_s3_bucket.frontend.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.frontend.arn}/*"
      }
    ]
  })
}

# Output the website URL
output "frontend_website_url" {
  value = aws_s3_bucket.frontend.website_endpoint
}
