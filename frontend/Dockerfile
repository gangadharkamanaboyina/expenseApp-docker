# FROM nginx
# RUN rm -rf /usr/share/nginx/html/*
# RUN rm -rf /etc/nginx/default.d/expense.conf
# COPY /content /usr/share/nginx/html/
# COPY expense.conf /etc/nginx/default.d/
# COPY static /usr/share/nginx/html/

FROM nginx:latest

# clean default Nginx html
RUN rm -rf /usr/share/nginx/html/*

# copy your frontend build output
COPY content/ /usr/share/nginx/html/
COPY static/ /usr/share/nginx/html/

# add your nginx config
COPY expense.conf /etc/nginx/conf.d/expense.conf
