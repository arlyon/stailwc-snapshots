// https://tailwindcss.com/docs/flex

tw`flex-1`
tw`flex-auto`
tw`flex-initial`
tw`flex-none`

tw`flex-[2 2 0%]`
tw`flex-[var(--flex)]`

      ↓ ↓ ↓ ↓ ↓ ↓

// https://tailwindcss.com/docs/flex
({
  flex: "1 1 0%",
});
({
  flex: "1 1 auto",
});
({
  flex: "0 1 auto",
});
({
  flex: "none",
});
({
  flex: "2 2 0%",
});
({
  flex: "var(--flex)",
})


