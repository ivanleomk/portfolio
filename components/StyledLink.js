import React from 'react'
import Link from 'next/link'


const StyledLink = (props) => {
    return (
        <Link href = {`/${props.url}`}>
            <a className = "text-black underline cursor-pointer lowercase tracking-wide">
                 {props.text} 
            </a>
        </Link>
        
    )
}

export default StyledLink
