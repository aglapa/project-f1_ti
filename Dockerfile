# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy your website files into the Nginx server directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80