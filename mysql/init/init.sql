-- use mysql;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
CREATE database demo;
-- grant all privileges on scada to 'root' @'%' identified by '1234';
flush privileges;
-- use scada;
-- SET NAMES utf8mb4;
-- SET FOREIGN_KEY_CHECKS = 0;