import { useEffect } from 'react'

// Sets the browser tab title for each page
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Rafael Villacrusis` : 'Rafael Villacrusis | Portfolio'
  }, [title])
}
