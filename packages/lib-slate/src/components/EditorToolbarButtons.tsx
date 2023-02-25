import Code from '@mui/icons-material/Code'
import FormatBold from '@mui/icons-material/FormatBold'
import FormatItalic from '@mui/icons-material/FormatItalic'
import FormatQuote from '@mui/icons-material/FormatQuote'
import SvgIcon from '@mui/material/SvgIcon'

import { BlockButton } from './BlockButton'
import { MarkButton } from './MarkButton'

export function EditorToolbarButtons() {
  return (
    <>
      <MarkButton format='bold' icon={<FormatBold />} />
      <MarkButton format='italic' icon={<FormatItalic />} />
      <MarkButton format='code' icon={<Code />} />
      <BlockButton
        format='heading_one'
        icon={
          <SvgIcon>
            <path d='M3 2v4.747h1.656l.383-2.568.384-.311h3.88V15.82l-.408.38-1.56.12V18h7.174v-1.68l-1.56-.12-.407-.38V3.868h3.879l.36.311.407 2.568h1.656V2z' />
          </SvgIcon>
        }
      />
      <BlockButton
        format='heading_two'
        icon={
          <SvgIcon>
            <path d='M4 5.5v4.74h1.657l.384-2.569.384-.312h2.733v8.461l-.41.38-1.91.12V18h7.179v-1.68l-1.912-.12-.405-.38V7.359h2.729l.36.312.408 2.57h1.657V5.5z' />
          </SvgIcon>
        }
      />
      <BlockButton format='block_quote' icon={<FormatQuote />} />
    </>
  )
}
