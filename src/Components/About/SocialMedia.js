import React from 'react'
import {
    LinkedinFollowCompany,
    TwitterButton,
    TwitterTweet
} from 'react-social-plugins';
import Separator from '../Card/Separator';
import socialMediaImg from "../Image/social-media.jpg"
import "../../sass/components/_socialmedia.scss"

const SocialMedia = () => {
    const tweetId = "1491420665198841856"
    const tweetId2 = "1492152852965433347"
    const linkedInId = 42854645
    return (
        <>
            <Separator image={socialMediaImg}>
                <p>Nuestras Redes</p>
            </Separator>

            <p className='socialMedia__text'>Encontranos En</p>

            <div className='socialMedia__social-container'>


                <TwitterButton
                    hashtags="one,two"
                    target="alkemy__"
                    text="Hello World"
                    type="Mention"
                    size="large"
                    via="alkemy__"
                    className="socialMedia__button"
                />

                <a
                    href="https://www.facebook.com/AlkemyLATAM/"
                    className="socialMedia__button socialMedia__button--facebook"
                    target="_blank"
                >
                    <i className="socialMedia__icon fa fa-facebook" />
                    Facebook
                </a>

                <a
                    href="https://www.instagram.com/alkemy__/"
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