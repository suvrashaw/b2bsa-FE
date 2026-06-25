import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Component Library | B2B Sales Arrow",
};

const DemoLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export default DemoLayout;
