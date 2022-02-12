import React from 'react'
import {
    LinkedinFollowCompany,
    TwitterButton,
    TwitterTweet
} from 'react-social-plugins';
import Separator from '../Card/Separator';
import socialMediaImg from "../../images/social-media.jpg"
import "../../sass/components/_socialmedia.scss"

const SocialMedia = () => {
    const tweetId = "1492562845325791241"
    const tweetId2 = "1492565246996881422"
    const linkedInId = 68737437
    return (
        <>
            <Separator image={socialMediaImg}>
                <p>Nuestras Redes</p>
            </Separator>

            <p className='socialMedia__text'>Encontranos En</p>

            <div className='socialMedia__social-container'>


                <TwitterButton
                    target="SomosmasO"
                    type="Mention"
                    size="large"
                    className="socialMedia__button"
                />

                <a
                    href="https://www.facebook.com/profile.php?id=100077792335889"
                    className="socialMedia__button socialMedia__button--facebook"
                    target="_blank"
                >
                    <i className="socialMedia__icon fa fa-facebook" />
                    Facebook
                </a>

                <a
                    href="https://www.instagram.com/p/somosmasongok/"
                    className="socialMedia__button socialMedia__button--instagram"
                    target="_blank"
                >
                    <i className="socialMedia__icon fa fa-instagram" />
                    Instagram
                </a>

                <LinkedinFollowCompany
                    companyId={linkedInId}
                    counter="top" // Or "right"
                    lang="en_US"
                    className="socialMedia__button"
                />
            </div>

            <div className='socialMedia__tweets'>
                <TwitterTweet
                    align='left'
                    coversation='none'
                    tweetId={tweetId}
                    theme='light'
                    width={325}
                />
                <TwitterTweet
                    align='left'
                    coversation='none'
                    tweetId={tweetId2}
                    theme='light'
                    width={325}
                />
            </div>
        </>
    )
}

export default SocialMedia