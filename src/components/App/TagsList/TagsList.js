import React from 'react'

const TagsList = ({allTags, changeTags}) => {
    const tags = allTags.map(item => <li onClick={() => {changeTags(item); console.log(item)}}>{item.label}</li>)
    return <ul>{tags}</ul>
}

export default TagsList
