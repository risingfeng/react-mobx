import {extendObservable, computed} from 'mobx'
import cat1 from '../images/pic/img_1.jpg'
import cat2 from '../images/pic/img_2.jpg'
import cat3 from '../images/pic/img_3.jpg'
import cat4 from '../images/pic/img_4.jpg'
import cat5 from '../images/pic/img_5.jpg'
import cat6 from '../images/pic/img_6.jpg'
import cat7 from '../images/pic/img_7.jpg'
import cat8 from '../images/pic/img_8.jpg'
import cat9 from '../images/pic/img_9.jpg'


const catList = [
    {id: 1, imgUrl: cat1},
    {id: 2, imgUrl: cat2},
    {id: 3, imgUrl: cat3},
    {id: 4, imgUrl: cat4},
    {id: 5, imgUrl: cat5},
    {id: 6, imgUrl: cat6},
    {id: 7, imgUrl: cat7},
    {id: 8, imgUrl: cat8},
    {id: 9, imgUrl: cat9},
]

export default class Pic {
    constructor() {
        extendObservable(this, {
            catList: catList,
        })
    }
}