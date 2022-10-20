import styled, { css } from "styled-components"
import SearchResult from "./search-result"

// position: absolute;
// max-height: 80vh;
// max-width: 30em;
const Popover = css`
  flex-direction: column;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  background: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 8px;
`

export default styled(SearchResult)`
  display: ${props => (props.show ? `flex` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    flex-grow: 1;
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 30px;
      .post-image {
        min-width: 150px;
        aspect-ratio: 2 / 1;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 12px;
      }
      a {
        color: ${({ theme }) => theme.foreground};
        h4 {
          margin-bottom: 0.2em;
          font-size: 24px;
          text-align: left;
          @media (max-width: 767.9px) {
            font-size: 20px;
          }
        }
      }
      span {
        color: ${({ theme }) => theme.foreground};
      }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`