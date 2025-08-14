// src/components/features/common/ClientChatPage.tsx
"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { localizationService } from "@/services/localizationService";
import { Layout } from "@features/layout/Layout";
import ChatWindowContainer from "@features/chat/ChatWindowContainer";
import { RootState, AppDispatch } from "@/store/store";
import { showNotification } from "@/reducers/notificationReducer";
import Notification from "@features/common/Notification";

export default function ClientChatPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState<null | { id: string; name: string }>(null);
  useSelector((state: RootState) => state.language.current);

  useEffect(() => {
    fetch("https://ai-chat-frontend-wy6h.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("Frontend ping failed", e)
    );
    fetch("https://ai-chat-backend-3cba.onrender.com/healthz/", { mode: "no-cors" }).catch(e =>
      console.debug("Backend ping failed", e)
    );
  }, []);

  useEffect(() => {
    dispatch(showNotification(localizationService.get("WelcomeMessage"), "info", 3));
  }, [dispatch]);

  return (
    <>
      <Notification />
      <Layout onCategorySelect={(id, name) => setSelected({ id, name })}>
        {selected ? (
          <ChatWindowContainer
            key={selected.id}
            categoryId={selected.id}
            categoryName={selected.name}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-600">
            {localizationService.get("SelectCategory")}
          </div>
        )}
      </Layout>
    </>
  );
}
