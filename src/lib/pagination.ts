export const DEFAULT_PAGE_SIZE = 6;

export const getPaginationPageCount = (itemCount: number, pageSize = DEFAULT_PAGE_SIZE) => {
  if (itemCount <= 0) {
    return 0;
  }

  return Math.max(2, Math.ceil(itemCount / pageSize));
};

export const clampPaginationPage = (page: number, pageCount: number) => {
  if (pageCount <= 0) {
    return 1;
  }

  return Math.min(Math.max(page, 1), pageCount);
};

export const getPaginationItems = <T>(
  items: readonly T[],
  page: number,
  pageSize = DEFAULT_PAGE_SIZE
) => {
  const startIndex = (page - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

export const parsePaginationPage = (value: null | string) => {
  const parsedPage = Number(value);
  return Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
};
