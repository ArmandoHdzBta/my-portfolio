import './iconSocial.css'

const IconSocial = ({to, children}) => {
    return (
        <a className="ml-2 mr-2 color-icon"
            href={to}>
            {children}
        </a>
    )
}

export default IconSocial