# telegram-bot-workshop

Heute bauen wir Telegram Bots. Dazu musst du Telegram auf deinem Handy installiert haben. (Alternativ kannst du sowas ähnliches auch mit Whatsapp machen, da musst du aber selber recherchieren wie das geht)

## Schritt 1: Richte den Bot auf Telegram ein

1. Lad dir die Telegram-App runter und melde dich an. Alternativ kannst du auch Telegram Web benutzen. 
2. Such nach dem "BotFather" Bot in der App.
3. Chatte mit BotFather und folge den Anweisungen, um einen neuen Bot zu erstellen. (Die meisten Botnamen sind schon benutzt. Im zweifel musst du dir einen relativ langen Namen überlegen.)
4. Nachdem du den Bot erstellt hast, bekommst du einen Token. Pass gut auf diesen Token auf, du brauchst ihn, um mit der Telegram Bot API zu interagieren.

## Schritt 2: Richte dein Node.js Projekt ein

1. Installiere Node.js, wenn du das noch nicht gemacht hast.
2. Erstelle ein neues Verzeichnis für dein Projekt, navigiere mit deinem Terminal dorthin und führe `npm init -y` aus, um ein neues Node.js-Projekt zu erstellen.
3. Installiere das Paket `node-telegram-bot-api`, das ist ein Wrapper für die Telegram Bot API. Du kannst es mit npm installieren: `npm install --save node-telegram-bot-api`

## Schritt 3: Erstelle dein Bot-Skript

1. Erstelle eine neue Datei in deinem Projektverzeichnis, zum Beispiel `bot.js`.
2. Öffne diese Datei und füge zuerst das `node-telegram-bot-api` Modul hinzu:

```javascript
const TelegramBot = require('node-telegram-bot-api');
```

3. Jetzt erstelle eine neue Bot-Instanz mit dem Token, den du von BotFather bekommen hast:
```javascript
const bot = new TelegramBot('DEIN_BOT_TOKEN', {polling: true});
```
4. Als Nächstes richte einen Listener für das message Event ein. Dieses Event wird ausgelöst, wann immer dein Bot eine neue Nachricht erhält:

```javascript
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Sende eine Nachricht an den Chat, um den Empfang ihrer Nachricht zu bestätigen
    bot.sendMessage(chatId, 'Hab deine Nachricht bekommen');
});
```
## Schritt 4: Starte deinen Bot

```
node bot.js
```

Jetzt sollte dein Bot mit 'Hab deine Nachricht bekommen' antworten, wenn du ihm auf Telegram eine Nachricht schickst. 

## Schritt 5: 
Jetzt bist du dran! Du kannst noch viel mehr mit der Telegram Bot API machen, wie zum Beispiel Bilder senden, strukturierten Text, Inline-Keyboards und so weiter. z.B.

* Wetter-Bot: Du kannst dir das aktuelle Wetter und Vorhersagen für deinen Standort oder einen anderen Standort anzeigen lassen.
* News-Bot: Schickt dir die Top-Nachrichten des Tages oder News aus spezifischen Kategorien, die dich interessieren.
* Erinnerungs-Bot: Du kannst Erinnerungen für Aufgaben, Ereignisse oder Gewohnheiten setzen. Der Bot schickt dir eine Nachricht, wenn es soweit ist.
* Quiz-Bot: Du kannst Trivia-Quizze zu verschiedenen Themen spielen. Der Bot hält den Punktestand und gibt sofortiges Feedback.
* Fitness-Bot: Schickt dir Workout-Routinen, verfolgt deinen Fitnessfortschritt und kann motivierende Zitate bieten.
* Mahlzeitenplaner-Bot: Schlägt Rezepte vor, die auf deinen Ernährungsvorlieben basieren, und liefert eine Einkaufsliste.
* Sprachlern-Bot: Schickt tägliche Vokabel- und Grammatikübungen, um dir zu helfen, eine neue Sprache zu lernen.
* Produktivitäts-Bot: Nutzt die Pomodoro-Technik oder ähnliche Methoden, um dir zu helfen, dich auf Aufgaben zu konzentrieren.
