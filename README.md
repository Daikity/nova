# Тестовый проект NOVA HOTEL & SUITES

## Архитектура
- app
- features
- shared
- widgets
- pages

#### App
Ядро проекта.
Содержит стили, иконки, роуты, store, и главный App.vue файл

#### Shared
Часто переисполняемые компоненты. Они являются основой для фичи или виджета.

#### Features
Переисполняемые компоненты. Используются как часть виджета собрав кусочки из shared, содержит полезную логику для управления виджетом

#### Widgets
Полноценный компонент, который содержит полезную логику управления большей части проекта

#### Pages
Основные страницы проекта

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
