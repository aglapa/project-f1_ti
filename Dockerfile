# Use the official PHP image with Apache web server built-in
FROM php:8.2-apache

# Install the necessary PHP extensions to talk to MySQL
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy your project files into Apache's public web directory
COPY . /var/www/html/

# Expose port 80 for web traffic
EXPOSE 80