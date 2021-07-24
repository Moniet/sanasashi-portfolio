import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { color, space, typography } from 'styled-system'

const Text = styled('p', {
  shouldForwardProp,
})(color, typography, space)

export default Text
