# SPA 

Современное одностраничное приложение (SPA) на **React**, **MobX** и **Material UI**.  
Проект демонстрирует лучшие практики управления состоянием, обработки ошибок и построения адаптивного интерфейса.

---

## Возможности

-  **Albums**: Просмотр альбомов с пагинацией и обработкой ошибок.
-  **Posts & Users**: Одновременная загрузка постов и пользователей с раздельным отображением ошибок.
-  **Counter**: Простой счётчик на MobX с инкрементом, декрементом и сбросом.
-  **Global and local error handling**: ErrorBoundary, ErrorPage и переиспользуемый ErrorMessage.
-  **Material UI**: Современный, адаптивный и доступный дизайн.
-  **Loading states**: Индикаторы загрузки для асинхронных операций.

---

## Технологии

- [React](https://react.dev/)
- [React-Router](https://reactrouter.com/)
- [MobX](https://mobx.js.org/ru/)
- [Material UI (MUI)](https://mui.com/)
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)


---

## Быстрый старт

### Необходимое ПО

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/)

### Установка

```bash
git clone https://github.com/MariaGins/spa-appl.git
cd spa-appl
npm install
# или
yarn install
```
### Запуск приложения

```bash
npm run dev
# или
yarn run dev
```
---

## Структура проекта

```

src/
  components/   компоненты для общего пользования 
      AppCard.tsx
      ErrorMessage.tsx
      LoadingSpinner.tsx
    error/      компонента для обработки ошибки
      ErrorBoundary.tsx
    features/   функциональные компоненты
      albums/   компоненты для отображения данных об альбомах
        AlbumsGrid.tsx
        AlbumCard.tsx
      combined/  компоненты для отображения постов и авторов
        PostCard.tsx
        PostsGrid.tsx
        UserCard.tsx
        UsersGrid.tsx  
      layout/    навигатор и пагинатор
        Layout.tsx
        Navigation.tsx
        SimplePagination.tsx
  pages/         виртуальные страницы
    AlbumsPage.tsx
    CounterPage.tsx
    PostsUsersPage.tsx
    ErrorPage.tsx
  state-management/ глобальное состояние, доступное из всех компонентов
    RootStore.ts
    AlbumStore.ts
    PostsUsersStore.ts
    CounterStore.ts
  services/         HTTP клиенты
    ApiClient.ts
    ApiClientServer.ts
    types.ts
App.tsx             корневой апликационный компонент
main.tsx            точка входа в DOM
```

---

## Обработка ошибок

- **ErrorBoundary** — перехватывает JavaScript-ошибки в React-компонентах.
- **ErrorPage** — отдельная страница для отображения критических ошибок.
- **ErrorMessage** — переиспользуемый компонент для вывода локальных ошибок (например, сетевых).

---

## Кастомизация

- Изменяйте API-эндпоинты в `src/services/ApiClientServer.ts` при необходимости.
- Настраивайте пагинацию и количество элементов на странице в соответствующих компонентах.
- Кастомизируйте сообщения об ошибках в компоненте `ErrorMessage` или в логике стора.

---

## Возможные улучшения

- перенос полной функциональности работы с пагинатором внутрь пагинатора, взаимодействующего с глобальным состоянием. 

---

## Автор

- [Maria Gins](https://github.com/MariaGins/SPA)
