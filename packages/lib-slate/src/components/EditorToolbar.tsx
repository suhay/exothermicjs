import { forwardRef, PropsWithChildren, ReactNode, Ref, useEffect, useRef } from 'react'

import { css, cx } from '@emotion/css'
import { styled } from '@mui/material/styles'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ReactDOM from 'react-dom'
import { Editor, Range } from 'slate'
import { useFocused, useSlate } from 'slate-react'

import { EditorToolbarButtons } from './EditorToolbarButtons'

interface BaseProps {
  className: string
  [key: string]: unknown
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& button': {
    padding: '2px',
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))

const Menu = forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLDivElement>) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }
          & > * + * {
            margin-left: 15px;
          }
        `,
      )}
    />
  ),
)

function Portal({ children }: { children: ReactNode }) {
  return typeof document === 'object' ? ReactDOM.createPortal(children, document.body) : null
}

export function EditorToolbar() {
  const ref = useRef<HTMLDivElement | null>(null)
  const editor = useSlate()
  const inFocus = useFocused()

  useEffect(() => {
    const el = ref.current
    const { selection } = editor

    if (!el) {
      return
    }

    if (
      !selection ||
      !inFocus ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style')
      return
    }

    const domSelection = window.getSelection()
    const domRange = domSelection?.getRangeAt(0)
    const rect = domRange?.getBoundingClientRect() ?? { top: 0, left: 0, width: 0 }
    el.style.opacity = '1'
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`
    el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`
  })

  return (
    <Portal>
      <Menu
        ref={ref}
        className={css`
          padding: 8px 7px 6px;
          position: absolute;
          z-index: 1;
          top: -10000px;
          left: -10000px;
          margin-top: -6px;
          opacity: 0;
          background-color: #fff;
          border-radius: 30px;
          transition: opacity 0.75s;
          box-shadow: 0px 0px 10px 5px #0000001c;
        `}
        onMouseDown={(e) => {
          // prevent toolbar from taking focus away from editor
          e.preventDefault()
        }}
      >
        <StyledToggleButtonGroup size='small'>
          <EditorToolbarButtons />
        </StyledToggleButtonGroup>
      </Menu>
    </Portal>
  )
}
