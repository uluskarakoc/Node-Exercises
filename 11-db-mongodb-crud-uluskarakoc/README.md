# MongoDB CRUD
Diesmal wollen wir unsere Daten nicht nur lesen. 
Mit Hilfe der **mongo shell** können wir Dokumente hinzufügen, verändern oder löschen.

## Importiere den Datensatz "animals.json"
* erstelle mit Compass eine neue Datenbank **test2** mit einer Collection **animals**
* importiere dann die Datei **animals.json**

## Daten untersuchen
Schaue dir die Daten gründlich an.

## Füge neue Tiere hinzu
In der Liste wurden ein par Tiere vergessen, füge diese mit der hinzu:
```
    {
        "name": "Zippy",
        "kind": "Mouse",
        "favoriteFood": "Cucumber",
        "age": 2
    },
    {
        "name": "Fred",
        "kind": "Cat",
        "favoriteFood": "Cheese",
        "age": 4
    },
```
Antwort:
```
db.animal.insertMany([{
        "name": "Zippy",
        "kind": "Mouse",
        "favoriteFood": "Cucumber",
        "age": 2
    },
    {
        "name": "Fred",
        "kind": "Cat",
        "favoriteFood": "Cheese",
        "age": 4
    },])
 

```

## Alte Tiere finden und verändern
Die meisten Tiere werden nicht so alt wie Menschen.  
Wir wollen alle Tiere mit **"old": true** markieren, die schon **5 Jahre oder älter** sind.

Antwort:
```
db.animal.updateMany(
    { "age": { $gte: 5 } },
    { $set: { "old": true } }
)

```

## Markiere die Vegetarier
Markiere alle Hasen, Mäuse, Vögel und Hamster (rabbit, mouse, bird, hamster) mit **"vegetarian": true**.

Antwort:
```
db.animal.updateMany(
    { "kind": { $in: ["rabbit", "mouse", "bird", "hamster"] } },
    { $set: { "vegetarian": true } }
)

```

## Tiere löschen
*Jack the Rabbit* und *Jack the Snake* sind sich leider zu nah gekommen. Lösche bitte Jack den Hasen (rabbit) aus der Liste.
Jack, die Schlange, soll natürlich nicht gelöscht werden.

Antwort:
```
db.animal.deleteOne({ "name": "Jack", "kind": "rabbit" })

```