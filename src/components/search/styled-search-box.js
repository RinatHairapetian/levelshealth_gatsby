import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 10em;
  background: ${({ theme }) => theme.background};
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
`

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ hasFocus }) => (hasFocus ? 'flex-start' : 'space-between')};
  margin-bottom: 0;
  background: ${({ hasFocus }) => (hasFocus ? 'white' : 'rgba(0, 0, 0, 0.03)')};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: ${({ hasFocus }) => (hasFocus ? '12px' : '0 12px')};

  .SearchInput {
    outline: none;
    border: none;
    transition: 100ms;
    border-radius: 2px;

    font-family: 'TT Hoves', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #5D6465;
    padding: ${({ hasFocus }) => (hasFocus ? '2px 1px' : '12px 0')};

    ${({ hasFocus }) => (hasFocus ? 'flex-grow: 1;' : '')};

    ::placeholder {
      font-family: 'TT Hoves', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #5D6465;
    }
    background-color: transparent;
    /*${({ hasFocus }) => (hasFocus ? open : closed)}*/
  }

  .SearchIcon {
    width: 1em;
    margin: 0 0.3em 0 0;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
  }
`