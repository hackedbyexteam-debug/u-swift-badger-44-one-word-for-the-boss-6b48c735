// One Word for the Boss — "Arsonist".
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 12 candidates scored against the judge's published criteria, in
// order: (1) a single word that describes a boss, the sort of word a person
// would actually use about the one they report to; (2) funny on its own,
// the kind of word a colleague repeats at lunch because it lands;
// (3) rings true, catching a real habit of bosses; (4) fresh, not the
// first word anyone would reach for, its surprise earning a laugh rather
// than a shrug; (5) travels, working for a boss in a kitchen, a warehouse
// or an office without the industry needing to be explained. Tie-break is
// bytes, so the word stays short: 8.
//
// Candidates: Micromanager, Tyrant, Parrot, Tornado, Foghorn, Printer,
// Arsonist, Seagull, Teflon, Overtime, Meetings, Leech.
//
// Why Arsonist wins:
// - Criterion 1: a single word, and exactly the sort of word people use
//   about the boss they report to — the one who starts the fires.
// - Criterion 2: it lands on its own. Say "my boss is an arsonist" at
//   lunch and the table laughs before you explain anything: he sets the
//   blaze, then strides in as the hero who puts it out.
// - Criterion 3: the truest boss habit in the pool. The manufactured
//   crisis — the urgent fire that only existed because the boss lit it
//   on Friday at 4 p.m. — is a habit every entrant has actually met.
// - Criterion 4: nobody's first word for a boss. The field will be
//   Micromanager, Tyrant, Dictator, Control-freak, Narcissist. Arsonist
//   takes the same complaint from an angle nobody else thought of.
// - Criterion 5: it travels. Kitchens, warehouses and offices all have
//   the boss who creates the emergency and then takes the credit for
//   the rescue — no industry needs explaining.
// Rejected runners-up: Parrot (repeats your idea back louder in the
// meeting and takes the credit — instantly funny, concrete, true — but
// a known metaphor, a shade less surprising than Arsonist); Tornado
// (sweeps through, destroys everything, leaves — funny and concrete,
// but "force of nature" is a common way to describe chaotic people, so
// it sits closer to the modal field); Foghorn (the boss you hear from
// three rooms away — loud, funny, travels everywhere — but the laugh
// is volume alone, with no habit behind it); Printer (jams at the worst
// moment and only works for IT — a great image, but the joke needs the
// analogy unpacked, and it is office-only, so it fails criterion 5).
// Micromanager, Tyrant and Meetings were rejected outright as the modal
// field: the first words everyone reaches for. Seagull was rejected
// because the joke needs the "seagull management" term explained — a
// word that needs a caption is doing less than a word that stands alone.
//
// Gate: exactly 1 word, 8 characters (limit 1-30).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Arsonist`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
