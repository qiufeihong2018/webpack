import _ from 'lodash'
import './style.css'
import qiao from './qiao.jpg'
import data from './data.xml'

function component() {
    let element = document.createElement('div')
    //lodash
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    element.classList.add('hello')
    element.classList.add('*')
    //images
    let myPic = new Image()
    myPic.src = qiao
    element.appendChild(myPic)
    console.log(data)
    return element
}

document.body.appendChild(component())
