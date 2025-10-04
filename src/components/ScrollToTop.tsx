import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // If there's a hash, wait a bit for the page to load then scroll to the element
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
