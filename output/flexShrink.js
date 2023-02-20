// https://tailwindcss.com/docs/flex-shrink

tw`shrink-0`
tw`shrink`
tw`flex-shrink-0`
tw`flex-shrink`

tw`flex-shrink-[var(--shrink)]`
tw`shrink-[var(--shrink)]`

      ↓ ↓ ↓ ↓ ↓ ↓

// https://tailwindcss.com/docs/flex-shrink
({
  flexShrink: "0",
});
({
  flexShrink: "1",
});
({
  flexShrink: "0",
});

({
  flexShrink: "1",
});

({
  flexShrink: "var(--shrink)",
});

({
  flexShrink: "var(--shrink)",
})


