import { useState, useEffect } from 'react'

type Props = {
  startAt?: number
}

export function MarkdownProgress({ startAt = 0 }: Props) {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {scrollPosition >= startAt && (
        <progress id='file' max='100' value={scrollPosition}>{`${scrollPosition}%`}</progress>
      )}
    </>
  )
}
