// src/components/features/common/ClientChatPage.tsx
"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { localizationService } from "@/services/localizationService";

import { Layout } from "@features/layout/Layout";
import ChatWindowContainer from "@/components/features/chat/ChatWindowContainer";
import { RootState } from "@/store/store";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { showNotification } from "@/reducers/notificationReducer";
import Notification from "@features/common/Notification";

export default function ClientChatPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState<null | { id: string; name: string }>(null);
  const currentLanguage = useSelector((state: RootState) => state.language.current);

  useEffect(() => {
    fetch("https://ai-stepik-next.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("Frontend ping failed", e)
    );
    fetch("https://ai-stepik-django.onrender.com/healthz/", { mode: "no-cors" }).catch(e =>
      console.debug("Backend ping failed", e)
    );
  }, []);

  useEffect(() => {
    localizationService.syncLanguageSettings();
  }, [currentLanguage]);

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
            Выберите категорию
          </div>
        )}
      </Layout>
    </>
  );
}
