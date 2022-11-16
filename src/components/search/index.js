import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState, useMemo } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import { ThemeProvider } from "styled-components"
import StyledSearchBox from "./styled-search-box"
import StyledSearchResult from "./styled-search-result"
import StyledSearchRoot from "./styled-search-root"
import useClickOutside from "./use-click-outside"

const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
}

export default function Search({ indices, white }) {
  if (!white) {
    white = false;
  }
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID || "C3FM325ISF",
        process.env.GATSBY_ALGOLIA_SEARCH_KEY || "d221d0de48b77e52685d952570d20514"
      ),
    []
  )

  useClickOutside(rootRef, () => setFocus(false))


  const focusStyle = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '20px 50px',
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef} style={hasFocus ? focusStyle : {}} hasFocus={hasFocus}>
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} onClose={() => setFocus(false)} white={white} />
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  )
}