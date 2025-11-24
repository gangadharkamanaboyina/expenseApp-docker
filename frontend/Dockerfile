FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY content/ /usr/share/nginx/html/
COPY static/ /usr/share/nginx/html/static/
COPY expense.conf /etc/nginx/conf.d/expense.conf

