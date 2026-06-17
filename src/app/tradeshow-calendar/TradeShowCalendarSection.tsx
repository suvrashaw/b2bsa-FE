"use client";

import { Grid2X2, List, RotateCcw, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, type ReactNode, useCallback, useEffect, useMemo, useState } from "react";

import { formatLocation, TradeShowCard, TradeShowListItem } from "@/components/items/TradeShowCard";
import { EventJsonLd } from "@/components/seo/EventJsonLd";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  type CalendarTradeShow,
  TRADE_SHOW_CALENDAR_EVENTS,
  TRADE_SHOW_CALENDAR_HERO,
} from "@/content/tradeshow-calendar";
import { cn, siteUrl } from "@/lib";
import { applyPagination, parsePaginationPage } from "@/lib/pagination";

const VIEW_MODES = [
  { icon: Grid2X2, label: "Cards", value: "cards" },
  { icon: List, label: "List", value: "list" },
] as const;

const SORT_OPTIONS = [
  { label: "Start Date", value: "startDate" },
  { label: "Name", value: "name" },
  { label: "Location", value: "location" },
  { label: "Attendees", value: "attendees" },
  { label: "Exhibitors", value: "exhibitors" },
] as const;

const DATE_RANGE_OPTIONS = [
  { label: "All Dates", value: "all" },
  { label: "Next 3 Months", value: "next-3-months" },
  { label: "Next 6 Months", value: "next-6-months" },
  { label: "This Year", value: "this-year" },
  { label: "Next Year", value: "next-year" },
] as const;

const NUMBER_OPERATOR_OPTIONS = [
  { label: ">=", value: "gte" },
  { label: "<=", value: "lte" },
] as const;

type DateRange = (typeof DATE_RANGE_OPTIONS)[number]["value"];
type NumberOperator = (typeof NUMBER_OPERATOR_OPTIONS)[number]["value"];
type SortDirection = "asc" | "desc";
type SortField = (typeof SORT_OPTIONS)[number]["value"];
type ViewMode = (typeof VIEW_MODES)[number]["value"];

const CONTROL_PANEL_CLASS =
  "rounded-lg border border-gray-200 bg-white p-4 shadow-sm shadow-gray-200/40";

const FORM_CONTROL_CLASS =
  "w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-brand-charcoal outline-none transition focus:border-brand-blue/40 focus:ring-4 focus:ring-brand-blue/10";

const toDate = (value: string) => new Date(`${value}T00:00:00.000Z`);

const addMonths = (date: Date, months: number) => {
  const nextDate = new Date(date);
  nextDate.setUTCMonth(nextDate.getUTCMonth() + months);
  return nextDate;
};

const sortItems = <T,>(items: T[], compare: (first: T, second: T) => number) => {
  const sortedItems = [...items];
  sortedItems.sort(compare);
  return sortedItems;
};

const matchesNumberFilter = (
  actualValue: number,
  operator: NumberOperator,
  requestedValue: string
) => {
  if (!requestedValue.trim()) return true;

  const parsedValue = Number(requestedValue);
  if (Number.isNaN(parsedValue)) return true;

  return operator === "gte" ? actualValue >= parsedValue : actualValue <= parsedValue;
};

const matchesDateRange = (show: CalendarTradeShow, range: DateRange, today: Date) => {
  if (range === "all") return true;

  const startDate = toDate(show.startDate);
  const endDate = toDate(show.endDate);

  if (range === "next-3-months") {
    return endDate >= today && startDate <= addMonths(today, 3);
  }

  if (range === "next-6-months") {
    return endDate >= today && startDate <= addMonths(today, 6);
  }

  const currentYear = today.getUTCFullYear();
  const startYear = startDate.getUTCFullYear();
  const endYear = endDate.getUTCFullYear();

  if (range === "this-year") {
    return startYear === currentYear || endYear === currentYear;
  }

  return startYear === currentYear + 1 || endYear === currentYear + 1;
};

const getSortText = (sortDirection: SortDirection) =>
  sortDirection === "asc" ? "Ascending" : "Descending";

const ViewModeButton = ({
  activeMode,
  mode,
  onChange,
}: {
  activeMode: ViewMode;
  mode: (typeof VIEW_MODES)[number];
  onChange: (mode: ViewMode) => void;
}) => {
  const Icon = mode.icon;
  const handleClick = useCallback(() => {
    onChange(mode.value);
  }, [mode.value, onChange]);

  return (
    <button
      className={cn(
        "flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-semibold transition",
        activeMode === mode.value
          ? "border-brand-charcoal bg-brand-charcoal text-white"
          : "border-gray-200 bg-white text-brand-charcoal hover:border-brand-blue hover:text-brand-blue"
      )}
      onClick={handleClick}
      type="button"
    >
      <Icon className="h-4 w-4" />
      {mode.label}
    </button>
  );
};

const FilterPanel = ({ children, title }: { children: ReactNode; title: string }) => (
  <section className={CONTROL_PANEL_CLASS}>
    <h2 className="mb-3 text-sm font-bold text-brand-charcoal">{title}</h2>
    {children}
  </section>
);

const LocationCheckbox = ({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <label className="flex cursor-pointer items-start gap-2 text-sm leading-relaxed font-medium text-brand-charcoal/80">
    <input
      checked={checked}
      className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
      onChange={onChange}
      type="checkbox"
      value={label}
    />
    <span>{label}</span>
  </label>
);

const DirectionButton = ({
  direction,
  onChange,
  selectedDirection,
}: {
  direction: SortDirection;
  onChange: (direction: SortDirection) => void;
  selectedDirection: SortDirection;
}) => {
  const handleClick = useCallback(() => {
    onChange(direction);
  }, [direction, onChange]);

  return (
    <button
      className={cn(
        "min-h-11 flex-1 rounded-lg border px-3 text-sm font-semibold transition",
        selectedDirection === direction
          ? "border-brand-charcoal bg-brand-charcoal text-white"
          : "border-gray-200 bg-white text-brand-charcoal hover:border-brand-blue hover:text-brand-blue"
      )}
      onClick={handleClick}
      type="button"
    >
      {getSortText(direction)}
    </button>
  );
};

const NumberFilter = ({
  onOperatorChange,
  onValueChange,
  operator,
  placeholder,
  value,
}: {
  onOperatorChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  operator: NumberOperator;
  placeholder: string;
  value: string;
}) => (
  <div className="grid grid-cols-[0.85fr_1.15fr] gap-3">
    <select className={FORM_CONTROL_CLASS} onChange={onOperatorChange} value={operator}>
      {NUMBER_OPERATOR_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <input
      className={FORM_CONTROL_CLASS}
      inputMode="numeric"
      min="0"
      onChange={onValueChange}
      placeholder={placeholder}
      type="number"
      value={value}
    />
  </div>
);

export const TradeShowCalendarSection = () => {
  const events = TRADE_SHOW_CALENDAR_EVENTS;
  const searchPlaceholder = TRADE_SHOW_CALENDAR_HERO.searchPlaceholder;

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [attendeeOperator, setAttendeeOperator] = useState<NumberOperator>("gte");
  const [attendeeValue, setAttendeeValue] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>("all");
  const [exhibitorOperator, setExhibitorOperator] = useState<NumberOperator>("gte");
  const [exhibitorValue, setExhibitorValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [sortField, setSortField] = useState<SortField>("startDate");
  const [viewMode, setViewMode] = useState<ViewMode>("cards");
  const requestedPage = parsePaginationPage(searchParams.get("page"));

  const updatePage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());

      if (page <= 1) {
        params.delete("page");
      } else {
        params.set("page", String(page));
      }

      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const today = useMemo(() => {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  }, []);

  const locationOptions = useMemo(
    () =>
      sortItems([...new Set(events.map((event) => formatLocation(event)))], (first, second) =>
        first.localeCompare(second)
      ),
    [events]
  );

  const industryOptions = useMemo(
    () => [
      "All Industries",
      ...sortItems([...new Set(events.map((event) => event.industry))], (first, second) =>
        first.localeCompare(second)
      ),
    ],
    [events]
  );

  const handleAttendeeOperatorChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setAttendeeOperator(event.currentTarget.value as NumberOperator);
      updatePage(1);
    },
    [updatePage]
  );

  const handleAttendeeValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAttendeeValue(event.currentTarget.value);
      updatePage(1);
    },
    [updatePage]
  );

  const handleClearFilters = useCallback(() => {
    setAttendeeOperator("gte");
    setAttendeeValue("");
    setDateRange("all");
    setExhibitorOperator("gte");
    setExhibitorValue("");
    setSearchQuery("");
    setSelectedIndustry("All Industries");
    setSelectedLocations([]);
    setSortDirection("asc");
    setSortField("startDate");
    setViewMode("cards");
    updatePage(1);
  }, [updatePage]);

  const handleDateRangeChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setDateRange(event.currentTarget.value as DateRange);
      updatePage(1);
    },
    [updatePage]
  );

  const handleExhibitorOperatorChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setExhibitorOperator(event.currentTarget.value as NumberOperator);
      updatePage(1);
    },
    [updatePage]
  );

  const handleExhibitorValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setExhibitorValue(event.currentTarget.value);
      updatePage(1);
    },
    [updatePage]
  );

  const handleIndustryChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedIndustry(event.currentTarget.value);
      updatePage(1);
    },
    [updatePage]
  );

  const handleLocationChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.currentTarget;

      setSelectedLocations((currentLocations) =>
        checked
          ? [...currentLocations, value]
          : currentLocations.filter((location) => location !== value)
      );
      updatePage(1);
    },
    [updatePage]
  );

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.currentTarget.value);
      updatePage(1);
    },
    [updatePage]
  );

  const handleSortFieldChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSortField(event.currentTarget.value as SortField);
      updatePage(1);
    },
    [updatePage]
  );

  const handleSortDirectionChange = useCallback(
    (direction: SortDirection) => {
      setSortDirection(direction);
      updatePage(1);
    },
    [updatePage]
  );

  const filteredEvents = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const matchingEvents = events.filter((show) => {
      const location = formatLocation(show);
      const searchableText = [
        show.name,
        show.venue,
        show.city,
        show.region,
        show.country,
        show.industry,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery);
      const matchesIndustry =
        selectedIndustry === "All Industries" || show.industry === selectedIndustry;
      const matchesLocation =
        selectedLocations.length === 0 || selectedLocations.includes(location);

      return (
        matchesSearch &&
        matchesIndustry &&
        matchesLocation &&
        matchesNumberFilter(show.attendeeCount, attendeeOperator, attendeeValue) &&
        matchesNumberFilter(show.exhibitorCount, exhibitorOperator, exhibitorValue) &&
        matchesDateRange(show, dateRange, today)
      );
    });

    return sortItems(matchingEvents, (first, second) => {
      const direction = sortDirection === "asc" ? 1 : -1;

      if (sortField === "name") {
        return first.name.localeCompare(second.name) * direction;
      }

      if (sortField === "location") {
        return formatLocation(first).localeCompare(formatLocation(second)) * direction;
      }

      if (sortField === "attendees") {
        return (first.attendeeCount - second.attendeeCount) * direction;
      }

      if (sortField === "exhibitors") {
        return (first.exhibitorCount - second.exhibitorCount) * direction;
      }

      return (toDate(first.startDate).getTime() - toDate(second.startDate).getTime()) * direction;
    });
  }, [
    attendeeOperator,
    attendeeValue,
    dateRange,
    events,
    exhibitorOperator,
    exhibitorValue,
    searchQuery,
    selectedIndustry,
    selectedLocations,
    sortDirection,
    sortField,
    today,
  ]);

  const {
    currentPage,
    paginatedItems: paginatedEvents,
    totalPages,
  } = applyPagination(filteredEvents, requestedPage);
  const hasEmptyPage = filteredEvents.length > 0 && paginatedEvents.length === 0;
  let resultsContent: ReactNode;

  useEffect(() => {
    if (requestedPage !== currentPage) {
      updatePage(currentPage);
    }
  }, [currentPage, requestedPage, updatePage]);

  if (filteredEvents.length === 0) {
    resultsContent = (
      <div className="rounded-lg border border-gray-200 bg-white p-10 text-center shadow-sm">
        <SectionHeader as="h2" className="text-brand-charcoal">
          No trade shows found
        </SectionHeader>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-charcoal/65">
          Adjust the search, filters, or date range to broaden the calendar results.
        </p>
        <Button className="mt-6 gap-2" onClick={handleClearFilters} variant="primary">
          <RotateCcw className="h-4 w-4" />
          Reset Calendar
        </Button>
      </div>
    );
  } else if (hasEmptyPage) {
    resultsContent = (
      <div className="rounded-lg border border-gray-200 bg-white p-10 text-center shadow-sm">
        <SectionHeader as="h2" className="text-brand-charcoal">
          No more trade shows on this page.
        </SectionHeader>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-charcoal/65">
          Use the pagination controls to return to the available calendar results.
        </p>
      </div>
    );
  } else if (viewMode === "cards") {
    resultsContent = (
      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {paginatedEvents.map((show) => (
          <TradeShowCard key={show.id} show={show} />
        ))}
      </div>
    );
  } else {
    resultsContent = (
      <div className="space-y-4">
        {paginatedEvents.map((show) => (
          <TradeShowListItem key={show.id} show={show} />
        ))}
      </div>
    );
  }

  return (
    <>
      <section className="bg-brand-gray pt-16 pb-8">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="relative mx-auto mt-10 max-w-3xl">
            <Search className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-brand-charcoal/40" />
            <input
              className="w-full rounded-lg border border-gray-200 bg-white py-4 pr-5 pl-14 text-base font-medium text-brand-charcoal shadow-sm transition outline-none placeholder:text-brand-charcoal/40 focus:border-brand-blue/40 focus:ring-4 focus:ring-brand-blue/10"
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
              type="search"
              value={searchQuery}
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-12 lg:py-16">
        <div className="container mx-auto grid gap-8 px-8 lg:grid-cols-[18rem_1fr] lg:items-start">
          <aside className="space-y-5 lg:sticky lg:top-28">
            <FilterPanel title="View Mode">
              <div className="flex gap-3">
                {VIEW_MODES.map((mode) => (
                  <ViewModeButton
                    activeMode={viewMode}
                    key={mode.value}
                    mode={mode}
                    onChange={setViewMode}
                  />
                ))}
              </div>
            </FilterPanel>

            <FilterPanel title="Sort By">
              <div className="space-y-3">
                <select
                  className={FORM_CONTROL_CLASS}
                  onChange={handleSortFieldChange}
                  value={sortField}
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="flex gap-3">
                  <DirectionButton
                    direction="asc"
                    onChange={handleSortDirectionChange}
                    selectedDirection={sortDirection}
                  />
                  <DirectionButton
                    direction="desc"
                    onChange={handleSortDirectionChange}
                    selectedDirection={sortDirection}
                  />
                </div>
              </div>
            </FilterPanel>

            <FilterPanel title="Location">
              <div className="max-h-52 space-y-3 overflow-y-auto pr-2">
                {locationOptions.map((location) => (
                  <LocationCheckbox
                    checked={selectedLocations.includes(location)}
                    key={location}
                    label={location}
                    onChange={handleLocationChange}
                  />
                ))}
              </div>
            </FilterPanel>

            <FilterPanel title="Industry">
              <select
                className={FORM_CONTROL_CLASS}
                onChange={handleIndustryChange}
                value={selectedIndustry}
              >
                {industryOptions.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </FilterPanel>

            <FilterPanel title="Number of Attendees">
              <NumberFilter
                onOperatorChange={handleAttendeeOperatorChange}
                onValueChange={handleAttendeeValueChange}
                operator={attendeeOperator}
                placeholder="e.g. 10000"
                value={attendeeValue}
              />
            </FilterPanel>

            <FilterPanel title="Number of Exhibitors">
              <NumberFilter
                onOperatorChange={handleExhibitorOperatorChange}
                onValueChange={handleExhibitorValueChange}
                operator={exhibitorOperator}
                placeholder="e.g. 500"
                value={exhibitorValue}
              />
            </FilterPanel>

            <FilterPanel title="Date Range">
              <select
                className={FORM_CONTROL_CLASS}
                onChange={handleDateRangeChange}
                value={dateRange}
              >
                {DATE_RANGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FilterPanel>

            <Button className="w-full gap-2" onClick={handleClearFilters} variant="secondary">
              <RotateCcw className="h-4 w-4" />
              Clear Filters
            </Button>
          </aside>

          <div>
            {resultsContent}

            <Pagination
              className="mt-10"
              currentPage={currentPage}
              onPageChange={updatePage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </section>

      {paginatedEvents.map((show) => {
        return (
          <EventJsonLd
            description={show.summary || `${show.name} Trade Show`}
            endDate={show.endDate}
            key={show.id}
            locationCity={show.city || ""}
            locationCountry={show.country || "USA"}
            locationName={show.venue || show.city || ""}
            name={show.name}
            startDate={show.startDate}
            url={show.sourceUrl || `${siteUrl}/tradeshow-calendar`}
          />
        );
      })}
    </>
  );
};
