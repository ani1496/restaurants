import React, { FunctionComponent, useEffect, useState } from 'react'
import Tag from './Tag'

type Props = {
  type: string
  tagOptions: string[]
}

const Filter:FunctionComponent<Props> = ({type, tagOptions}) => {
  const [filterVal, setFilterVal] = useState('')
  const [tags, setTags] = useState<string[]>(['test', 'test2'])
  const [tagsFound, setTagsFound] = useState<string[]>([])

  const removeTag = (tagToRemove:string) => {
    console.log(tagToRemove)
    const newTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(newTags)
  }

  useEffect(() => {
    let filterTags:string[] = []

    if(filterVal.length === 0 ) filterTags = []

    else filterTags = tagOptions.filter(tag => tag.toLowerCase().includes(filterVal.toLowerCase()))
    
    setTagsFound([...filterTags]);
  }, [tagOptions, filterVal])

  console.log(tagsFound)

  return (
    <div className="orange-light-background width-50 row">
      <p className="white pad-2">{type}</p>
      <div>
        <div className="width-100 white-light-background margin-1 pad-1-l row">
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
          <div>
            {tagsFound.map(tag => <p>{tag}</p>)}
          </div>
        }
      </div>
    </div>
  )
}

export default Filter