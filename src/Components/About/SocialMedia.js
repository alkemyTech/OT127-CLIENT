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
    return (
        <>
            <Separator image={socialMediaImg}>
                <p>Nuestras Redes</p>
            </Separator>

            <p className='socialMedia__text'>Encontranos En</p>

            <div className='socialMedia__social-container'>
                <LinkedinFollowCompany
                    companyId={42854645}
                    counter="top" // Or "right"
                    lang="en_US"
                />

                <TwitterButton
                    hashtags="one,two"
                    target="alkemy__"
                    text="Hello World"
                    type="Mention"
                    size="large"
                    via="alkemy__"
                />

                <a href="#" class="socialMedia__button facebook"><i class="fa fa-facebook"></i>Facebook</a>

                <a href="#" class="socialMedia__button instagram"><i class="fa fa-instagram"></i>Instagram</a>
            </div>

            <TwitterTweet
                align='left'
                coversation='none'
                tweetId={tweetId}
                theme='light'
                width={325}
            />
        </>
    )
}

export default SocialMedia