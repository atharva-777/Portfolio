@echo off
REM Docker Setup Script for Portfolio

echo.
echo ========================================
echo  Portfolio Docker Setup Script
echo ========================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not installed or not in PATH
    echo Please install Docker Desktop from https://www.docker.com/products/docker-desktop
    echo.
    pause
    exit /b 1
)

echo [✓] Docker is installed
echo.

REM Check if Docker daemon is running
docker ps >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker daemon is not running
    echo Please start Docker Desktop
    echo.
    pause
    exit /b 1
)

echo [✓] Docker daemon is running
echo.

REM Display menu
:menu
echo.
echo ========================================
echo  Options:
echo ========================================
echo 1. Build production image
echo 2. Run production container
echo 3. Build development image
echo 4. Run development container (docker-compose)
echo 5. Stop all containers
echo 6. View running containers
echo 7. Clean up images and containers
echo 8. Push to Docker Hub
echo 9. Exit
echo.

set /p choice="Select option (1-9): "

if "%choice%"=="1" goto build_prod
if "%choice%"=="2" goto run_prod
if "%choice%"=="3" goto build_dev
if "%choice%"=="4" goto run_dev
if "%choice%"=="5" goto stop_all
if "%choice%"=="6" goto show_ps
if "%choice%"=="7" goto cleanup
if "%choice%"=="8" goto push_hub
if "%choice%"=="9" goto end

echo Invalid choice. Please try again.
goto menu

:build_prod
echo.
echo Building production image...
docker build -t portfolio:latest .
echo.
echo [✓] Production image built successfully
echo Run: docker run -p 3000:3000 portfolio:latest
goto menu

:run_prod
echo.
echo Starting production container...
docker run -d -p 3000:3000 --name portfolio-prod portfolio:latest
echo.
echo [✓] Container started on http://localhost:3000
echo Run: docker logs portfolio-prod
goto menu

:build_dev
echo.
echo Building development image...
docker build -f Dockerfile.dev -t portfolio:dev .
echo.
echo [✓] Development image built successfully
goto menu

:run_dev
echo.
echo Starting development environment (docker-compose)...
docker-compose --profile dev up app-dev
goto menu

:stop_all
echo.
echo Stopping all containers...
docker stop $(docker ps -q) 2>nul
echo [✓] All containers stopped
goto menu

:show_ps
echo.
docker ps
echo.
goto menu

:cleanup
echo.
echo Cleaning up images and containers...
docker container prune -f
docker image prune -f
echo [✓] Cleanup completed
goto menu

:push_hub
echo.
set /p username="Enter Docker Hub username: "
set /p repo="Enter repository name (default: portfolio): "
if "%repo%"=="" set repo=portfolio

echo.
echo Tagging image...
docker tag portfolio:latest %username%/%repo%:latest

echo Logging in to Docker Hub...
docker login

echo Pushing image...
docker push %username%/%repo%:latest

echo.
echo [✓] Image pushed to Docker Hub
goto menu

:end
echo.
echo Goodbye!
exit /b 0
