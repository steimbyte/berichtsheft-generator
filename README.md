# Berichtsheft-Generator

Automatischer Berichtsheft-Generator für Auszubildende bei CANCOM.

## Usage

```bash
python3 fill_docx.py \
  --kw 16 \
  --jahr 2026 \
  --nr 136 \
  --abteilung Berufsschule \
  --montag "Montag Text..." \
  --dienstag "Dienstag Text..." \
  --mittwoch "Mittwoch Text..." \
  --donnerstag "Donnerstag Text..." \
  --freitag "Freitag Text..." \
  --thema "Wochen-Thema..."
```

## Parameter

| Parameter | Beschreibung | Beispiel |
|-----------|--------------|----------|
| `--kw` | Kalenderwoche | `16` |
| `--jahr` | Jahr | `2026` |
| `--nr` | Ausbildungsnachweis-Nr. | `136` |
| `--abteilung` | Abteilung | `Betrieb` oder `Berufsschule` |
| `--montag` bis `--freitag` | Tägliche Berichte | Freitext |
| `--thema` | Thema der Woche | Freitext |

## Platzhalter in Vorlage

```
{Nr}, {Ausbildungsjahr}, {KW}, {datums-range}
{Montag}, {Dienstag}, {Mittwoch}, {Donnerstag}, {Freitag}
{week_topic}, {Abteilung}, {day_of_signature}
```

## Features

- ✅ Platzhalter-Ersetzung in DOCX
- ✅ Checkboxen automatisch setzen (☐/☒)
- ✅ Abteilung-Spalte Font 8
- ✅ Automatische PDF-Konvertierung
- ✅ Auto-Shrink bei mehreren Seiten
- ✅ Auto-Open PDF mit xdg-open
