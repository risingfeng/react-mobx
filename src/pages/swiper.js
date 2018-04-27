import React from 'react'
import CSSModules from 'react-css-modules'
import Swiper from 'react-id-swiper';
import styles from '../css/swiper.css'
import {inject, observer} from "mobx-react/index";


@inject('pic')
@observer
@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class PicPopSwiper extends React.Component {
    constructor(props) {
        super(props)
    }

    catListFunc = (item, index) => {
        return <img src={item.imgUrl} key={item.id + index}/>
    }

    render() {
        const params = {
            initialSlide: this.props.currentIndex,
            containerClass: 'swiper-container customized-swiper-container',
            paginationCustomizedClass: 'swiper-pagination customized-swiper-pagination',
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        };
        let {closePicPop,} = this.props
        let {catList} = this.props.pic
        return <div styleName="picPopBg">
            <Swiper {...params}>
                {catList.map(this.catListFunc)}
            </Swiper>
            <div styleName="closeBtn" onClick={closePicPop}>关闭</div>
        </div>
    }
}

export default PicPopSwiper