FROM nginx:1.21.6-alpine
EXPOSE 80
COPY dist/ /usr/share/nginx/html