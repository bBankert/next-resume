import Link from "next/link"
import React, { ReactNode } from "react"

type LinkIconProps = {
    linkUrl?: string,
    linkAriaLabel?: string,
    icon: ReactNode,
}

const LinkIcon = ({
    linkUrl, 
    linkAriaLabel, 
    icon
}: LinkIconProps) => {

    return (
        <>
        {linkUrl ? 
            <Link href={linkUrl} aria-label={linkAriaLabel}>
                {icon}
            </Link> :
            icon
        }
        </>
    )
}

export default LinkIcon;