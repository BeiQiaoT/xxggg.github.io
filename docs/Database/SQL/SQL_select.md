# 查 SELECT

```sql
SELECT * FROM 表名
```
```sql
SELECT name FROM 表名
```
```sql
SELECT name,age FROM 表名
```

## WHERE - 查哪？
```sql
SELECT * FROM 表名 WHERE country='CN';
SELECT * FROM 表名 WHERE age>18;
```
::: danger 注意
SQL 使用单引号来环绕文本值（大部分数据库系统也接受双引号）  
在上个实例中 'CN' 文本字段使用了单引号。  
如果是数值字段，**请不要使用引号。**
:::

## AND & OR
```sql
SELECT * FROM 表名 WHERE country='CN' AND alexa > 50;
```
```sql
SELECT * FROM 表名 WHERE country='USA' OR country='CN';
```

## 排列
###  ORDER BY 升序
```sql
SELECT * FROM 表名 ORDER BY age;
```

###  ORDER BY DESC 降序
```sql
SELECT * FROM 表名 ORDER BY age DESC;
```
###  ORDER BY 多列
```sql
SELECT * FROM 表名 ORDER BY country,alexa;
```

## 返回唯一 不同的值 SELECT DISTINC
> 就是比如有10个18岁，8个19岁，那他只会返回一个18和一个19.
```sql
SELECT DISTINCT country FROM 表名;
```