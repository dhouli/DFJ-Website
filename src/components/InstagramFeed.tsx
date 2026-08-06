"use client";

// Live Instagram feed via SnapWidget (connected to @danceforjoynj).
// If this ever needs to be swapped out or reconnected, sign in at
// snapwidget.com, grab the new embed URL, and update WIDGET_EMBED_URL below.
const WIDGET_EMBED_URL: string | null =
  "https://snapwidget.com/embed/1128249";

export default function InstagramFeed() {
  if (WIDGET_EMBED_URL) {
    // Deliberately NOT using SnapWidget's own auto-resize script here — on
    // this site it hangs waiting for a handshake that never completes
    // (confirmed via console: "IFrame has not responded within 5 seconds")
    // and the widget renders completely blank as a result. This plain
    // embed with a fixed height is the version already confirmed working:
    // it renders the full photo grid with no cropping. No border/box
    // around it, so on screens with a little extra room below the photos
    // it just blends into the page background instead of looking like a
    // mis-sized box.
    return (
      <iframe
        src={WIDGET_EMBED_URL}
        title="Posts from Instagram"
        className="block w-full"
        height={700}
        style={{ border: "none" }}
      />
    );
  }

  return (
    <a
      href="https://www.instagram.com/danceforjoynj/"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center gap-3 rounded-xl border border-joy-blush bg-white py-16 px-6 text-center hover:border-joy-cyan transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-joy-pink">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
      <p className="font-semibold text-joy-plum">@danceforjoynj</p>
      <p className="text-sm text-joy-charcoal/70 max-w-xs">
        See our latest photos and videos on Instagram
      </p>
    </a>
  );
}
