// Set to false to disable all UI sounds.
const SOUND_ENABLED = true
// Pick "sine" or "piano" to switch libraries.
const SOUND_LIBRARY = "sine" as const

const SOUND_LIBRARY_URLS = {
  sine: {
    hover: "/sounds/snd01-sine/tap_03.wav",
    click: "/sounds/snd01-sine/toggle_on.wav",
    externalClick: "/sounds/snd02-piano/select.wav",
  },
  piano: {
    hover: "/sounds/snd02-piano/tap_01.wav",
    click: "/sounds/snd02-piano/toggle_on.wav",
    externalClick: "/sounds/snd02-piano/select.wav",
  },
}
const INTERACTIVE_SELECTOR = "a, button, [role='button']"

let initialized = false

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false
  return /Mobi|Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const isDisabled = (element: Element) => {
  const isButton = element instanceof HTMLButtonElement
  const ariaDisabled = element.getAttribute("aria-disabled") === "true"
  return (isButton && element.disabled) || ariaDisabled
}

const isExternalLink = (element: Element) => {
  if (!(element instanceof HTMLAnchorElement)) return false
  const href = element.getAttribute("href")
  if (!href) return false
  if (href.startsWith("#") || href.startsWith("/")) return false
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return true
  try {
    const url = new URL(href, window.location.href)
    return url.origin !== window.location.origin
  } catch {
    return false
  }
}

const playSound = (audio: HTMLAudioElement | null) => {
  if (!audio) return
  audio.currentTime = 0
  audio.play().catch(() => {})
}

export const initSoundEffects = () => {
  if (!SOUND_ENABLED || typeof window === "undefined" || isMobileDevice()) {
    return () => {}
  }

  if (initialized) {
    return () => {}
  }

  initialized = true

  const librarySounds = SOUND_LIBRARY_URLS[SOUND_LIBRARY]
  const hoverAudio = new Audio(librarySounds.hover)
  const externalClickAudio = new Audio(librarySounds.externalClick)
  const externalClickLinkedInAudio = new Audio("/sounds/snd02-piano/transition_up.wav")
  const clickAudio = new Audio(librarySounds.click)
  hoverAudio.preload = "auto"
  externalClickAudio.preload = "auto"
  externalClickLinkedInAudio.preload = "auto"
  clickAudio.preload = "auto"

  let lastHoverTarget: Element | null = null

  const handleMouseOver = (event: MouseEvent) => {
    const target = event.target as Element | null
    if (!target) return
    const interactive = target.closest(INTERACTIVE_SELECTOR)
    if (!interactive) {
      lastHoverTarget = null
      return
    }
    if (interactive === lastHoverTarget || isDisabled(interactive)) return
    lastHoverTarget = interactive
    playSound(hoverAudio)
  }

  const handleClick = (event: MouseEvent) => {
    const target = event.target as Element | null
    if (!target) return
    const interactive = target.closest(INTERACTIVE_SELECTOR)
    if (!interactive || isDisabled(interactive)) return
    if (interactive.closest("[data-sound-click='custom']")) return
    if (isExternalLink(interactive)) {
      if (interactive instanceof HTMLElement && interactive.dataset.soundExternal === "linkedin") {
        playSound(externalClickLinkedInAudio)
        return
      }
      if (interactive instanceof HTMLAnchorElement && /linkedin\.com/i.test(interactive.href)) {
        playSound(externalClickLinkedInAudio)
        return
      }
      playSound(externalClickAudio)
      return
    }
    playSound(clickAudio)
  }

  document.addEventListener("mouseover", handleMouseOver, true)
  document.addEventListener("click", handleClick, true)

  return () => {
    document.removeEventListener("mouseover", handleMouseOver, true)
    document.removeEventListener("click", handleClick, true)
    initialized = false
  }
}
