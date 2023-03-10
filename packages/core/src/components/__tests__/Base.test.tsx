import { unmountComponentAtNode } from 'react-dom'
// import renderer from 'react-test-renderer'

// import { Base } from '../Base'

let container: HTMLDivElement | null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  if (container != null) {
    unmountComponentAtNode(container)
    container.remove()
  }
  container = null
})

it('renders with or without a name', () => {
  // const component = renderer.create(<Base />)
  // const tree = component.toJSON()
  // console.log(tree)
  // expect(tree).toMatchSnapshot()
  // act(() => {
  //   render(<Hello name='Jenny' />, container)
  // })
  // expect(container.textContent).toBe('Hello, Jenny!')
  // act(() => {
  //   render(<Hello name='Margaret' />, container)
  // })
  // expect(container.textContent).toBe('Hello, Margaret!')
})
