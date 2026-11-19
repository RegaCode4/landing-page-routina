import calendar from "../../design/assets/web/calendar.webp?url";
import home from "../../design/assets/web/home.webp?url";
import routines from "../../design/assets/web/routines.webp?url";
import statistics from "../../design/assets/web/statistics.webp?url";
import tasks from "../../design/assets/web/tasks.webp?url";
export { default as logo } from "../../design/assets/routina-icon-ember.svg?url";
export const screens = { home, calendar, tasks, routines, statistics };
export const screenOrder = ["home", "calendar", "tasks", "routines", "statistics"] as const;
export type Screen = keyof typeof screens;
