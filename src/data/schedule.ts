export interface ClassSession {
  name: string;
  time: string;
  teacher?: string;
}

export interface StudioSchedule {
  studio: string;
  classes: ClassSession[];
}

export interface DaySchedule {
  day: string;
  studios: StudioSchedule[];
  note?: string;
}

export const weeklySchedule: DaySchedule[] = [
  {
    day: "Monday",
    studios: [
      {
        studio: "Studio 1",
        classes: [
          { name: "Sr. Company", time: "4:00–5:30", teacher: "Miss Dana" },
          { name: "Jazz Adv.", time: "5:30–6:30", teacher: "Miss Dana" },
          { name: "Ballet Adv.", time: "6:30–8:00", teacher: "Miss Kathy" },
        ],
      },
      {
        studio: "Studio 2",
        classes: [
          { name: "Pre/Beg Pointe", time: "4:00–5:00", teacher: "Miss Kathy" },
          { name: "Lyrical 5", time: "5:00–6:00", teacher: "Miss Jess & Jenn" },
          { name: "Hip Hop 5", time: "6:00–7:00", teacher: "Miss Jess & Jenn" },
        ],
      },
      {
        studio: "Studio 3",
        classes: [
          { name: "Ballet 2", time: "4:15–5:00", teacher: "Miss Colleen" },
          { name: "Jazz/Lyrical 2", time: "5:00–5:45", teacher: "Miss Colleen" },
          { name: "Tap 2", time: "5:45–6:30", teacher: "Miss Colleen" },
          { name: "Unique Kids", time: "6:30–7:30", teacher: "Miss Laraine" },
        ],
      },
      {
        studio: "Studio 4",
        classes: [
          { name: "Jr. Company", time: "4:00–5:00", teacher: "Miss Jess & Jenn" },
          { name: "Ballet 7", time: "5:00–6:30", teacher: "Miss Kathy" },
          { name: "Jazz 7", time: "6:30–7:30", teacher: "Miss Dana" },
          { name: "Lyrical 7", time: "7:30–8:30", teacher: "Miss Jess & Jenn" },
        ],
      },
    ],
  },
  {
    day: "Tuesday",
    studios: [
      {
        studio: "Studio 1",
        classes: [
          { name: "Ballet 3", time: "4:00–5:00", teacher: "Miss Kathy" },
          { name: "Ballet Adv.", time: "5:00–6:30", teacher: "Miss Olivia" },
          { name: "Ballet 7", time: "6:30–8:00", teacher: "Miss Olivia" },
          { name: "Pointe 7", time: "8:00–8:45", teacher: "Miss Kathy" },
        ],
      },
      {
        studio: "Studio 2",
        classes: [
          { name: "Ballet/Tap Combo Level 1", time: "4:00–5:00", teacher: "Miss Kim" },
          { name: "Ballet 5", time: "5:00–6:30", teacher: "Miss Kathy" },
          { name: "Ballet Int.", time: "6:30–8:00", teacher: "Miss Kathy" },
        ],
      },
      {
        studio: "Studio 3",
        classes: [
          { name: "Lyrical 6", time: "4:00–5:00", teacher: "Miss Olivia" },
          { name: "Tap 3", time: "5:00–6:00", teacher: "Miss Kim" },
          { name: "Tap 4", time: "6:00–7:00", teacher: "Miss Kim" },
          { name: "Lyrical 4", time: "7:00–8:00", teacher: "Miss Kim" },
        ],
      },
      {
        studio: "Studio 4",
        classes: [
          { name: "Contemporary 5", time: "4:00–5:00", teacher: "Miss Jessica" },
          { name: "Contemporary 6/7", time: "5:00–6:30", teacher: "Miss Jessica" },
          { name: "Contemporary Adv.", time: "6:30–8:00", teacher: "Miss Jessica" },
          { name: "Contemporary Int.", time: "8:00–9:00", teacher: "Miss Jessica" },
        ],
      },
    ],
  },
  {
    day: "Wednesday",
    studios: [
      {
        studio: "Studio 1",
        classes: [
          { name: "Company", time: "4:00–5:00", teacher: "Miss Dana" },
          { name: "Jazz 5", time: "5:00–6:00" },
          { name: "Hip Hop Adv.", time: "6:00–7:00", teacher: "Miss Jess & Jenn" },
          { name: "Lyrical Adv.", time: "7:00–8:00" },
          { name: "Hip Hop Int.", time: "8:00–9:00", teacher: "Miss Jess & Jenn" },
        ],
      },
      {
        studio: "Studio 2",
        classes: [
          { name: "Tap 5", time: "4:00–5:00", teacher: "Miss Sarah" },
          { name: "Hip Hop 2", time: "5:00–5:45", teacher: "Miss Jess & Jenn" },
          { name: "Tap 7/Int", time: "6:00–7:00", teacher: "Miss Sarah" },
          { name: "Hip Hop 7", time: "7:00–8:00", teacher: "Miss Jess & Jenn" },
          { name: "Tap Adv.", time: "8:00–9:00", teacher: "Miss Sarah" },
        ],
      },
      {
        studio: "Studio 3",
        classes: [
          { name: "Hip Hop 1", time: "4:15–5:00", teacher: "Miss Jess & Jenn" },
          { name: "Jazz 3", time: "5:00–6:00", teacher: "Miss Sarah" },
          { name: "Jazz 6", time: "6:00–7:00" },
          { name: "Tap 6", time: "7:00–8:00", teacher: "Miss Sarah" },
        ],
      },
      {
        studio: "Studio 4",
        classes: [
          { name: "Acro 2/3", time: "4:00–5:00", teacher: "Mr. A.J." },
          { name: "Acro/Tech/Stretch Adv.", time: "5:00–6:00", teacher: "Mr. A.J." },
          { name: "Acro/Tech/Stretch 4/5", time: "6:00–7:00", teacher: "Mr. A.J." },
          { name: "Acro/Tech/Stretch Int.", time: "7:00–8:00", teacher: "Mr. A.J." },
          { name: "Acro/Tech/Stretch 6/7", time: "8:00–9:00", teacher: "Mr. A.J." },
        ],
      },
    ],
  },
  {
    day: "Thursday",
    studios: [
      {
        studio: "Studio 1",
        classes: [
          { name: "Lyrical 3", time: "4:00–5:00", teacher: "Miss Jess & Jenn" },
          { name: "Lyrical Int.", time: "5:00–6:00", teacher: "Miss Jess" },
          { name: "Jazz Int.", time: "6:00–7:00", teacher: "Miss Emily" },
          { name: "Ballet Adv.", time: "7:00–8:30", teacher: "Miss Kathy" },
          { name: "Pointe Int./Adv.", time: "8:30–9:15", teacher: "Miss Kathy" },
        ],
      },
      {
        studio: "Studio 2",
        classes: [
          { name: "Pre-Ballet", time: "4:15–5:00", teacher: "Miss Emily" },
          { name: "Jazz 4", time: "5:00–6:00", teacher: "Miss Emily" },
          { name: "Hip Hop 6", time: "6:00–7:00", teacher: "Miss Jess & Jenn" },
          { name: "Ballet Int.", time: "7:00–8:30", teacher: "Miss Emily" },
        ],
      },
      {
        studio: "Studio 3",
        classes: [
          { name: "Hip Hop 3", time: "5:00–6:00", teacher: "Miss Jenn" },
          { name: "Ballet 4", time: "6:00–7:00", teacher: "Miss Kathy" },
          { name: "Hip Hop 4", time: "7:00–8:00", teacher: "Miss Jess & Jenn" },
        ],
      },
      {
        studio: "Studio 4",
        classes: [
          { name: "Ballet 6", time: "4:30–6:00", teacher: "Miss Kathy" },
          { name: "Unique Kids Junior", time: "6:00–7:00", teacher: "Miss Laraine" },
          { name: "Unique Kids Teen/Adult", time: "7:00–8:00", teacher: "Miss Laraine" },
        ],
      },
    ],
  },
  {
    day: "Friday",
    studios: [],
    note: "Company Rehearsals, 4:00–9:00pm. Detailed rehearsal schedule provided weekly — not fixed.",
  },
  {
    day: "Saturday",
    studios: [
      {
        studio: "Studio 2",
        classes: [
          { name: "Ballet (Ages 3–5)", time: "9:30–10:15am", teacher: "Miss Libby" },
        ],
      },
    ],
    note: "Company Solo/Duo/Trio Rehearsals by appointment.",
  },
];

export interface TuitionRate {
  duration: string;
  monthly: string;
}

export const tuitionRates: TuitionRate[] = [
  { duration: "45 min", monthly: "$70" },
  { duration: "1 hr", monthly: "$78" },
  { duration: "1 hr 15 min", monthly: "$101" },
  { duration: "1 hr 30 min", monthly: "$127" },
  { duration: "1 hr 45 min", monthly: "$145" },
  { duration: "2 hr", monthly: "$158" },
  { duration: "2 hr 15 min", monthly: "$177" },
  { duration: "2 hr 30 min", monthly: "$195" },
  { duration: "2 hr 45 min", monthly: "$208" },
  { duration: "3 hr", monthly: "$226" },
  { duration: "3 hr 30 min", monthly: "$249" },
  { duration: "3 hr 45 min", monthly: "$265" },
  { duration: "4 hr", monthly: "$272" },
  { duration: "4 hr 30 min", monthly: "$289" },
  { duration: "5 hr", monthly: "$316" },
  { duration: "5 hr 30 min", monthly: "$328" },
  { duration: "6 hr", monthly: "$362" },
  { duration: "6 hr 30 min", monthly: "$377" },
  { duration: "7 hr", monthly: "$394" },
  { duration: "7 hr 30 min", monthly: "$405" },
  { duration: "8 hr", monthly: "$419" },
  { duration: "Unlimited", monthly: "$457" },
  { duration: "Family Unlimited", monthly: "$712" },
];

export const tuitionPolicies: string[] = [
  "Ballet is required to enroll in Lyrical, Jazz, or Contemporary classes.",
  "Tap, Hip Hop, and Acro do not require ballet.",
  "Acro is a non-performance class.",
  "Tuition excludes all built-in vacation days (based on a 29-week schedule). December tuition stays the same even though the studio is closed part of the month.",
];

export interface KeyDate {
  date: string;
  description: string;
}

export const keyDates: KeyDate[] = [
  { date: "Sept 14", description: "Classes begin" },
  { date: "Sept 19", description: "Christmas Show Auditions, 10am" },
  { date: "Oct 12", description: "Closed" },
  { date: "Oct 13–19", description: "Costume measurement week, costume deposits due" },
  { date: "Oct 17", description: "Opening Number Auditions, show theme revealed, 10am" },
  { date: "Oct 26–31", description: "Halloween dress-up week" },
  { date: "Nov 25–28", description: "Closed, Thanksgiving break" },
  { date: "Dec 5", description: "Last day of class before winter break" },
  { date: "Dec 6", description: "Christmas Window Show dress rehearsal" },
  { date: "Dec 7–12", description: "Christmas Window Show, 5–7pm each night" },
  { date: "Dec 7–Jan 2", description: "Closed, winter break" },
  { date: "Jan 4", description: "Classes resume" },
  { date: "Jan 23", description: "POAL Student Choreography Auditions" },
  { date: "Jan 29–31", description: "Dance Xplosion Competition (Company)" },
  { date: "Feb 7", description: "POAL Performance at the Algonquin Theater, Manasquan" },
  { date: "Feb 12–14", description: "Backstage Dance Competition (Company)" },
  { date: "Feb 15", description: "Closed, Presidents Day" },
  { date: "March 12–14", description: "NYCDA Convention (Company)" },
  { date: "March", description: "DFJ Spirit Weeks / March Madness" },
  { date: "March 25–April 2", description: "Closed, spring break" },
  { date: "April 23–25", description: "Journey Dance Competition (Company)" },
  { date: "May 17", description: "Last day of class for the season" },
  { date: "May 18–20", description: "Dress rehearsal at the Strand Theater, Lakewood" },
  { date: "May 22–23", description: "Recital / Show Time" },
  { date: "May 26", description: "End-of-year picnic, Waterfront Park, Pt. Pleasant" },
];
