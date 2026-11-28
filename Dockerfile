FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY Front/ /usr/share/nginx/html
EXPOSE 80