# AI Chat — GitHub Pages Demo

Учебный фронтенд-проект AI-чата, развернутый на GitHub Pages.

## 🔗 Демо

https://lemon1964.github.io/ai-chat-pages/

## 🧱 Стэк

- [Next.js](https://nextjs.org/) (Static Export)  
- [GitHub Pages](https://pages.github.com/) (Хостинг)  
- [gh-pages-action](https://github.com/peaceiris/actions-gh-pages) (Деплой)
- GitHub Actions (автодеплой)
- Статичные ресурсы (музыка, изображения)

## 🛠 Локальный запуск

```bash
git clone https://github.com/lemon1964/ai-chat-pages.git
cd ai-chat-pages
npm install
npm run dev
```

## 🌍 Продакшен

- Деплой на ветку `gh-pages` через GitHub Actions
- Путь к ресурсам строится на основе `NEXT_PUBLIC_BASE_PATH`

## 🔄 Автодеплой

Каждый `push` в `main` автоматически:

- запускает сборку (`NEXT_PUBLIC_BASE_PATH=/ai-chat-pages/`)
- экспортирует статику в `out/`
- публикует её в ветку `gh-pages`

## 📁 Статичные ресурсы

Музыка и изображения лежат в папках `public/music/` и `public/images/`.  
Для корректного отображения на GitHub Pages используется `formatFileUrl()`:

## ⚠️ Ограничения
1. Нет доступа к API (чисто статичный фронтенд)
2. Лимит GitHub Pages (1GB трафика/мес)
3. Только публичные репозитории (для приватных нужен GitHub Pro)

## 📄 Лицензия

MIT — свободно используйте и дорабатывайте проект в рамках курса.