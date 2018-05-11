import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../css/video.css'

@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'})
class Video extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isPlay: false,
        src: null,
        isEnded: false
    }

    componentDidMount() {
        this.setState({src: 'http://wag.i-h5.cn/dj/wyf/video/wb.mp4'})
        //播放完毕，退出全屏
        this.video.addEventListener('ended', _ => {
            // this.webkitExitFullScreen()
            console.log('the video is ended')
            this.setState({isEnded: true})
        }, false);
    }

    startPlay = () => {
        this.setState({
            isPlay: !this.state.isPlay
        }, _ => {
            if (this.state.isPlay == true) {
                console.log('the video is start')
                // this.video.webkitRequestFullscreen()//(全屏显示)
                this.video.play()
            } else {
                this.video.pause()
                this.video.webkitExitFullScreen()
            }
        })

        this.video.addEventListener('play', _ => {
            console.log(111111111)
            this.videoBox.style.width = '120%'
            this.videoBox.style.left = '-10%'
            this.video.style.width = '100%'
        }, false)

    }


    renderBtn = () => {
        return <div styleName="upBtnBg">
            <div styleName="btnText">视频播放完毕</div>
        </div>
    }

    render() {
        let {isPlay, src,isEnded} = this.state
        return <div styleName="bg">
            <div styleName="videoBg">
                <div styleName="videobox" ref={ele => {
                    this.videoBox = ele
                }}>
                    <video preload="load" data-link={src} playsInline="false"
                           x-webkit-airplay="allow"
                           webkit-playsinline="false"
                           x5-video-player-type="h5"
                           src="http://wag.i-h5.cn/dj/wyf/video/wyf.mp4"
                           ref={ele => {
                               this.video = ele
                           }}
                           controls={false}
                           autoPlay="autoPlay"
                           style={{objectFit: "fill"}}
                    ></video>
                    {isEnded && this.renderBtn()}
                </div>
                <div styleName="videoBtn" onClick={this.startPlay}>+</div>
            </div>
        </div>
    }
}


export default Video