

# Bewerbung über Cypress
## * Alle Privatdaten wurden gelöscht

## Testcases:
### 1. Karrierre-Portal öffnen: 
    - Startseite öffnen
    - Coockies akzeptieren
    - Dropdown-Menü auf der Startseite öffnen
    - Dropdown-Menü sollte visible sein
    - Tab Karrierre öffnen
    - Klick auf Link "Technology"
### 2. Job "Testingenieur in Hamburg" finden
    - Url path sollte  /karriere/technology/ haben
    - In Suchfeld wird der folgende Wert eingetragen: Testingenieur
    - Klick auf Standort
    - Aus dem Standort-dropdown wird der folgende Wert ausgewählt: Hamburg
    - Klick auf Standort: Hamburg
    - Klick auf Job "Testingenieur Software für Entwicklungsprojekte, all genders"
    
### 3. Bewerbung senden
    - Url path sollte  /karriere/jobs/testingenieur-software-fuer-entwicklungsprojekte-all-genders-4/ haben
    - Eingabe Forname in Feld "Vorname"
    - Eingabe Nachname in Feld "Nachname"
    - Eingabe E-Mail in Feld "E-Mail"
    - Eingabe Telefon in Feld "Telefon"
    - Upload Bewerbung.pdf
    - Klick auf Radiobutton Datenschutzbestimmungen
    - Klick auf Button: Bewerbung senden

## Bug-report

### Wo:
    - Karrierre-portal -> Job Testingenieur Software für Entwicklungsprojekte, all genders -> Job-Beschreibung: Reizen dich diese Tasks? -> der erste Punkt
    
### Beschreibung:

Ein grammatischer Fehler bei der Job-Beschreibung: "Du testet Programme, Anwendungen, Softwarekomponenten oder ganze Softwarelösungen" anstatt "Du testest Programme, Anwendungen, Softwarekomponenten oder ganze Softwarelösungen." (s. Screenshot)

### Screen

https://ibb.co/cCyNbkn




## Durchführung

Install node.js:
```sh
npm i
```
Install Cypress: 
```sh
npm install cypress --save-dev
```
Test starten mit :
```sh
npx cypress open
```

### Wichtig: 
Aus dem Repository wurden alle Privatdaten gelöscht. Wenn Sie die Teste durchführen möchten, bitte erstmal die notwendigen Daten ausfüllen


