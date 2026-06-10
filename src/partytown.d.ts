declare module "@builder.io/partytown/react" {
  import type { ComponentType } from "react";

  export interface PartytownProps {
    debug?: boolean;
    forward?: string[];
    lib?: string;
  }

  export const Partytown: ComponentType<PartytownProps>;
}
