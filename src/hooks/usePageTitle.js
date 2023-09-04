import { useEffect } from "react";

export const APP_TITLE = "KreatiVision PhotoArts";
export function usePageTitle(title) {
  return useEffect(() => {
    if (title) document.title = `${APP_TITLE} | ${title}`;
  }, [title]);
}
