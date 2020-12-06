export enum Days {
  sunday = 'SUN',
  monday = 'MON',
  tuesday = 'TUE',
  wednesday = 'WED',
  thursday = 'Thu',
  friday = 'fri',
  saturday = 'sat',
}

export type Schedule = {
  day: Days;
  time_start: number;
  hours: number;

  room?: string;
};
