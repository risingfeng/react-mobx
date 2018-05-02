import React from 'react'
import CSSModules from 'react-css-modules'
import Swiper from 'react-id-swiper';
import styles from '../css/slide.css'
import {inject, observer} from "mobx-react/index";

@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Slide extends React.Component {
    render() {
        const params = {
            containerClass: 'swiper-container customized-slide-container',
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: true,
            allowSlidePrev: false
        };
        return <div styleName="bg">
            <Swiper {...params}>
                <div><Slide1/></div>
                <div><Slide2/></div>
                <div className="swiper-no-swiping"><Slide3/></div>
            </Swiper>
        </div>
    }
}

@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Slide1 extends React.Component {
    render() {
        return <div styleName="slideBg slide1Bg">
            This is the first page.
        </div>
    }
}

@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Slide2 extends React.Component {
    render() {
        return <div styleName="slideBg slide2Bg">
            This is second pages.
        </div>
    }
}

@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Slide3 extends React.Component {
    render() {
        return <div styleName="slideBg slide3Bg">
            This is third pages.<br/>
            Give me the strength lightly to bear my joys and sorrows.<br/>
            Give me the strength to make my love fruitful in service.<br/>
            Give me the strength never to disown the poor or bend my knees before insolent might.<br/>
            Give me the strength to raise my mind high above daily trifles.<br/>
            And give me the strength to surrender my strength to thy will with love.<br/>
            <div styleName="slide1Main">
                If the day is done, if birds sing no more, if the wind has flagged tired, then draw the veil of darkness
                thick upon me, even as thou hast wrapt the earth with the coverlet of sleep and tenderly closed the
                petals of the drooping lotus at dusk.From the traveller, whose sack of provisions is empty before the
                voyage is ended, whose garment is torn and dustladen, whose strength is exhausted, remove shame and
                poverty, and renew his life like a flower under the cover of thy kindly night.
                I know that the day will come when my sight of this earth shall be lost, and life will take its leave in
                silence, drawing the last curtain over my eyes.
                Yet stars will watch at night, and morning rise as before, and hours heave like sea waves casting up
                pleasures and pains.When I think of this end of my moments, the barrier of the moments breaks and I see
                by the light of death thy world with its careless treasures. Rare is its lowliest seat, rare is its
                meanest of lives.Things that I longed for in vain and things that I got---let them pass. Let me but
                truly possess the things that I ever spurned and overlooked.
                If the day is done, if birds sing no more, if the wind has flagged tired, then draw the veil of darkness
                thick upon me, even as thou hast wrapt the earth with the coverlet of sleep and tenderly closed the
                petals of the drooping lotus at dusk.From the traveller, whose sack of provisions is empty before the
                voyage is ended, whose garment is torn and dustladen, whose strength is exhausted, remove shame and
                poverty, and renew his life like a flower under the cover of thy kindly night.
                I know that the day will come when my sight of this earth shall be lost, and life will take its leave in
                silence, drawing the last curtain over my eyes.
                Yet stars will watch at night, and morning rise as before, and hours heave like sea waves casting up
                pleasures and pains.When I think of this end of my moments, the barrier of the moments breaks and I see
                by the light of death thy world with its careless treasures. Rare is its lowliest seat, rare is its
                meanest of lives.Things that I longed for in vain and things that I got---let them pass. Let me but
                truly possess the things that I ever spurned and overlooked.
            </div>
        </div>
    }
}

export default Slide