FROM nginx:alpine
COPY Front/ /usr/share/nginx/html
EXPOSE 80