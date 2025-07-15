# Periodensystem API

Ein einfaches Node.js / Express API-Beispiel.  
Fragt die Tabelle `elements` aus einer Postgres-Datenbank ab und liefert gefilterte Daten zurück.  
Die Datenbankverbindung kann über Supabase oder einen anderen Postgres-kompatiblen Dienst hergestellt werden.

---

## Funktionen

- CORS-Unterstützung
- Filterung über Query-Parameter: `state`, `category`, `name`
- Verwendung des `postgres` npm-Pakets
- Sichere Verwaltung der Verbindungsdaten über `.env`
- SSL-Zertifikat-Überprüfung deaktiviert (für Entwicklungszwecke)

---

## Installation und Nutzung

1. Repository klonen oder Dateien herunterladen.

2. Node Version: 20.16.0

3. Eine `.env` Datei im Projektordner erstellen und die Postgres-Verbindungszeichenfolge eintragen:

   ```env
   DATABASE_URL=postgres://benutzer:passwort@host:port/datenbank
