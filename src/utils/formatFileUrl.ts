// ai-chat-page/src/utils/formatFileUrl.ts
export const formatFileUrl = (fileUrl: string): string => 
  `/${process.env.NODE_ENV === 'production' ? 'ai-chat-pages/' : ''}${fileUrl.replace(/^\//, '')}`;