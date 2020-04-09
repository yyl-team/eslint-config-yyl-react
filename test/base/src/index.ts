const a = 1

const obj = {
  a: 'a',
  b: 0
}
;(async () => {
  const r = await new Promise(resolve => {
    setTimeout(() => {
      resolve(2)
    }, 100)
  })
  console.log(r)
  console.log(obj)
})().catch(() => undefined)
