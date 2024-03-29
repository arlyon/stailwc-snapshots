// https://tailwindcss.com/docs/grid-auto-columns

tw`auto-cols-auto`
tw`auto-cols-min`
tw`auto-cols-max`
tw`auto-cols-fr`

tw`auto-cols-[minmax(0, 2fr)]`
tw`grid-cols-[200px,repeat(auto-fill,minmax(15%,100px)),300px]`
tw`lg:grid-cols-[200px,repeat(auto-fill,minmax(15%,100px)),300px]`

      ↓ ↓ ↓ ↓ ↓ ↓

// https://tailwindcss.com/docs/grid-auto-column"
({
  gridAutoColumns: "auto",
});
({
  gridAutoColumns: "min-content",
});
({
  gridAutoColumns: "max-content",
});
({
  gridAutoColumns: "minmax(0, 1fr)",
});
({
  gridAutoColumns: "minmax(0, 2fr)",
});
({
  gridTemplateColumns: "200px,repeat(auto-fill,minmax(15%,100px)),300px",
});
({
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "200px,repeat(auto-fill,minmax(15%,100px)),300px",
  },
})


