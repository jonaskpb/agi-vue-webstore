# agi-vue-webstore
Um diesen Webstore zu betreiben müssen folgende Schritte erfolgen:
* Installation von Node.js >= 9.2.0
* Installation von MongoDB
* Installation der NPM Pakete für den Client
  * cd ./app
  * npm install
* Installation der NPM Pakete für den Server
  * cd ./server
  * npm install

Nun muss der MongoDB-Server mit mongod gestartet werden. Ggf. muss hier noch mit --dbpath ein Pfad für die Datenbankdatei definiert werden.

Dann kann der Server wie folgt gestartet werden:
Neues Terminal
* cd ./server
* npm run start

Der Client kann wie folgt gestartet werden:
Neues Terminal
* cd ./app
* npm run dev

Danach ist alles auf http://localhost:8080 erreichbar.