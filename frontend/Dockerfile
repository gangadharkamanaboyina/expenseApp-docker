FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY /content /usr/share/nginx/html/
COPY expense.conf /etc/nginx/default.d/expense.conf
COPY static /usr/share/nginx/html/
