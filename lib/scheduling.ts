export const PACKAGE_DURATION_MIN: Record<string, number> = {
  silver: 90,
  gold: 150,
  platinum: 210,
  advice: 150,
};

export const PACKAGE_DISPLAY_NAME: Record<string, string> = {
  silver: "Silver",
  gold: "Gold",
  platinum: "Platinum",
  advice: "Not sure / advice needed",
};

export const BUSINESS_OPEN = "09:00";
export const BUSINESS_CLOSE = "19:00";

// Three fixed appointment windows per day: 9-1, 1-4, 4-7.
export const APPOINTMENT_SLOTS = ["09:00", "13:00", "16:00"];

const TIMEZONE = "Europe/London";

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function toHHMM(minutes: number): string {
  const h = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

export function durationForPackage(packageSlug: string): number | null {
  return PACKAGE_DURATION_MIN[packageSlug] ?? null;
}

// The fixed daily appointment windows (9-1, 1-4, 4-7) that finish by BUSINESS_CLOSE
// once the job's actual duration is added.
export function generateCandidateSlots(durationMin: number): string[] {
  const close = toMinutes(BUSINESS_CLOSE);
  return APPOINTMENT_SLOTS.filter((start) => toMinutes(start) + durationMin <= close);
}

export function addMinutes(hhmm: string, minutes: number): string {
  return toHHMM(toMinutes(hhmm) + minutes);
}

// Current date/time in the business's local timezone, DST-safe.
export function nowInLondon(): { date: string; time: string } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    time: `${get("hour")}:${get("minute")}`,
  };
}

// Mon-Fri only, and not a date already in the past (Europe/London).
export function isBookableDate(dateStr: string): boolean {
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return false;
  const day = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0 Sun ... 6 Sat
  if (day === 0 || day === 6) return false;

  const { date: today } = nowInLondon();
  return dateStr >= today;
}

// Filters out candidate start times that have already passed, when the
// requested date is today.
export function dropPastSlots(dateStr: string, slots: string[]): string[] {
  const { date: today, time: nowTime } = nowInLondon();
  if (dateStr !== today) return slots;
  return slots.filter((slot) => slot > nowTime);
}
