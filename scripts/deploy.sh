#!/bin/bash

echo "Starting deployment..."

# Set permissions for the deployed files
sudo chmod -R 777 /var/www/html

# Restart NGINX to serve the new HTML
sudo systemctl restart nginx

echo "Deployment completed!"
