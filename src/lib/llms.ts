import { SHARED_BLOG_POSTS } from "@/content/blogs";
import { marketingPages } from "@/content/marketing-pages";

export const getLLMSContentLists = () => {
  const serviceHubs = marketingPages.filter((p) => p.pageType === "serviceHub");
  const serviceDetails = marketingPages.filter((p) => p.pageType === "serviceDetail");
  const companyPages = marketingPages.filter(
    (p) => p.pageType === "company" || p.pageType === "contact"
  );
  const publishedPosts = SHARED_BLOG_POSTS.filter((p) => p.body);

  return { companyPages, publishedPosts, serviceDetails, serviceHubs };
};
