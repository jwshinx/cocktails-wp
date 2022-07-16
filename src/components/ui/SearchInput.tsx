// used by cocktails
import React, { useState, useEffect } from 'react'

import useDebounce from '../../hooks/useDebounce'
import { SegmentKeyType } from '../../models/cocktail'

interface SearchInputProps {
  segmentType?: string
  segmentKey?: SegmentKeyType
  setSearchQuery: (searchQuery: string) => void
  placeholderText: string
}

export function SearchInput(props: SearchInputProps) {
  const { setSearchQuery, placeholderText } = props
  const [query, setQuery] = useState<string>('')

  let isOnlyOneLetterError = false
  if (
    props.segmentType === 'search' &&
    props.segmentKey?.name === 'firstLetter' &&
    query.length > 1
  ) {
    isOnlyOneLetterError = true
  }

  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    setSearchQuery(debouncedQuery)
  }, [debouncedQuery, setSearchQuery])

  return (
    <div className="form-group">
      <input
        id="search"
        type="search"
        className="form-control"
        placeholder={placeholderText}
        onChange={(event) => setQuery(event.target.value)}
      />
      <small
        id="error"
        className={`form-text ${
          isOnlyOneLetterError ? 'text-danger' : 'd-none'
        }`}
      >
        Please enter single letter.
      </small>
    </div>
  )
}
