import React, {useState} from 'react'
import TagItem from './TagItem'

const TagsList = ({allTags, changeTags}) => {
    const tags = allTags.map(item => <TagItem item={item} changeTags={changeTags} />)
    return <ul className='tags-list'>{tags}</ul>
}

export default TagsList
