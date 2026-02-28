#!/bin/bash
# SenseBridge AI — Build & Deploy Script for Render
# This script builds the React frontend and integrates it with the Flask backend.

set -e

echo "=== SenseBridge AI Build ==="

# Step 1: Build React frontend
echo "→ Installing frontend dependencies..."
cd frontend
npm install

echo "→ Building frontend for production..."
npm run build

# Step 2: Copy dist into backend/static
echo "→ Copying build to backend/static..."
cd ..
rm -rf backend/static
cp -r frontend/dist backend/static

# Step 3: Install backend dependencies
echo "→ Installing backend dependencies..."
cd backend
pip install -r requirements.txt

echo "=== Build Complete ==="
echo "Start with: gunicorn app:app"
