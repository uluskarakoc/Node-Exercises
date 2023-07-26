# validation-sanitization

Bau ein neues Express Projekt. 

Im Backend sollte auf dem Pfad `/registration` ein Username, Email, ein Country-Code und Passwort angenommen werden. Dabei achte darauf, dass:
1. Die E-mail Adresse gültig ist
2. Das Passwort mindestens 5 Zeichen lang ist.
3. Der Country Code SO_3166-1_alpha-3 entspricht
4. Das der E-mail und Password escaped sind.
5. Das die E-Mail normalisiert ist. (normalizeEmail)

### Bonus Aufgabe: ###

Kannst du mithilfe von ValidatorJS checken wie stark ein Passwort ist? *Tipp: Suche in der Dokumentation nach isStrongPassword*

Hilfe:

https://github.com/validatorjs/validator.js

https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
