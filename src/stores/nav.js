import {extendObservable, computed} from 'mobx'


export default class Nav {
    constructor() {
        extendObservable(this, {
            content: 'this is the data from nav store.'
        })
    }
}