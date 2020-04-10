const a = 1

const obj = {
  'a': 3,
  'b': 0,
  '@': 2
}

switch (obj.a) {
  case 1:
    break
  case 2:
    break
  case 3:
    break
  case 4:
    break
  default:
    break
}

/* 本地数据存储 */
export const setLocalCookie = (k: string, v: any, t?: number, domain?: string): void => {
  typeof window.localStorage !== 'undefined'
    ? localStorage.setItem(k, v)
    : (function() {
        t = t || 365 * 12 * 60 * 60
        domain = domain || '.yy.com'
        document.cookie = k + '=' + v + ';max-age=' + t + ';domain=' + domain + ';path=/'
      })()
}

obj.a === 1 ? (obj.a = 2) : obj.b === 1 ? (obj.b = 2) : (obj.b = 3)
;(async () => {
  const r = await new Promise(resolve => {
    setTimeout(() => {
      resolve(2)
    }, 100)
  })
  console.log(r)
  console.log(obj)
})().catch(() => undefined)
