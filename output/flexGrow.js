// https://tailwindcss.com/docs/flex-grow

tw`grow-0`
tw`grow`
tw`flex-grow-0`
tw`flex-grow`

tw`grow-[2]`
tw`flex-grow-[var(--grow)]`

      ↓ ↓ ↓ ↓ ↓ ↓

// https://tailwindcss.com/docs/flex-grow
({
  flexGrow: "0",
});
({
  flexGrow: "1",
});
({
  flexGrow: "0",
});

({
  flexGrow: "1",
});

({
  flexGrow: "2",
});
({
  flexGrow: "var(--grow)",
});


