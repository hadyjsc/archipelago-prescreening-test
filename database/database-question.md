### Level 1: 

Query: 
```sql
SELECT COUNT(CustomerID) as Total, Country FROM Customers GROUP BY Country;
```

Result: 

<img src="Screenshot 2025-04-26 at 11.15.51.png" alt="level-1" width="400"/>


### Level 2: 

Query:
```sql
SELECT * FROM (SELECT COUNT(CustomerID) as Total, Country FROM Customers GROUP BY Country) WHERE Total >= 5 ORDER BY Total DESC;
```

Result:

<img src="Screenshot 2025-04-26 at 11.17.16.png" alt="level-2" width="400"/>

### Level 3: 

Query: 
```sql
SELECT * FROM (SELECT cs.CustomerName, COUNT(os.OrderID) AS CountOrder, MIN(os.OrderDate) AS FirstOrder, MAX(os.OrderDate) AS LastOrder 
FROM Customers cs INNER JOIN Orders os ON cs.CustomerID = os.CustomerID GROUP BY cs.CustomerName) as a ORDER BY a.CountOrder DESC;
```

Result: 

<img src="Screenshot 2025-04-26 at 11.17.43.png" alt="level-2" width="400"/>
