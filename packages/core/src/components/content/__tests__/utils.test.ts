import { createElement } from 'react'
import { applyTemplate } from '../utils'

describe('applyTemplate', () => {
  it('applies a simple template', () => {
    const result = applyTemplate('{{ content }}.', {
      content: 'This is the test content',
    })

    expect(result).toBe('This is the test content.')
  })

  it('applies a nested template', () => {
    const result = applyTemplate('Photo by [{{ image.caption.creditUrl }}](Test)', {
      image: {
        src: 'image.jpg',
        src2: 'image2.jpg',
        alt: 'A grilled, cheese sandwich',
        caption: {
          credit: 'Person',
          creditUrl: 'https://unsplash.com/@random',
          site: 'Unsplash',
          siteUrl: 'https://unsplash.com/',
        },
      },
    })

    expect(result).toEqual('Photo by [https://unsplash.com/@random](Test)')
  })

  it('applies a complicated template', () => {
    const result = applyTemplate(
      'Photo by [{{ image.caption.creditUrl }}]({{ image.caption.credit }}) on [{{ image.caption.siteUrl }}]({{ image.caption.site }})',
      {
        image: {
          src: 'image.jpg',
          src2: 'image2.jpg',
          alt: 'A grilled, cheese sandwich',
          caption: {
            credit: 'Person',
            creditUrl: 'https://unsplash.com/@random',
            site: 'Unsplash',
            siteUrl: 'https://unsplash.com/',
          },
        },
      },
    )

    expect(result).toEqual(
      'Photo by [https://unsplash.com/@random](Person) on [https://unsplash.com/](Unsplash)',
    )
  })

  it('applies a shallow, complicated template', () => {
    const result = applyTemplate(
      'Photo by [{{ image.creditUrl }}]({{ image.credit }}) on [{{ image.siteUrl }}]({{ image.site }})',
      {
        image: {
          src: 'image.jpg',
          src2: 'image2.jpg',
          alt: 'A grilled, cheese sandwich',
          credit: 'Person Dude',
          creditUrl: 'https://unsplash.com/@random',
          site: 'Unsplash',
          siteUrl: 'https://unsplash.com/',
        },
      },
    )

    expect(result).toEqual(
      'Photo by [https://unsplash.com/@random](Person Dude) on [https://unsplash.com/](Unsplash)',
    )
  })

  it('applies a dateTime filter', () => {
    const result = applyTemplate('Date: {{ date | dateTime | MMM d, yyyy }}', {
      date: '2023-01-01',
    })

    expect(result).toEqual('Date: Jan 1, 2023')
  })

  it('applies ReactNodes where needed', () => {
    const data = {
      author: {
        name: 'Test Person',
      },
      content: createElement('p'),
    }

    const authorResult = applyTemplate('{{ author.name }}', data)

    expect(authorResult).toEqual('Test Person')

    const contentResult = applyTemplate('{{ content }}', data)

    expect(contentResult).toEqual(data.content)
  })
})
