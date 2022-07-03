# 增 INSERT INTO

### 第一种
无需指定要插入数据的列名，只需提供被插入的值即可：
```sql
INSERT INTO 表名
VALUES (value1,value2,value3,...);
```
### 第二种
需要指定列名及被插入的值：
```sql
INSERT INTO 表名 (name,age,phone,...)
VALUES ('xxg',18,"13...",...);
```