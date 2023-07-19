# My Little Project 

Erstelle ein kleines Backend Projekt in Zweier bis Vierer-Teams. Es wäre theoretisch sogar möglich, es nachher im Laufe des Kurses oder gar Final Projects auszuarbeiten (muss aber nicht).



## Technologien und Inhalte
Folgende Technologien und Inhalte **muss** das Projekt mindestens aufweisen:

### Backend


* Nodejs mit express
	* routes
	* controller
	* 404 page not found
* MongoDb
	* mongoose
	* mindestens zwei verschiedene Schema/Models
		* Ein Schema bzw. Model muss auf das andere referieren!
	* _.env_-Datei für das Passwort
* CRUD Operations
 	* create, read, update und delete
	* man soll also in der Lage sein, mittels bestimmter Endpunkte bzw. Routen (z.B. GET "/books") Daten auszulesen , hinzuzufügen, bearbeiten und zu löschen


	

### Sonstiges
* Denke an `.gitignore`
* Wenn du noch Zeit übrig hast, dann kannst du dir selbst noch weitere Dinge ausdenken oder ganz unten bei "Mögliche Erweiterungen" schauen


## Ideen für kleine Projekte
Nachfolend ein paar Ideen, die die implementiert werden könnten

* Hotel-Reservierungssystem
  	* Backend-Logik für ein Hotel-Reservierungssystem (ähnlich zu "Restaurant Management System:")
  	* Als Schema/Model kämen z.B. ReservationSchema (guestName, roomNumber, checkInDate, ...) und RoomSchema (roomNumber, roomType, pricePerNight) in Frage
  	*  roomNumber vom ReservationSchema sollte hierbei auf ein RoomSchema-Dokument verweisen.
* Bücherregal
  *  eine Sammlung deiner Lieblings-Bücher (Autor, Titel, etc)
  *  hier könntest du neben dem Model "Book" ein weiteres namens "Author" (name, books, age, etc) erstellen. Dieses Model wird dann von "Book" referiert
* Movie List
  * Deine Lieblingsfilme mit entsprechenden Angaben
  * Ähnlich wie bei "Bücherregal" könntest du hier ein weiteres "Author" Model hinzufügen

* Tierregister
  * Eine App, in der Benutzer ihre Haustiere (Name, Art, Rasse, Alter usw.) registrieren können.
  * in einem zweiten Model "Race" könntest du jeder Rasse, die du einem Haustier zuordnen kannst, z.B. einen Beschreibungstext, Name und Ähnliches  hinzufügen
* Musikbibliothek
	* Eine App, wo Benutzer ihre Lieblingsmusik (Artist, Album, Genre, Jahr usw.) speichern und organisieren können.
   	* auch hier könnte ein zweites Model "Artist" erstellt werden, das referiert wird
* Lernressourcen-Manager
	* Eine Anwendung, in der Benutzer Links zu Online-Ressourcen (Bücher, Videos, Kurse, Blogs etc.) hinzufügen, bearbeiten und löschen können, die sie hilfreich finden.
   	* Mein Favorit, könnte man schön ausbauen zu einem Final Project :)
   	* hier könnte man mehrere Models erstellen und diese referieren


 
## Tipps zum Anfangen
### Projekt-Idee
Suche dir ein Projekt aus der oberen Beispiel-Liste aus oder denke dir selbst etwas aus. Du könntest auch eine simple **Shop-App** reaslisieren, mit einer Collection namens `products`.

Egal was du wählst, versuche **nicht** copy&paste von anderen Projekten zu machen. Du kannst und sollst natürlich jederzeit in vergangene Projekte reinschauen.

### Erstelle eine neue Express App: 
* neue _app.js_ Datei erstellen
* ```npm init -y``` ausführen
* ```"type":"module"``` hinzufügen in _package.json_
* `.gitignore` hinzufügen
* ```npm install express mongodb mongoose``` ausführen
* usw.

### Daten
* Überlege dir, wie deine Datenstruktur aussehen soll.
Nachfolgend eine simple Struktur für ein Tier-Dokument
```
 {
    "name": "Meowsy",
    "species" : "cat",
    "foods": {
      "likes": ["tuna", "catnip"],
      "dislikes": ["ham", "zucchini"]
    }
  }
```
 * basierend auf deiner Datenstruktur erzeugst nur nachher das mongoose model
 * bereite eine entsprechende `Collection` und/oder Datenbank z.B. mittels Compass vor.


### Coden
* verwende die `mongooseConnect.js` um dich mit deiner Datenbank zu verbinden (siehe live coding)
  * du musst hier natürlich  Angaben wie `user` und `cluster` anpassen
  * denke auch an dein Passwort in der `.env` Datei
* in deiner Haupt-Datei (z.B. server.js) kannst du dann express initialisieren und dich mit mongoDb verbinden
* erstelle dann das mongoose Model im `models` Ordner
* versuche den ersten Endpoint zu erzeugen, der z.B. alle Dokumente aus deiner Collection an den Client sendet
  * Nutzer hierbei die Controller- und Router Struktur (siehe nächster Punkt "mögliche Ordnerstruktur")

### mögliche Ordnerstruktur
_Nachfolgend ein Beispiel, basierend auf der Musikbibliothek-Idee_
```
projekt
  - app.js (oder server.js/index.js)
  - controllers
    - albumsController.js
    - artistController.js
  - models
    - AlbumModel.js
    - artistModel.js
  - node_modules
  - routes
    - albumRoutes.js
    - artistRoutes.js
    - generalRoutes.js
```

## Mögliche Erweiterungen
_Als Bonus zu verstehen, wenn dir noch Zeit bleibt_


1. **Pimpe dein Schema/Modell auf**: Hast du schon an alles gedacht, was du in deinem Daten-Modell unterbringen könntest? Wie wäre es, wenn du z.B. bei deinen Kontakten auch den Beziehungsstatus oder das Geburtsdatum mit reinpackst? Dann hast du nicht nur mehr Daten zum Spielen, sondern lernst auch, wie du mit mongoose noch tiefgründiger ins CRUD-Geschehen eingreifen kannst.

2. **Verschachtelte Dokumente für Fortgeschrittene**: Trau dich und pack in dein Modell noch eine Extra-Schicht! Bei einem Buch könntest du z.B. den Autor nicht nur als String, sondern als eigenes kleines Unter-Modell anlegen, mit Geburtsdatum, Nationalität und was dir noch so einfällt. Damit nimmst du die Herausforderung an, verschachtelte Dokumente in mongoose zu meistern und sie gekonnt in deine CRUD-Operationen zu integrieren.

4. **Die Such-Maschine**: Wer sucht, der findet - wenn es eine passende API-Ressource gibt! Leg doch mal eine Route an, über die du Bücher nach Autor, Titel oder Veröffentlichungsjahr suchen kannst. Damit vertiefst du deine mongoose-Kenntnisse und lieferst deinen Nutzern einen echten Mehrwert.

6. **Sortieren nach Wunsch und Laune**: Mach's deinen Nutzern leicht und biete ihnen die Möglichkeit, deine Bücher- oder Filme-Liste nach verschiedenen Kriterien zu sortieren - Titel, Autor, Veröffentlichungsjahr, was immer Sinn macht. Damit übst du, wie du mit mongoose spielend leicht sortierst, und verbesserst die User Experience deiner App.
7. **Frontend**
Erstelle ein passendes Frontend
* z.B. mit React
	* states, props, hooks,....
	* optional: Library für styling (z.B. https://mui.com/)
	* Validation von user input (client-seitig)
