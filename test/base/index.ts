const a = 1;
(async () => {
  const r = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 100)
  })
  console.log(r)
})().catch(() => undefined)