type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type ErrorEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ErrorReportOptions,
  ) => void;
};

declare global {
  interface Window {
    __errorEvents?: ErrorEvents;
    __reportRuntimeError?: (payload: {
      message: string;
      stack?: string;
      filename?: string;
    }) => void;
  }
}

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__errorEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  // Prod React does not rethrow boundary-caught errors to window.onerror, so
  // global error handlers never see them. Forward to the optional global
  // reporting hook when an external runtime installs one; otherwise no-op.
  // Loaders and server fns commonly throw a raw Response; String(it) is the
  // opaque "[object Response]", so pull out the status and URL instead.
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;
  window.__reportRuntimeError?.({
    message,
    ...(stack !== undefined && { stack }),
    filename: window.location.pathname,
  });
}
