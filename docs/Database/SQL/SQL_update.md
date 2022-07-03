# 改 UPDATE

::: danger 注意  记得带 WHERE
SQL UPDATE 语句中的 WHERE 子句！
WHERE 子句规定哪条记录或者哪些记录需要更新。  

如果省略了 WHERE 子句，所有的记录都将被更新
:::
## 更新数据
```sql
UPDATE 表名 
SET name='xxg', age='18' 
WHERE id='9527';
```

