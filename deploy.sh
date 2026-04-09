#!/bin/bash

# Deploy script for portfolio application
# This script automates the process of building and running the Docker container

echo "Stopping and removing existing container..."
docker stop portfolio-website 2>/dev/null || echo "No existing container to stop"
docker rm portfolio-website 2>/dev/null || echo "No existing container to remove"

echo "Building Docker image..."
docker build -t portfolio-website .

echo "Running new container..."
docker run -d -p 3000:80 --name portfolio-website portfolio-website

echo "Deployment complete! Application is running at http://localhost:3000/portfolio/"