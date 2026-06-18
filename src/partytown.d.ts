declare module "@qwik.dev/partytown/react" {
  import type { ComponentType } from "react";

  export interface PartytownProps {
    debug?: boolean;
    forward?: string[];
    lib?: string;
  }

  export const Partytown: ComponentType<PartytownProps>;
}

declare module "@qwik.dev/partytown/integration" {
  export interface PartytownConfig {
    debug?: boolean;
    forward?: string[];
    lib?: string;
  }

  export function partytownSnippet(config?: PartytownConfig): string;
}
