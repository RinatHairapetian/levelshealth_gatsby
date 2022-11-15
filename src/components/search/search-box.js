import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { MagnifyingGlass as SearchIcon } from "@styled-icons/fa-solid"

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus, onClose, hasFocus }) => {
    const closeAndClear = ($event) => {
      $event.stopPropagation();
      refine("");
      onClose();
    }
    return (
      <form className={`${className} ${hasFocus ? 'container' : ''}`}>
        <SearchIcon className="SearchIcon" />
        <input
          className="SearchInput"
          type="text"
          placeholder={`${hasFocus ? 'Search articles, authors … ' : 'Search'}`}
          aria-label={`${hasFocus ? 'Search articles, authors … ' : 'Search'}`}
          onChange={e => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
        />
        <button type="button" className={`btn btn-dark ${hasFocus ? 'd-block' : 'd-none'}`} style={{ order: 3 }}
          onClick={closeAndClear}>&times;</button>
      </form>
    )
  }
)