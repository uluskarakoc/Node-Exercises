# exercise-mongodb-queries

## Importiere den Datensatz "people.json"
* erstelle mit Compass eine neue Datenbank **test** mit einer Collection **people**
* importiere dann die Datei

## Daten untersuchen
Schaue dir die Daten gründlich an.

## Daten finden
Schreibe ein Query für jede Aufgabe.  
Das fertige Query kannst du hier als Antwort einfügen.  
Hilfe:
[MongoDB Query](https://docs.mongodb.com/manual/tutorial/query-documents/)  
[MongoDB Operatoren](https://docs.mongodb.com/manual/reference/operator/query/#projection-operators)

### 1. Finde Angelo
Finde nur die Person mit dem Namen **Angelo**

Antwort:
```json
db.data.find({ name: "Angelo" })

```

### 2. Finde Alle mit A im Namen
Finde allePersonen mit einem "A" im Namen

Antwort:
```json
db.data.find({ name: { $regex: "A" } })


```

### 3. Finde alle mit genau 25 Jahren
Finde alle Personen, deren Alter genau **25** ist.

Antwort:
```json
db.data.find({age:25})

 
```

### 4. Finde alle im Alter von 20 bis 30
Finde alle Personen, deren Alter zwischen 20 und 30 Jahren liegt (inklusive 20 und 30)

Antwort:
```json
db.data.find({age:{$gte:20,$lte:30}})

 
 
```

### 5. Finde alle unter 20
Finde alle Personen, deren Alter unter **20** ist.

Antwort:
```json
db.data.find({ age: { $lt: 20 } })

```

### 6. Finde Luke und Abdu
Finde nur die zwei Personen mit den Namen, **Luke** und **Abdu**.

Antwort:
```json
db.people.find({ name: { $in: ["Luke", "Abdu"] } })


### 7. Finde alle mit Haustier
Finde alle (3) Personen mit einem oder mehreren Haustieren.
(Achtung Schwer!)

Antwort:
```json
db.data.find({ pets: { $exists: true, $not: { $size: 0 } } })

```

### 8. Finde die Person mit der Katze "Zoey"
Finde genau eine Person, mit einer Katze, die den Namen **Zoey** hat.
(Achtung Schwer)

Antwort:
```json
db.data.find({ pets: { $elemMatch: { type: "cat", name: "Zoey" } } })
db.data.find({ "pets.name": "Zoey", "pets.kind": "Cat" })

```

### 9. Finde alle die Football mögen
Finde alle Personen, die Football (**football**) in der Liste ihrerer Hobbies haben.

Antwort:
```json
db.data.find({ hobbies: "football" })

```

### 10. Finde alle die Filme mögen und Über 20 sind
Finde alle Personen, die Filme (**movies**) in der Liste ihrerer Hobbies haben **und** aälter sind als **20** Jahre.

Antwort:
```json
db.data.find({ hobbies: "movies", age: { $gt: 20 } })

```
