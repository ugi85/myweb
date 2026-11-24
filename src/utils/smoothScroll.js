/**
 * Custom smooth scroll engine with controlled duration and cubic easing.
 * Glides smoothly and lands calmly with zero secondary shaking or delayed pop.
 */

export function smoothScrollTo(target, options = {}) {
  const {
    duration = 800, // Durasi scroll halus dan natural (ms)
    offset = 84,    // Jarak ruang di atas konten untuk navbar sticky
    callback = null,
  } = options

  let targetY = 0

  if (typeof target === 'string') {
    if (target === '#' || target === '' || target === '#top') {
      targetY = 0
    } else {
      const id = target.startsWith('#') ? target.substring(1) : target
      const targetEl = document.getElementById(id)
      if (!targetEl) return
      const elementPosition = targetEl.getBoundingClientRect().top
      targetY = elementPosition + window.pageYOffset - offset
    }
  } else if (typeof target === 'number') {
    targetY = target
  } else if (target instanceof HTMLElement) {
    const elementPosition = target.getBoundingClientRect().top
    targetY = elementPosition + window.pageYOffset - offset
  }

  // Batasi agar tidak melebihi batas bawah halaman
  const maxScroll = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  ) - window.innerHeight

  targetY = Math.max(0, Math.min(targetY, maxScroll))

  const startY = window.pageYOffset || document.documentElement.scrollTop
  const distance = targetY - startY

  if (Math.abs(distance) < 2) {
    if (callback) callback()
    return
  }

  let startTime = null

  // Easing: easeInOutCubic - bergerak perlahan di awal, meluncur halus, lalu mendarat sangat lembut
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t * t + b
    t -= 2
    return (c / 2) * (t * t * t + 2) + b
  }

  function step(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const nextY = easeInOutCubic(Math.min(timeElapsed, duration), startY, distance, duration)

    window.scrollTo(0, nextY)

    if (timeElapsed < duration) {
      window.requestAnimationFrame(step)
    } else {
      window.scrollTo(0, targetY)
      if (callback) callback()
    }
  }

  window.requestAnimationFrame(step)
}
