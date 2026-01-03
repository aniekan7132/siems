# Docker Setup for SIEMS Gov

This document explains how to run the SIEMS Gov application using Docker.

## Prerequisites

- Docker
- Docker Compose

## Environment Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the environment variables:**
   Modify the `.env` file to match your configuration needs.

## Quick Start

1. **Build and run the application:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   Open your browser and navigate to `http://localhost:3001`

## Development

The Docker setup includes:
- **Hot reloading**: Changes to your code will automatically refresh the browser
- **Volume mounting**: Your local files are mounted into the container
- **Node modules isolation**: Node modules are isolated in the container

## Commands

- **Start the application:**
  ```bash
  docker-compose up
  ```

- **Start in background:**
  ```bash
  docker-compose up -d
  ```

- **Stop the application:**
  ```bash
  docker-compose down
  ```

- **Rebuild the container:**
  ```bash
  docker-compose up --build
  ```

## Port Configuration

The application runs on port `3001` by default. To change this, modify the `VITE_PORT` variable in your `.env` file. The port mapping in Docker Compose will automatically use this environment variable. 