"use client";

import { useEffect, useState } from "react";

type Notice = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
  timeout: number;
};

export default function Notification() {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as {
        message: string;
        type?: "success" | "error" | "info";
        duration?: number;
      };

      const id = Date.now() + Math.floor(Math.random() * 1000);
      const notice: Notice = {
        id,
        message: detail.message,
        type: detail.type || "info",
        timeout: detail.duration || 4000,
      };

      setNotices((s) => [...s, notice]);

      // auto remove
      setTimeout(() => {
        setNotices((s) => s.filter((n) => n.id !== id));
      }, notice.timeout);
    };

    window.addEventListener("notify", handler as EventListener);
    return () => window.removeEventListener("notify", handler as EventListener);
  }, []);

  const remove = (id: number) => setNotices((s) => s.filter((n) => n.id !== id));

  if (notices.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-3">
      {notices.map((n) => (
        <div
          key={n.id}
          className={`max-w-sm w-full px-4 py-2 rounded-lg shadow-md text-white flex items-center justify-between gap-4 ${{
            success: "bg-green-600",
            error: "bg-red-600",
            info: "bg-sky-600",
          }[n.type]}`}>
          <div className="flex-1 text-sm leading-normal">{n.message}</div>
          <button
            onClick={() => remove(n.id)}
            aria-label="close"
            className="ml-3 opacity-90 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
