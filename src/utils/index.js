import Marked from 'marked'
const toc = []
const renderer = new Marked.Renderer()

/**
 * render anchor tag
 * @link https://github.com/chjj/marked#overriding-renderer-methods
 */
renderer.heading = function (text, level) {
  const slug = text.toLowerCase().replace(/<(?:.|\n)*?>/gm, '').replace(/[\s\n\t]+/g, '-')

  // toc.push({ level, slug: '#' + slug, title: text })
  toc.push({ level, title: text })

  return `<h${level} id="${slug}"><a class="anchor"></a>${text}</h${level}>`
}

Marked.setOptions({ renderer })

export function marked(i) {
  return Marked(i)
}

export function typing(part1, html1, time, part2, html2, line) {
  let firstIndex = 0,
  secondIndex = 0;
  (function htmlType() {
    part1.innerHTML = html1.substr(0, firstIndex) + '<span class="typing">|</span>'
    firstIndex++
    if (html1.length >= firstIndex) {
      setTimeout(htmlType, time)
    } else {
      let link = part1.querySelectorAll('a')
      if (link.length) {
        link[0].setAttribute('href', 'https://github.com/luyilin')
        link[0].setAttribute('target', '_blank')
        link[1].setAttribute('href', 'mailto:luyilin12@gmail.com')
      }
      if (part2) {
        cssType()
      } else if (line) {
        showLine(line)
      }
    }
  })()
  let cssType = ()=> {
    part2.innerHTML = html2.substr(0, secondIndex)
    secondIndex++
    if (html2.length >= secondIndex) {
      setTimeout(cssType, time)
   } else {
      part2.setAttribute('contenteditable', true)
    }
  }
}

export function changeBg(i) {
  var c = document.getElementsByTagName('canvas')[0];
  var x = c.getContext('2d'),
    pr = window.devicePixelRatio || 1,
    w = window.innerWidth,
    h = window.innerHeight,
    f = 90,
    q,
    m = Math,
    r = 0,
    u = m.PI*2,
    v = m.cos,
    z = m.random
  c.width = w*pr
  c.height = h*pr
  x.scale(pr, pr)
  x.globalAlpha = 0.6

  function d(i,j){
    x.beginPath()
    x.moveTo(i.x, i.y)
    x.lineTo(j.x, j.y)
    var k = j.x + (z()*2-0.25)*f,
      n = y(j.y)
    x.lineTo(k, n)
    x.closePath()
    r-=u/-50
    x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)
    x.fill()
    q[0] = q[1]
    q[1] = {x:k,y:n}
  }
  function y(p){
    var t = p + (z()*2-1.1)*f
    return (t>h||t<0) ? y(p) : t
  }

  x.clearRect(0,0,w,h)
  q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}]
  while(q[1].x<w+f) d(q[0], q[1])
}
