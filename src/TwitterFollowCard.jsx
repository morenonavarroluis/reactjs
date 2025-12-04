import { use, useState } from "react";
export function TwitterFollowCard({ userName , name }){
    const [isFollowing, setIsFollowing] = useState(false)
    
    const addAt = (userName) => `@${ userName }`
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
         <article className="tw-followCard">
        <header className="tw-followCard-avatar">
            <img src={`https://unavatar.io/${ userName }`} alt="" />
            <div className="tw-followCard-info">
                <strong>{ name }</strong>
                <span className="tw-followCard-infoUserName">{addAt(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={ buttonClassName } onClick={handleClick}>
               { text }
            </button>
        </aside>
       </article>
    )
}