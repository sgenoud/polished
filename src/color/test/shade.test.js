// @flow
import shade from '../shade'

describe('shade', () => {
  it('should shade the provided color with white by the given percentage', () => {
    expect(shade(0.25, '#00f')).toMatchSnapshot()
  })

  it('should shade the provided 8-digit hex color with white by the given percentage', () => {
    expect(shade(0.25, '#000fffcc')).toMatchSnapshot()
  })

  it('should shade the provided 4-digit hex color with white by the given percentage', () => {
    expect(shade(0.25, '#0f08')).toMatchSnapshot()
  })

  it('should shade the provided color when passed a string for amount', () => {
    expect(shade('0.25', '#00f')).toMatchSnapshot()
  })

  it('should return transparent when passed transparent', () => {
    expect(shade('0.25', 'transparent')).toMatchSnapshot()
  })
})
