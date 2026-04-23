# Berichtsheft-Generator

Python-Tool zur automatischen Generierung von Berichtsheft-Ausbildungsnachweisen für die OSZ IMT Berlin.

## Workflow

1. **Kopiere die DOCX-Vorlage** in den KW-Ordner:
   ```
   Nextcloud/Dokumente/Ausbildung-Cancom/Berichtsheft/[JAHR]/KW[XX]/Berichtsheft Täglich KW [XX].docx
   ```

2. **Fülle die Vorlage per CLI:**
   ```bash
   python3 fill_docx.py --kw 10 --jahr 2026 --nr 130 \
       --montag "Montag-Text" --dienstag "Dienstag-Text" \
       --mittwoch "Mittwoch-Text" --donnerstag "Donnerstag-Text" \
       --freitag "Freitag-Text" --thema "Thema der Woche" \
       --abteilung "Betrieb"
   ```

3. **Exportiere zu PDF via LibreOffice:**
   ```bash
   libreoffice --headless --convert-to pdf --outdir . "Berichtsheft Täglich KW 10.docx"
   ```

## DOCX-Vorlage Platzhalter

Die DOCX-Vorlage muss folgende Platzhalter enthalten:

| Platzhalter | Beschreibung |
|-------------|--------------|
| `{Montag}` | Text für Montag |
| `{Dienstag}` | Text für Dienstag |
| `{Mittwoch}` | Text für Mittwoch |
| `{Donnerstag}` | Text für Donnerstag |
| `{Freitag}` | Text für Freitag |
| `{week_topic}` | Thema der Woche |
| `{Abteilung}` | Abteilung (Betrieb/Berufsschule) |
| `{Day-of-signature}.{JAHRESJAHR}` | Datum für Unterschriftsfeld |

## Anforderungen

- Python 3.8+
- `python-docx`: `pip install python-docx`
- LibreOffice (für PDF-Export)

## Lizenz

Privatprojekt — Alle Rechte vorbehalten
