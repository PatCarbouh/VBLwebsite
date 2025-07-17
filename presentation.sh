#!/bin/bash

set -e

function clean_up {
  echo "Serveur fermé"
  echo "Suppression des fichiers inutiles..."
  rm -rf node_modules package-lock.json .next
  echo "Nettoyage terminé."
}

# Associe Ctrl+C à la fonction clean_up
trap clean_up EXIT

echo "Installation des dépendances..."
npm install

echo "Lancement du serveur Next.js en mode dev"
npm run dev

