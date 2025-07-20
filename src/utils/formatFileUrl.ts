// // ai-chat-page/src/utils/formatFileUrl.ts
export const formatFileUrl = (fileUrl: string): string => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '/';

  if (/^https?:\/\//.test(fileUrl)) return fileUrl;

  const cleanPath = fileUrl.startsWith('/') ? fileUrl.slice(1) : fileUrl;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};


// // В будщем BASE_URL зададим через .env
// const BASE_URL = "http://localhost:8000";

// export const formatFileUrl = (fileUrl: string) => {
//   if (!fileUrl) return "/images/empty.png"; // Покажем пустую заглушку
//   if (fileUrl.startsWith("http")) return fileUrl; // Абсолютный URL
//   if (fileUrl.startsWith("/")) return fileUrl; // Локальный public-файл
//   return `${BASE_URL}${fileUrl}`; // Относительный путь
// };