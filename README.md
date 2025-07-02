# This repository contains an automated test suite built with Cypress for testing **Swag labs** site.

## Installation
**Prerequisite:** Install Node.js (only once)

### 1. Clone the repository:
```bash
git clone [repository-url]
```
### 2. Navigate to the project directory:
```bash
cd [project-folder]
```
### 3. Install dependencies
```bash
npm install
```
### 4. Run the tests
```bash
npm run test:chrome
```
> **Note:** Passing `:headless` will force the browser to be hidden.
To see more flags to run automation with, check the official [Cypress CLI](https://docs.cypress.io/guides/guides/command-line.html#cypress-run) documentation.

### 5. Open the Cypress test editor
```bash
npm run test:debug
```

## Configuration
Configuration options can be set in:
* cypress.config.js - Main configuration file
* .env - Environment variables (create from .env.example)