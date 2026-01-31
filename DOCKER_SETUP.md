# Docker Setup Guide for Portfolio

## Overview
This project uses a multi-stage Docker setup for optimal production performance and easy local development.

## Files Created

### 1. **Dockerfile** (Production Build)
- Multi-stage build process for minimal image size
- Uses Node 20 Alpine (lightweight)
- Non-root user for security
- Health checks included

### 2. **Dockerfile.dev** (Development Build)
- Optimized for hot reload during development
- All dependencies included
- Direct access to development server

### 3. **docker-compose.yml**
- Two services: production and development
- Automatic volume mounting for dev
- Network isolation
- Health checks and restart policies

### 4. **.dockerignore**
- Excludes unnecessary files from Docker context
- Reduces build time and image size

## Quick Start

### 1. Build Production Image
```bash
# Build the production image
docker build -t portfolio:latest .

# View image size
docker image ls portfolio
```

### 2. Run Production Container
```bash
# Run the app
docker run -p 3000:3000 portfolio:latest

# With environment variables (if needed)
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  portfolio:latest

# Run in background (detached)
docker run -d -p 3000:3000 --name portfolio portfolio:latest
```

### 3. Using Docker Compose (Recommended)

#### Production Mode
```bash
# Start the application
docker-compose up

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop the application
docker-compose down
```

#### Development Mode (with hot reload)
```bash
# Start development environment
docker-compose --profile dev up app-dev

# Run in background
docker-compose --profile dev up -d app-dev

# View logs
docker-compose logs -f app-dev

# Stop development environment
docker-compose --profile dev down
```

## Docker Compose Services

### app (Production)
- Port: 3000
- No volume mounting (optimal for production)
- Auto-restart on failure
- Health checks enabled

### app-dev (Development - optional)
- Port: 3001
- Volume mounting for code changes
- Hot reload enabled
- Use with `--profile dev` flag

## Environment Variables

Create `.env` file in project root if needed:

```bash
# Next.js
NODE_ENV=production
PORT=3000

# Sanity (if required for build time)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Pushing to Docker Hub

```bash
# Tag the image
docker tag portfolio:latest your-username/portfolio:latest

# Login to Docker Hub
docker login

# Push the image
docker push your-username/portfolio:latest
```

## Deploying to Cloud

### AWS ECS
```bash
# Create ECR repository
aws ecr create-repository --repository-name portfolio

# Tag and push
docker tag portfolio:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
```

### Google Cloud Run
```bash
# Configure Docker
gcloud auth configure-docker

# Tag image
docker tag portfolio:latest gcr.io/PROJECT-ID/portfolio:latest

# Push
docker push gcr.io/PROJECT-ID/portfolio:latest

# Deploy
gcloud run deploy portfolio \
  --image gcr.io/PROJECT-ID/portfolio:latest \
  --platform managed \
  --region us-central1
```

### Docker Hub or Self-Hosted Registry
```bash
# Tag and push to Docker Hub
docker tag portfolio:latest your-username/portfolio:latest
docker push your-username/portfolio:latest

# Pull and run on any server
docker run -d -p 3000:3000 your-username/portfolio:latest
```

## Useful Docker Commands

```bash
# View running containers
docker ps

# View all containers
docker ps -a

# View image size and details
docker images

# Remove image
docker rmi portfolio:latest

# Remove all dangling images
docker image prune

# View container logs
docker logs container_id

# Execute command in running container
docker exec -it container_id /bin/sh

# Stop container
docker stop container_id

# Remove container
docker rm container_id

# Build with custom tag
docker build -t portfolio:v1.0 .

# Build and push in one step
docker buildx build --push -t your-username/portfolio:latest .
```

## Benefits of Docker

✅ **Consistency**: Same environment across all machines
✅ **Isolation**: No dependency conflicts
✅ **Scalability**: Easy to scale horizontally
✅ **CI/CD Ready**: Perfect for automated deployments
✅ **No Local Setup**: Team can work without installing Node.js
✅ **Production Parity**: Dev environment matches production
✅ **Easy Updates**: Update image, redeploy container

## Troubleshooting

### Image size too large
```bash
# Check image layers
docker history portfolio:latest

# Use docker scout (if available)
docker scout cves portfolio:latest
```

### Port already in use
```bash
# Change mapping
docker run -p 8000:3000 portfolio:latest
```

### Permission denied while building
```bash
# On Linux, use sudo or add user to docker group
sudo docker build -t portfolio:latest .
```

## Next Steps

1. Test the Docker setup locally
2. Set up CI/CD pipeline (GitHub Actions, GitLab CI, etc.)
3. Deploy to your hosting platform
4. Monitor container health and logs
5. Set up auto-updates for Node.js base image
