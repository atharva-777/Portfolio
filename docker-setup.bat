@echo off
setlocal

:menu
echo.
echo Portfolio Docker Setup
echo 1. Start production
echo 2. Start development
echo 3. Follow logs
echo 4. Stop portfolio containers
echo 5. Remove portfolio containers and images
echo 6. Exit
set /p choice="Select option (1-6): "

if "%choice%"=="1" docker compose up --build -d app
if "%choice%"=="2" docker compose --profile dev up --build -d app-dev
if "%choice%"=="3" docker compose --profile dev logs -f
if "%choice%"=="4" docker compose --profile dev down --remove-orphans
if "%choice%"=="5" docker compose --profile dev down --rmi local --remove-orphans
if "%choice%"=="6" exit /b 0
if not "%choice%"=="1" if not "%choice%"=="2" if not "%choice%"=="3" if not "%choice%"=="4" if not "%choice%"=="5" if not "%choice%"=="6" echo Invalid option.
goto menu