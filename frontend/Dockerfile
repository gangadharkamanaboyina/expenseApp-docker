FROM nginx
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/default.d/expense.conf
COPY /content/ /usr/share/nginx/html/
COPY expense.conf /etc/nginx/default.d/
COPY static /usr/share/nginx/html/