import {
  useState, useEffect,
} from '@exothermic/core'

type Props = {
  startAt?: number
}

export const MarkdownProgress = ({ startAt = 0 }: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>()

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPosition >= startAt && (<progress id="file" max="100" value={scrollPosition}>{`${scrollPosition}%`}</progress>)}
    </>
  )
}
