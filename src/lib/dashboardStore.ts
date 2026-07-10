export type DashboardEventType = "chat" | "document" | "search";

export interface DashboardEvent {
  id: string;
  userId: string;
  type: DashboardEventType;
  title: string;
  timestamp: string;
  details?: string;
}

const DASHBOARD_EVENTS_KEY = "scrutinyx-dashboard-events";

const parseStoredEvents = (value: string | null): DashboardEvent[] => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value) as DashboardEvent[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Unable to parse dashboard events", error);
    return [];
  }
};

export const getDashboardEvents = (userId?: string): DashboardEvent[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedEvents = window.localStorage.getItem(DASHBOARD_EVENTS_KEY);
  const events = parseStoredEvents(storedEvents);

  if (!userId) return events;

  return events.filter((event) => event.userId === userId);
};

const saveDashboardEvents = (events: DashboardEvent[]) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(DASHBOARD_EVENTS_KEY, JSON.stringify(events));
};

export const addDashboardEvent = (event: Omit<DashboardEvent, "id" | "timestamp">): DashboardEvent | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const events = getDashboardEvents();
  const newEvent: DashboardEvent = {
    id: window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    timestamp: new Date().toISOString(),
    ...event,
  };

  const updated = [newEvent, ...events];
  saveDashboardEvents(updated);

  return newEvent;
};

export const clearDashboardEvents = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(DASHBOARD_EVENTS_KEY);
};
