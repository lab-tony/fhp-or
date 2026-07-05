# Kurs für Webentwicklung

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [Node und Paketmanager](#node-und-paketmanager)
- [TypeScript](#typescript)
- [React](#react)

## HTML

Grundgerüst einer HTML-Seite und semantisches HTML.

## CSS

CSS Design-Systeme und Grid-Layouts.

## JavaScript

Beispiele von objektorientierter Programmierung, Variablentypen und JS modules.

## Node und Paketmanager

Repository, Insatallation und Verwendung von Node-Paketen mit NPM.

## TypeScript

Typensicherer Verwendung von JavaScript.

## React

Reaktives JavaScript, Render-Verhalten, Properties und States.

# Setup und Installation

- Clone dieses Repository in deine Arbeitsumgebung:
  `git clone https://github.com/lab-tony/fhp-or.git``
- Installiere Node und NPM:
  [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Führe Nach der Installation folgende NPM-Befehl im Root-Ordner dieses Projekts im Terminal aus:
  `npm install`
- Anschließen könnnen folgende Scripte im Terminal ausgeführt werden:
  - `npm run dev` (lokale URL im Browser aufrufen)

    oder

  - `npm run build` und `npm run preview` (lokale URL zur Darstellung der Auslieferungsdateien im Browser, wie z.B. auf einem Server)

## Wordpress API

In der Datei _src/react/App.tsx_ wird die URL https://openrewi.org/wp-json/wp/v2/posts?_fields=title,date,excerpt,link aufgerufen, welche Titel, Datum, Beschreibungstext und Link zur Seite der Posts als JSON zurückgibt und in den React-Komponenten verwendet.

Nach gleichem Prinzip kann jede Wordpress-Seite ihre redaktionellen Daten zur Verwendung bereitstellen.

Siehe auch Wordpress API Dokumentation: https://developer.wordpress.org/rest-api/using-the-rest-api/
