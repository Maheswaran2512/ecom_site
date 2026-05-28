export type NotifyType = "success" | "error" | "info";

export function notify(message: string, type: NotifyType = "success", duration = 4000) {
  if (typeof window === "undefined") return;

  const ev = new CustomEvent("notify", {
    detail: { message, type, duration },
  });
  window.dispatchEvent(ev);
}
