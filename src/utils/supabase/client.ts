import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch(url, options) {
          return fetch(url, {
            cache: "no-cache",
            ...options,
          });
        },
      },
    }
  );
}
