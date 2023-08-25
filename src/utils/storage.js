const localStorageName = 'zzkStore'

// 获取某个参数
function getSessionItem(key) {
  const store = getSessionStore()
  return key && store[key]
}

// 设置某个参数
function setSessionItem(key, value) {
  let store = getSessionStore()
  if (key) {
    store[key] = value
  } 
  sessionStorage.setItem(localStorageName, JSON.stringify(store)) 
}

function getSessionStore() {
  const store = sessionStorage.getItem(localStorageName)
  if (store) {
    try {
      return JSON.parse(store)
    } catch (error) {
      return {}
    }
  }
  return {}
}

export { setSessionItem, getSessionItem }
