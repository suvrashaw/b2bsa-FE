import "react";

declare module "react" {
  interface VideoHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchPriority?: "auto" | "high" | "low";
  }
}
