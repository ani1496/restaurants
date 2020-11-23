import React, { FunctionComponent, useEffect, useState } from 'react'

import Tag from './Tag'
import { filterTags } from '../../methods'

type Props = {
  type: string
  tagOptions: string[]
}

const Filter:FunctionComponent<Props> = ({type, tagOptions}) => {
  const [filterVal, setFilterVal] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [tagsFound, setTagsFound] = useState<string[]>([])

  const removeTag = (tagToRemove:string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(newTags)
  }

  const addTag = (newTag:string) => {
    if(!tags.includes(newTag)) setTags([...tags, newTag])
    setFilterVal('')
  }

  useEffect(() => {
    setTagsFound([...filterTags(filterVal, tagOptions, tags)]);
  }, [filterVal])

  return (
    <div className="orange-light-background width-50 row">
      <p className="white pad-2">{type}</p>
      <div className="width-100 height-auto margin-1">
        <div className="white-light-background pad-1-l row height-100">
          {
            tags.map(tag => <Tag name={tag} onClick={(tag) => removeTag(tag)} />)
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