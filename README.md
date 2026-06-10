# Swag Labs E2E Test Automation

Projekt zawiera zautomatyzowane testy End-to-End dla aplikacji [SauceDemo (Swag Labs)](https://www.saucedemo.com/) napisane w frameworku Playwright. Celem projektu jest demonstracja zaawansowanych wzorców projektowych w automatyzacji testów UI.

## 🛠️ Architektura i technologie

W projekcie wykorzystano nowoczesne podejście do automatyzacji:
* **Playwright & TypeScript** – Główne narzędzia do tworzenia niezawodnych testów E2E.
* **Page Object Model (POM)** – Logika stron została odseparowana od testów w celu łatwiejszego utrzymania kodu (skalowalność).
* **Playwright Fixtures** – Zaawansowane zarządzanie stanem i wstrzykiwanie zależności (Dependency Injection) do testów. Pozwala to na "leniwe ładowanie" klas stron i utrzymanie czystości kodu w plikach `.spec.ts`.
* **Zmienne środowiskowe (`.env`)** – Separacja danych wrażliwych (poświadczeń logowania) od repozytorium kodu.

## ⚙️ Wymagania wstępne

Aby uruchomić testy lokalnie, upewnij się, że masz zainstalowane:
* [Node.js](https://nodejs.org/) (wersja 16 lub nowsza)
* Menedżer pakietów npm

## 🚀 Instalacja i konfiguracja

1. Sklonuj repozytorium:
   ```bash
   git clone [https://github.com/TwojaNazwaUzytkownika/swag-labs-e2e-tests.git](https://github.com/TwojaNazwaUzytkownika/swag-labs-e2e-tests.git)
   cd swag-labs-e2e-tests
