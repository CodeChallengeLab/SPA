# SPA Appl

Современное одностраничное приложение (SPA) на **React**, **MobX** и **Material UI**.  
Проект демонстрирует лучшие практики управления состоянием, обработки ошибок и построения адаптивного интерфейса.

---

## Возможности

- 📚 **Albums**: Просмотр альбомов с пагинацией и обработкой ошибок.
- 📝 **Posts & Users**: Одновременная загрузка постов и пользователей с раздельным отображением ошибок.
- 🔢 **Counter**: Простой счётчик на MobX с инкрементом, декрементом и сбросом.
- ⚡ **Global and local error handling**: ErrorBoundary, ErrorPage и переиспользуемый ErrorMessage.
- 🎨 **Material UI**: Современный, адаптивный и доступный дизайн.
- 🔄 **Loading states**: Дружелюбные индикаторы загрузки для асинхронных операций.

---

## Технологии

- [React](https://react.dev/)
- [MobX](https://mobx.js.org/ru/)
- [Material UI (MUI)](https://mui.com/)
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Быстрый старт

### Необходимое ПО

- [Node.js](https://nodejs.org/) (рекомендуется v18+)
- [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/)

### Установка

```bash
git clone https://github.com/your-username/spa-appl.git
cd spa-appl
npm install
# или
yarn install
```

### Установка основных зависимостей вручную (если нужно)

```bash
npm install react react-dom mobx mobx-react-lite @mui/material @emotion/react @emotion/styled axios
# или
yarn add react react-dom mobx mobx-react-lite @mui/material @emotion/react @emotion/styled axios
```

### Запуск приложения

```bash
npm run dev
# или
yarn run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

---

## Структура проекта

```
src/
  components/    
      AppCard.tsx
      ErrorMessage.tsx
      LoadingSpinner.tsx
    error/
      ErrorBoundary.tsx
    features/
      albums/
        AlbumsGrid.tsx
        AlbumCard.tsx
      combined/
        PostCard.tsx
        PostsGrid.tsx
        UserCard.tsx
        UsersGrid.tsx  
      layout/
        Layout.tsx
        Navigation.tsx
        SimplePagination.tsx
  pages/
    AlbumsPage.tsx
    CounterPage.tsx
    PostsUsersPage.tsx
    ErrorPage.tsx
  state-management/
    RootStore.ts
    AlbumStore.ts
    PostsUsersStore.ts
    CounterStore.ts
  services/
    ApiClient.ts
    ApiClientServer.ts
    types.ts
App.tsx
main.tsx
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

## Автор

- [Ваше имя](https://github.com/your-username)
