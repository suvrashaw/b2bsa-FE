import { Suspense } from "react";

import { CaseStudiesClientPage } from "./CaseStudiesClientPage";

const Page = () => (
  <Suspense>
    <CaseStudiesClientPage />
  </Suspense>
);

export default Page;
