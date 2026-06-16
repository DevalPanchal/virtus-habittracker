/* ============================================================
   VIRTUS — centralized site copy & product facts
   Source of truth: the Virtus product briefing (see CLAUDE.md task).
   Numbers/prices live here so corrected facts aren't scattered
   across components and the price is trivial to change later.
   ============================================================ */

/** Premium subscription price shown in the pricing section. */
export const PREMIUM_PRICE = '$1.99'
export const PREMIUM_PERIOD = '/ month'

/** Total rule-based achievements in the app. */
export const ACHIEVEMENT_COUNT = 128

/** Public contact email. */
export const CONTACT_EMAIL = 'devalp2401@gmail.com'

/** Last-updated date for the legal pages. */
export const LEGAL_UPDATED = 'June 2, 2026'

/** The four numbers in the stat strip. `display` overrides the count-up text. */
export interface StatStripItem {
  /** Numeric target for the count-up animation. */
  value: number
  /** Caption under the number. */
  caption: string
  /** Optional literal to render instead of the counted number (e.g. "∞"). */
  display?: string
  /** Render the number with the brand green gradient. */
  grad?: boolean
}

export const STAT_STRIP: StatStripItem[] = [
  { value: 6, caption: 'Hero attributes to level up', grad: true },
  { value: ACHIEVEMENT_COUNT, caption: 'Achievements to unlock' },
  { value: 3, caption: 'Daily quests, every day' },
  { value: 5, caption: 'Expeditions to embark on' },
]

/** A character attribute. `colorVar` references a CSS custom property. */
export interface Attribute {
  name: string
  value: number
  colorVar: string
  /** linear-gradient fill for the bar. */
  fill: string
}

export const ATTRIBUTES: Attribute[] = [
  { name: 'Mind', value: 80, colorVar: '--mind', fill: 'linear-gradient(90deg,#6b3fc0,var(--mind))' },
  { name: 'Intelligence', value: 64, colorVar: '--green', fill: 'linear-gradient(90deg,var(--green-deep),var(--green))' },
  { name: 'Strength', value: 55, colorVar: '--strength', fill: 'linear-gradient(90deg,#a06713,var(--strength))' },
  { name: 'Body', value: 40, colorVar: '--body', fill: 'linear-gradient(90deg,#9b322d,var(--body))' },
  { name: 'Heart', value: 35, colorVar: '--heart', fill: 'linear-gradient(90deg,#a32f60,var(--heart))' },
  { name: 'Discipline', value: 34, colorVar: '--disc', fill: 'linear-gradient(90deg,#2f5e94,var(--disc))' },
]

/** Free vs Premium feature lists (corrected against the briefing). */
export const FREE_FEATURES = [
  'Up to 5 active habits',
  'Streaks, XP, levels & daily quests',
  'Six attributes & the full story',
  `All ${ACHIEVEMENT_COUNT} achievements`,
  '2 streak freezes per month',
  '3 free Expeditions',
]

export const PREMIUM_FEATURES = [
  'Unlimited habits',
  '10 streak freezes per month',
  'Quest rerolls (1 per day)',
  'Advanced statistics & insights',
  'Data export to CSV',
  'All Expeditions unlocked',
]
