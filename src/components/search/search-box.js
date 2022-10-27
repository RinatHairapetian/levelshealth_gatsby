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
      <form className={`${className} container`}>
        <SearchIcon className="SearchIcon" />
        <input
          className="SearchInput"
          type="text"
          placeholder="Search articles, authors … "
          aria-label="Search articles, authors … "
          onChange={e => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
        />
        <button type="button" className={`btn btn-dark ${hasFocus ? 'd-block' : 'd-none'}`}
          onClick={closeAndClear}>&times;</button>
      </form>
    )
  }
)