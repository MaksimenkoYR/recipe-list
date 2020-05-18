import React, {useState} from 'react'

const TagItem = ({item, changeTags}) => {
    const [classList, setClass] = useState('tag-item')
    const SELECTED = ' tag-item--selected'

    return (
        <li
            className={classList}
            onClick={() => {
                changeTags(item)
                if (classList.includes(SELECTED)) {
                    setClass(classList.replace(SELECTED, ""))
                } else {
                    setClass(classList + SELECTED)
                }
            }}
        >
            {item.label}
        </li>
    )
}

export default TagItem
