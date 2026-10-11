#!/usr/bin/env bash
set -euo pipefail

while true; do
  printf '\nPortfolio Docker Setup\n'
  printf '1. Start production\n'
  printf '2. Start development\n'
  printf '3. Follow logs\n'
  printf '4. Stop portfolio containers\n'
  printf '5. Remove portfolio containers and images\n'
  printf '6. Exit\n'
  read -r -p 'Select option (1-6): ' choice

  case "$choice" in
    1) docker compose up --build -d app ;;
    2) docker compose --profile dev up --build -d app-dev ;;
    3) docker compose --profile dev logs -f ;;
    4) docker compose --profile dev down --remove-orphans ;;
    5) docker compose --profile dev down --rmi local --remove-orphans ;;
    6) exit 0 ;;
    *) printf 'Invalid option.\n' ;;
  esac
done