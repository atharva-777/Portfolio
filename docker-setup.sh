#!/bin/bash

# Docker Setup Script for Portfolio

echo ""
echo "========================================"
echo "  Portfolio Docker Setup Script"
echo "========================================"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "ERROR: Docker is not installed"
    echo "Please install Docker from https://www.docker.com/products/docker-desktop"
    exit 1
fi

echo "[✓] Docker is installed"
echo ""

# Check if Docker daemon is running
if ! docker ps &> /dev/null; then
    echo "ERROR: Docker daemon is not running"
    echo "Please start Docker"
    exit 1
fi

echo "[✓] Docker daemon is running"
echo ""

# Display menu
while true; do
    echo ""
    echo "========================================"
    echo "  Options:"
    echo "========================================"
    echo "1. Build production image"
    echo "2. Run production container"
    echo "3. Build development image"
    echo "4. Run development container (docker-compose)"
    echo "5. Stop all containers"
    echo "6. View running containers"
    echo "7. Clean up images and containers"
    echo "8. Push to Docker Hub"
    echo "9. Exit"
    echo ""
    
    read -p "Select option (1-9): " choice
    
    case $choice in
        1)
            echo ""
            echo "Building production image..."
            docker build -t portfolio:latest .
            echo ""
            echo "[✓] Production image built successfully"
            echo "Run: docker run -p 3000:3000 portfolio:latest"
            ;;
        2)
            echo ""
            echo "Starting production container..."
            docker run -d -p 3000:3000 --name portfolio-prod portfolio:latest
            echo ""
            echo "[✓] Container started on http://localhost:3000"
            echo "Run: docker logs portfolio-prod"
            ;;
        3)
            echo ""
            echo "Building development image..."
            docker build -f Dockerfile.dev -t portfolio:dev .
            echo ""
            echo "[✓] Development image built successfully"
            ;;
        4)
            echo ""
            echo "Starting development environment (docker-compose)..."
            docker-compose --profile dev up app-dev
            ;;
        5)
            echo ""
            echo "Stopping all containers..."
            docker stop $(docker ps -q) 2>/dev/null || true
            echo "[✓] All containers stopped"
            ;;
        6)
            echo ""
            docker ps
            echo ""
            ;;
        7)
            echo ""
            echo "Cleaning up images and containers..."
            docker container prune -f
            docker image prune -f
            echo "[✓] Cleanup completed"
            ;;
        8)
            echo ""
            read -p "Enter Docker Hub username: " username
            read -p "Enter repository name (default: portfolio): " repo
            repo=${repo:-portfolio}
            
            echo ""
            echo "Tagging image..."
            docker tag portfolio:latest $username/$repo:latest
            
            echo "Logging in to Docker Hub..."
            docker login
            
            echo "Pushing image..."
            docker push $username/$repo:latest
            
            echo ""
            echo "[✓] Image pushed to Docker Hub"
            ;;
        9)
            echo ""
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid choice. Please try again."
            ;;
    esac
done
