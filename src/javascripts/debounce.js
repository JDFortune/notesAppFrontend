function debounce(callback, time = 300) {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(callback(event), time);
  }
}

export default debounce