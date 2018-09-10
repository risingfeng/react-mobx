import React from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../css/pic.css'
import PicPopSwiper from './swiper'
import CSSModules from 'react-css-modules'
import Header from '../components/header'

@inject('pic')
@observer
@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Pic extends React.Component {

    state = {
        picPopControl: false,
        currentIndex: 0,
    }

    componentDidMount() {
        // 从路径获取来的参数
        console.log(this.props.match.params.picId)
    }

    showPop = (index) => {
        this.setState({picPopControl: true, currentIndex: index})
    }

    closePicPop = () => {
        this.setState({picPopControl: false})
    }

    catListShowFunc = (item, index) => {
        return <img src={item.imgUrl} styleName="catItem" key={item.id + index}
                    onClick={() => this.showPop(index)}/>
    }

    render() {
        let {picPopControl, currentIndex} = this.state
        let {catList} = this.props.pic
        return <div styleName="bg">
            <Header title='图片页' history={this.props.history} />
            <div styleName="project">
                this is some cats and you can point out the way you look at each one.
            </div>
            <div styleName="catListBg">
                {catList && catList.length && catList.map(this.catListShowFunc)}
            </div>
            {picPopControl && <PicPopSwiper closePicPop={this.closePicPop} {...{currentIndex}}/>}
        </div>
    }
}


export default Pic