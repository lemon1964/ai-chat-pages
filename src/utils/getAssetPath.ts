// ai-chat-page/src/utils/getAssetPath.ts
export const getAssetPath = (relativePath: string): string => {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || '/';
    return base.endsWith('/') ? `${base}${relativePath}` : `${base}/${relativePath}`;
  };