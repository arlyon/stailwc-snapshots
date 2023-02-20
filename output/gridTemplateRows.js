// https://tailwindcss.com/docs/grid-template-rows

tw`grid-rows-1`
tw`grid-rows-2`
tw`grid-rows-3`
tw`grid-rows-4`
tw`grid-rows-5`
tw`grid-rows-6`
tw`grid-rows-none`

tw`grid-rows-[200px minmax(900px, 1fr) 100px]`

      ↓ ↓ ↓ ↓ ↓ ↓

// https://tailwindcss.com/docs/grid-template-rows
({
  gridTemplateRows: "repeat(1, minmax(0, 1fr))",
});
({
  gridTemplateRows: "repeat(2, minmax(0, 1fr))",
});
({
  gridTemplateRows: "repeat(3, minmax(0, 1fr))",
});
({
  gridTemplateRows: "repeat(4, minmax(0, 1fr))",
});
({
  gridTemplateRows: "repeat(5, minmax(0, 1fr))",
});
({
  gridTemplateRows: "repeat(6, minmax(0, 1fr))",
});
({
  gridTemplateRows: "none",
});
({
  gridTemplateRows: "200px minmax(900px, 1fr) 100px",
})


