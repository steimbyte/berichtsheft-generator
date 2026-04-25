# Netzwerk-Simulator Pro

> Browserbasierter Netzwerk-Simulator für ITSE IHK AP2

![Version](https://img.shields.io/badge/version-1.2-blue)
![HTML](https://img.shields.io/badge/HTML5-CSS3-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## 🚀 Schnellstart

```bash
# Mit Firefox öffnen
firefox /home/steimer/workspace/quizzes/network-sim/index.html

# Oder mit Playwright testen
cd /home/steimer/workspace/quizzes
npx playwright test
```

## ✨ Features

- 📦 **20+ Geräte** - PCs, Switches, Router, Server, PoE-Geräte
- 🔌 **Drag & Drop** - Intuitive Topologie-Erstellung
- 🎯 **Port-Verbindungen** - Ziehen von Port zu Port
- 📡 **PDU-Simulation** - ICMP, ARP, DHCP, DNS, HTTP
- 🌳 **STP** - Spanning Tree Protocol
- 🏷️ **VLAN** - Virtuelle LANs
- 💻 **CLI Terminal** - Cisco IOS Befehle
- 💾 **Save/Load** - Topologien speichern/laden

## 📁 Projektstruktur

```
network-sim/
├── index.html          # Hauptanwendung
├── DOCUMENTATION.md    # Vollständige Dokumentation
└── README.md          # Diese Datei
```

## 🎮 Bedienung

### Topologie erstellen

1. **Gerät ziehen** - Von linker Leiste auf Canvas
2. **Verbinden** - Port anklicken und zu anderem ziehen
3. **Konfigurieren** - IP-Adressen, VLANs, etc.
4. **Simulieren** - PDU senden und beobachten

### PDU senden

```
1. Toolbar → "PDU"
2. Quelle wählen
3. Ziel wählen
4. Typ (ICMP, DHCP, etc.)
5. Senden
```

## 🛠️ Entwicklung

### Technologien

- **HTML5** - Struktur
- **CSS3** - Glassmorphism Design
- **JavaScript ES6+** - Logik
- **Phosphor Icons** - Icon-Set
- **Panzoom** - Canvas Zoom/Pan

### Browser-Anforderungen

- Chrome 90+ / Firefox 88+ / Safari 14+
- ES6+ Support erforderlich

## 📖 Dokumentation

Vollständige Dokumentation: [DOCUMENTATION.md](./DOCUMENTATION.md)

## 🎯 Für Prüfung lernen

Der Simulator enthält alle relevanten Themen für ITSE IHK AP2:

| Thema | Feature |
|-------|---------|
| Netzwerkgrundlagen | IP-Adressierung, Subnetze |
| Kupferverkabelung | Cat5e-Cat7 Kabel, Dämpfung |
| Glasfaser | OM3-OM4, Singlemode |
| PoE | PoE+, PoE++ Budgets |
| Switching | VLANs, STP, MAC-Tables |
| Routing | Statische Routen |
| Dienste | DHCP, DNS, HTTP |

## 📜 Lizenz

Für Bildungszwecke - ITSE IHK AP2 Prüfungsvorbereitung

---

**Letztes Update:** 2026-04-25
