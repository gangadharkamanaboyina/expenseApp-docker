FROM mysql:8.0
COPY schema/ /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=ExpenseApp@1

# docker run --name mysql --network expense -d mysql:v1
