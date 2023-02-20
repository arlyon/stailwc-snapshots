// https://tailwindcss.com/docs/grid-auto-rows

tw`auto-rows-auto`
tw`auto-rows-min`
tw`auto-rows-max`
tw`auto-rows-fr`

tw`grid-rows-[200px, repeat(auto-fill, minmax(15%, 100px)), 300px]`

      ↓ ↓ ↓ ↓ ↓ ↓

// https://tailwindcss.com/docs/grid-auto-rows
({
  gridAutoRows: "auto",
});
({
  gridAutoRows: "min-content",
});
({
  gridAutoRows: "max-content",
});
({
  gridAutoRows: "minmax(0, 1fr)",
});
({
  gridTemplateRows: "200px, repeat(auto-fill, minmax(15%, 100px)), 300px",
})


