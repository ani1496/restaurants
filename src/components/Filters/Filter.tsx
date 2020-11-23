import React, { FunctionComponent, useEffect, useState } from 'react'

import Tag from './Tag'
import { filterTags } from '../../methods'
import { FilterType } from '../../type'

type Props = {
  type: FilterType
  tagOptions: string[]
  onFilterChange: (filterType:FilterType, filterVals:string[]) => void;
  className: string
}

const Filter:FunctionComponent<Props> = ({ type, tagOptions, onFilterChange, className }) => {
  const [filterVal, setFilterVal] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [tagsFound, setTagsFound] = useState<string[]>([])

  const removeTag = (tagToRemove:string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(newTags)
    onFilterChange(type, newTags)
  }

  const addTag = (newTag:string) => {
    if(!tags.includes(newTag)) { 
      const newTags = [...tags, newTag]
      setTags(newTags)
      onFilterChange(type, newTags)
    }
    setFilterVal('')
  }

  useEffect(() => {
    setTagsFound([...filterTags(filterVal, tagOptions, tags)]);
  }, [filterVal])

  return (
    <div className={`orange-light-background width-50 row ${className}`}>
      <p className="white pad-2" style={{ textTransform: 'capitalize' }}>{type}</p>
      <div className="width-100 height-auto margin-1">
        <div className="white-light-background pad-1-l row height-100">
          {
            tags.map(tag => <Tag key={tag} name={tag} onClick={(tag) => removeTag(tag)} />)
          }
          <input
            className="filter-input"
            value={filterVal}
            onChange={(e) => setFilterVal(e.target.value)}
            />
        </div>
        {tagsFound.length > 0 && 
          <div className="filter-dropdown">
            {tagsFound.map(tag => <p key={tag} className="pad-1 dropdrown-tag" onClick={() => addTag(tag)}>{tag}</p>)}
          </div>
        }
      </div>
    </div>
  )
}

export default Filter