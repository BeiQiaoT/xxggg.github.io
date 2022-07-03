# 删 DELETE

::: danger 注意  记得带 WHERE
SQL DELETE 语句中的 WHERE 子句！  
WHERE 子句规定哪条记录或者哪些记录需要删除。

如果省略了 WHERE 子句，所有的记录都将被删除！
:::

```sql
DELETE FROM 表名
WHERE name='xxg' AND age='18';
```

###  删除所有数据
在不删除表的情况下，删除表中所有的行。这意味着表结构、属性、索引将保持不变：
```sql
DELETE FROM table_name;

或

DELETE * FROM table_name;
```
**在删除记录时要格外小心！**【除非你有备份...】

