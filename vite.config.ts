// Self-contained Vite config. Plugin order matters — do NOT reorder:
//   1. TanStack devtools (dev mode only, must come first)
//   2. tailwindcss, tsconfig path resolution
//   3. tanstackStart (router/SSR) — import protection keeps server-only code
//      out of the client bundle; `server.entry: "server"` redirects the bundled
//      server entry to src/server.ts (our SSR error wrapper). nitro/vite
//      builds from this.
//   4. nitro (build only) — `defaultPreset: "cloudflare-module"` targets
//      Cloudflare unless NITRO_PRESET / platform auto-detection says otherwise
//   5. @vitejs/plugin-react
import { loadEnv, type ConfigEnv, type PluginOption, type UserConfig } from "vite";

export default async function config(env: ConfigEnv): Promise<UserConfig> {
  const { command, mode } = env;
  const isDevBuild = command === "build" && mode === "development";

  const plugins: PluginOption[] = [];

  if (mode === "development") {
    const { devtools } = await import("@tanstack/devtools-vite");
    plugins.push(
      devtools({
        logging: false,
        eventBusConfig: { enabled: false },
        enhancedLogs: { enabled: false },
        consolePiping: { enabled: false },
        removeDevtoolsOnBuild: false,
        injectSource: { enabled: true },
      }),
    );
  }

  const tailwindcss = (await import("@tailwindcss/vite")).default;
  plugins.push(tailwindcss());

  const tsConfigPaths = (await import("vite-tsconfig-paths")).default;
  plugins.push(tsConfigPaths({ projects: ["./tsconfig.json"] }));

  const { tanstackStart } = await import("@tanstack/react-start/plugin/vite");
  plugins.push(
    ...tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "server" },
    }),
  );

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(...nitro({ defaultPreset: "cloudflare-module" }));
  }

  const viteReact = (await import("@vitejs/plugin-react")).default;
  plugins.push(viteReact());

  const define: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadEnv(mode, process.cwd(), "VITE_"))) {
    define[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const config: UserConfig = {
    define,
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: {
      host: "::",
      port: 8080,
      watch: {
        awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 100 },
      },
    },
    plugins,
  };

  if (isDevBuild) {
    config.environments = {
      client: { define: { "process.env.NODE_ENV": JSON.stringify("development") } },
    };
  }

  return config;
}
