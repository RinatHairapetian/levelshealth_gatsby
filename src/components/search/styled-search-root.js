import styled from "styled-components"

export default styled.div`
  position: relative;
  background: ${({ hasFocus }) => (hasFocus ? '#00000070' : 'transparent')};
  @media (max-width: 767.9px) {
    padding: ${({ hasFocus }) => (hasFocus ? '20px 10px !important' : '0')};
  }
  z-index: 10;
`