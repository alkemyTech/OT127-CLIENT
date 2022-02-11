import React from 'react'
import {
    LinkedinFollowCompany,
    TwitterButton,
    TwitterTweet
} from 'react-social-plugins';
import Separator from '../Card/Separator';

const SocialMedia = () => {
    const tweetId = "1491420665198841856"
    return (
        <>
            <Separator>
                <p>Beunas</p>
            </Separator>
            <p>Seccion de Redes Sociales</p>
            <LinkedinFollowCompany
                companyId={42854645}
                counter="top" // Or "right"
                lang="en_US"
            />
            <TwitterTweet
                align='left'
                coversation='none'
                tweetId={tweetId}
                theme='light'
                width={325}
            />

            <TwitterButton
                hashtags="one,two"
                target="alkemy__"
                text="Hello World"
                type="Mention"
                size="large"
                via="alkemy__"
            />

            <TwitterButton
                hashtags="one,two"
                target="username"
                text="Hello World"
                type="Hashtag"
                size="large"
                via="username"
            />
        </>
    )
}

export default SocialMedia