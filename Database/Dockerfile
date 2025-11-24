FROM mysql:8.0
COPY DbConfig.js /var/lib/mysql
COPY TransactionService.js /var/lib/mysql
RUN mysql_secure_installation --set-root-pass ExpenseApp@1
# docker run --name mysql --network expense -e MYSQL_ROOT_PASSWORD=ExpenseApp@1 -d mysql:8.0
