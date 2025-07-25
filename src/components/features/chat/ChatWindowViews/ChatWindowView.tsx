// ai-chat-next/src/components/features/chat/ChatWindowViews/ChatWindowView.tsx
"use client";

import { FC, RefObject } from "react";
import { ImageOutput } from "@/components/ui/chat/ImageOutput";
import ModalAudio from "@ui/common/ModalAudio";
import SoundVolume from "@features/common/SoundVolume";
import { MarkdownRenderer } from "@features/common/MarkdownRenderer";

type Props = {
  categoryName: string;
  messages: { id: string; prompt: string; answers: { id: string; content: string }[] }[];
  bottomRef: RefObject<HTMLDivElement | null>;
  audioModalOpen: boolean;
  setAudioModalOpen: (value: boolean) => void;
};

export const ChatWindowView: FC<Props> = ({
  categoryName,
  messages,
  bottomRef,
  audioModalOpen,
  setAudioModalOpen,
}) => (
  <div className="flex flex-col flex-1 min-h-0">
    <div className="p-4 border-b flex items-center justify-between">
      <h2 className="text-2xl font-bold truncate max-w-[70%]">{categoryName}</h2>
      <button
        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-blue-600 whitespace-nowrap"
        onClick={() => setAudioModalOpen(true)}
      >
        🔊 Audio
      </button>
    </div>

    {audioModalOpen && (
      <ModalAudio title="Audio" onClose={() => setAudioModalOpen(false)}>
        <SoundVolume />
      </ModalAudio>
    )}
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map(msg => (
        <div key={msg.id} className="space-y-1">
          <div className="ml-4 text-gray-400">{msg.prompt}</div>
          {msg.answers.map(ans =>
            /\.(png|jpe?g|gif)$/i.test(ans.content) ? (
              <ImageOutput key={ans.id} url={ans.content} />
            ) : (
              <div
                key={ans.id}
                className="mt-2 ml-8 bg-gray-800 text-white border border-gray-700 rounded-md p-3"
              >
                <MarkdownRenderer content={ans.content} />
              </div>
            )
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  </div>
);
