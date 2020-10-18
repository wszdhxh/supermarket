export function debounce(func, delay=50) {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(func, delay);
  }
}
