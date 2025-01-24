const a = 1

const obj = {
  'a': 3,
  'b': 0,
  '@': 2
}

const str = "a'bcde"

const TEST_CHILD = /test_child/.test(window.location.href)

const arr = [
  {
    label: 'home',
    title: 'parent-home',
    path: '/index'
  },
  {
    label: 'vue2',
    title: 'child-vue2',
    path: '/vue2',
    allblue: {
      name: 'allblue_demo_child_vue2',
      entry: '//www.yourhostname.com/allblue_demo_child_vue2/',
      activePath: `/vue2`
    }
  },
  {
    label: 'react',
    title: 'child-react',
    path: '/react',
    allblue: {
      name: 'allblue_demo_child_react',
      entry: '//www.yourhostname.com/allblue_demo_child_react/',
      activePath: `/react`
    }
  },
  {
    path: '/',
    redirect: '/index'
  }
].concat(
  TEST_CHILD
    ? [
        {
          label: 'QUERY.test_child',
          title: 'QUERY.test_child',
          path: '/QUERY.test_child',
          allblue: {
            name: 'QUERY.test_child',
            entry: '//www.yourhostname.com/QUERY.test_child/',
            activePath: '/QUERY.test_child'
          }
        }
      ]
    : []
)

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
    : (function () {
        t = t || 365 * 12 * 60 * 60
        domain = domain || '.baidu.com'
        document.cookie = k + '=' + v + ';max-age=' + t + ';domain=' + domain + ';path=/'
      })()
}

obj.a === 1 ? (obj.a = 2) : obj.b === 1 ? (obj.b = 2) : (obj.b = 3)
;(async () => {
  const r = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 100)
  })
  console.log(a, str, arr)
  console.log(r)
  console.log(obj)
})().catch(() => undefined)
