"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { localizationService } from "@/services/localizationService";
import { Layout } from "@features/layout/Layout";
import ChatWindowContainer from "@features/chat/ChatWindowContainer";
import { RootState, AppDispatch } from "@/store/store";
import { showNotification } from "@/reducers/notificationReducer";
import Notification from "@features/common/Notification";
import { ImageOutput } from "@ui/chat/ImageOutput";

export default function ClientChatPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState<null | { id: string; name: string }>(null);
  const pathname = usePathname();
  useSelector((state: RootState) => state.language.current);

  useEffect(() => {
    fetch("https://ai-chat-frontend-wy6h.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("Frontend demo-course ping failed", e)
    );
    fetch("https://ai-chat-backend-3cba.onrender.com/healthz/", { mode: "no-cors" }).catch(e =>
      console.debug("Backend demo-course ping failed", e)
    );
  }, []);

  useEffect(() => {
    dispatch(showNotification(localizationService.get("WelcomeMessage"), "info", 3));
  }, [dispatch]);

  const renderDefaultContent = () => {
    if (pathname === "/between") {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <ImageOutput url="/images/sample/between.png" />
          <a
            href="https://stepik.org/a/250427"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Активация звена
          </a>
        </div>
      );
    } else if (pathname === "/epilogue") {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <ImageOutput url="/images/sample/epilogue.png" />
        </div>
      );
    } else {
      return (
        <div className="flex-1 flex items-center justify-center text-gray-600">
          {localizationService.get("SelectCategory")}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      <Notification />
      <Layout onCategorySelect={(id, name) => setSelected({ id, name })}>
        {selected ? (
          <ChatWindowContainer
            key={selected.id}
            categoryId={selected.id}
            categoryName={selected.name}
          />
        ) : (
          renderDefaultContent()
        )}
      </Layout>
    </div>
  );
}
