import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    // Bind mounts from macOS/Windows into Linux containers do not forward inotify
    // events, so the dev server has to poll to see edits.
    watch: { usePolling: true, interval: 300 },
  },
  preview: { host: true, port: 4173 },
});
