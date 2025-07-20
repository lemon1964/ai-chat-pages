// ai-chat-next/src/components/features/layout/MobileHeader.tsx
"use client";

import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { languageActions } from "@/reducers/languageReducer";
import { modelActions } from "@/reducers/modelReducer";
import { localizationService } from "@/services/localizationService";
import { ModelType } from "@/data/ModelOptions";
import { MobileHeaderView } from "./Views/MobileHeaderView";

export interface MobileHeaderProps {
  modelType: ModelType;
  selectedModel: string;
  onMenuToggle: () => void;
  handleGoToRender: () => void
}

export const MobileHeader: FC<MobileHeaderProps> = ({
  modelType,
  selectedModel,
  onMenuToggle,
  handleGoToRender
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLanguageChange = (lang: "ru" | "en") => {
    dispatch(languageActions.setLanguage(lang));
    localizationService.syncLanguageSettings();
  };

  return (
    <MobileHeaderView
      modelType={modelType}
      selectedModel={selectedModel}
      onMenuToggle={onMenuToggle}
      onChangeLanguage={handleLanguageChange}
      onChangeModelType={type => dispatch(modelActions.setModelType(type))}
      onChangeModel={id => dispatch(modelActions.setModel(id))}
      handleGoToRender={handleGoToRender}
    />
  );
};