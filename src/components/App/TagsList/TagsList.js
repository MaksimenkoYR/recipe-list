import React  from 'react'
import TagItem from './TagItem'
import "./tagList.scss"

const TagsList = ({allTags, changeTags}) => {
    const tags = allTags.map(item => <TagItem item={item} changeTags={changeTags} />)
    return <ul className='tags-list'>{tags}</ul>
}

export default TagsList
