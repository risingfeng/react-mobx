import React from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../css/pic.css'
import PicPopSwiper from './swiper'

@inject('pic')
@observer
class Pic extends React.Component {

    state = {
        picPopControl: false,
        currentIndex: 0,
    }

    showPop = (index) => {
        this.setState({picPopControl: true, currentIndex: index})
    }

    closePicPop = () => {
        this.setState({picPopControl: false})
    }

    catListShowFunc = (item, index) => {
        return <img src={item.imgUrl} className={styles.catItem} key={item.id + index}
                    onClick={() => this.showPop(index)}/>
    }

    render() {
        let {picPopControl, currentIndex} = this.state
        let {catList} = this.props.pic
        return <div className={styles.bg}>
            <div className={styles.project}>
                this is some cats and you can point out the way you look at each one.
            </div>
            <div className={styles.catListBg}>
                {catList && catList.length && catList.map(this.catListShowFunc)}
            </div>
            {picPopControl && <PicPopSwiper closePicPop={this.closePicPop} {...{currentIndex}}/>}
        </div>
    }
}


export default Pic