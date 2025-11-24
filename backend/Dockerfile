FROM node:20
WORKDIR /opt/server
COPY /config .
EXPOSE 8080
RUN npm install
ENV DB_HOST=mysql
