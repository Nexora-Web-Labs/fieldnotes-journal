export const posts = [
  {
    slug: "grid-that-breathes",
    title: "The grid that breathes",
    tag: "Layout", color: "#5B4FE9", soft: "#E9E7FC", icon: "▦",
    date: "2026-08-12", readMins: 6,
    excerpt: "Rigid 12-column grids are a starting point, not a religion. Here's when to break yours on purpose.",
    author: "Reema Osei", role: "Design lead",
    body: [
      { type: "p", text: "Every design system I've shipped started with a 12-column grid, and every one of them eventually broke it — on purpose, in the same handful of places. The grid is a tool for consistency, not a cage." },
      { type: "h2", text: "Where rigidity earns its keep" },
      { type: "p", text: "Forms, tables, and anything with repeated rows benefit from a grid that never bends. Predictability there isn't boring, it's respect for the reader's attention — they shouldn't have to re-learn alignment every time they scroll." },
      { type: "quote", text: "A grid you never break isn't discipline. It's a missed opportunity to say something with emphasis." },
      { type: "h2", text: "Where it should give" },
      { type: "p", text: "Hero sections, pull quotes, and hero imagery are where an intentional break reads as confidence rather than sloppiness. The trick is consistency in how you break it — always the same offset, the same bleed — so the exception itself becomes a pattern readers learn to recognize." },
      { type: "p", text: "Treat the grid as a baseline you return to, not a rule you enforce everywhere. The moments you deviate are the moments people remember." },
    ],
  },
  {
    slug: "state-you-can-see",
    title: "State you can see",
    tag: "Front-end", color: "#C9852B", soft: "#F7E9D2", icon: "◍",
    date: "2026-08-05", readMins: 8,
    excerpt: "Loading, empty, error, success — most bugs I've shipped came from a state I forgot to design for.",
    author: "Theo Marsh", role: "Front-end engineer",
    body: [
      { type: "p", text: "Ask any front-end engineer where their bugs come from and, after enough honesty, most will admit it's rarely the happy path. It's the states around it — the ones nobody sketched." },
      { type: "h2", text: "The four states worth designing every time" },
      { type: "p", text: "Loading, empty, error, and success aren't edge cases; they're the actual shape of using software over time. A screen that only exists in its \"populated with perfect data\" form is a screen that's only been half-designed." },
      { type: "p", text: "Empty states in particular get treated as an afterthought, when they're often the first thing a new user sees. Use that moment to explain what the screen is for, not just that nothing is there yet." },
      { type: "h2", text: "Building it into the component, not the checklist" },
      { type: "p", text: "The teams that ship the fewest state-related bugs are the ones where loading and error variants live in the same component file as the default — not as a separate ticket filed for \"later.\" Later rarely comes." },
    ],
  },
  {
    slug: "copy-is-a-material",
    title: "Copy is a material, not a garnish",
    tag: "Writing", color: "#2F8F6B", soft: "#DCF0E7", icon: "✎",
    date: "2026-07-29", readMins: 5,
    excerpt: "The words in your interface aren't decoration on top of the design — they're structural.",
    author: "Reema Osei", role: "Design lead",
    body: [
      { type: "p", text: "Designers spend hours on spacing and rarely the same amount of care on the eleven words next to the button. But those eleven words are doing structural work — they're telling someone what happens if they click." },
      { type: "h2", text: "Name things by what people control" },
      { type: "p", text: "Nobody manages a \"webhook configuration.\" They manage notifications. Write from the reader's side of the screen, in terms of what they're doing, not how the system happens to be built underneath." },
      { type: "quote", text: "An interface's vocabulary is the signposting for someone navigating it. Consistency is how people learn their way around." },
      { type: "p", text: "If a button says \"Publish,\" the confirmation toast should say \"Published\" — not \"Success\" or \"Done.\" Keep the verb the same all the way through the flow, and the product starts to feel like it was written by one person instead of assembled by a committee." },
    ],
  },
  {
    slug: "case-for-boring-technology",
    title: "The case for boring technology",
    tag: "Engineering", color: "#B2394B", soft: "#F6DEE2", icon: "⬡",
    date: "2026-07-18", readMins: 7,
    excerpt: "Your side project can use the bleeding edge. Your client's production app probably shouldn't.",
    author: "Theo Marsh", role: "Front-end engineer",
    body: [
      { type: "p", text: "There's a real cost to being the first team on a stack, and it isn't paid at launch — it's paid eighteen months later, when the library you bet on has three GitHub issues open and no maintainer replying to them." },
      { type: "h2", text: "Innovation tokens are a budget, not a mindset" },
      { type: "p", text: "Pick one or two genuinely new things per project, and let everything else be the tool you already know how to debug at 11pm. That discipline is what lets the interesting bet actually get the attention it needs." },
      { type: "p", text: "Boring doesn't mean bad. It means well-documented, widely used, and unlikely to disappear from under you mid-contract. For client work especially, boring is often the more respectful choice — it's their maintenance burden, not yours, once you're off the invoice." },
    ],
  },
  {
    slug: "onboarding-nobody-reads",
    title: "The onboarding flow nobody reads",
    tag: "UX", color: "#5B4FE9", soft: "#E9E7FC", icon: "◫",
    date: "2026-07-09", readMins: 6,
    excerpt: "Five-step product tours have a completion rate most teams would be embarrassed to publish.",
    author: "Priya Nadar", role: "Product designer",
    body: [
      { type: "p", text: "We measured it once, on a product I won't name: a five-step tooltip tour with a 61% drop-off by step two. Nobody wants to read a tour before they've done anything. They want to do the thing." },
      { type: "h2", text: "Teach inside the task, not before it" },
      { type: "p", text: "The onboarding that actually works tends to be the one disguised as the first real use of the product — a pre-filled example, a sample project, a task that's 90% done and just needs the user's input to finish." },
      { type: "p", text: "Save the tooltip tour for power features that genuinely aren't discoverable any other way, and even then, trigger it contextually — right when the person is about to need it, not on their very first screen." },
    ],
  },
  {
    slug: "designing-for-slow-networks",
    title: "Designing for the network you don't have",
    tag: "Front-end", color: "#C9852B", soft: "#F7E9D2", icon: "◍",
    date: "2026-06-30", readMins: 9,
    excerpt: "Your office wifi is not a representative testing environment. Here's how to design around that.",
    author: "Theo Marsh", role: "Front-end engineer",
    body: [
      { type: "p", text: "It's easy to forget that \"loading\" isn't a brief flicker for a meaningful share of your users — it's a real, visible wait. Design on fast wifi long enough and you stop designing for the wait at all." },
      { type: "h2", text: "Skeletons over spinners" },
      { type: "p", text: "A skeleton screen that roughly matches the shape of the eventual content reduces perceived wait time more than a spinner does, because it gives the eye something structural to anticipate rather than an abstract signal that time is passing." },
      { type: "p", text: "Where you can, load the parts of a screen that matter most first — the content a person came for, before the avatar images and secondary metadata. Perceived speed is often about sequencing, not raw milliseconds." },
    ],
  },
];

export function initials(name) { return name.split(" ").map((w) => w[0]).join(""); }
export function fmtDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
