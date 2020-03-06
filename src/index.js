import './index.css'
import printMe from './print'
import _ from 'lodash'

console.log(_)
if (module.hot) {
  console.log('111111')
  module.hot.accept('./print.js', function() {
    console.log('22222');
  })
}
console.log('env', process.env.zdy)
function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = 'hello webpack!'
  element.classList.add('red')
  btn.innerHTML = 'click me'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())