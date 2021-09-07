// 封装一系列方法，使其可以链式调用
class Shape {
  constructor() {
    this.cmds = []
  }
  moveTo() {
    this.cmds.push(['moveTo', arguments])
    return this
  }
  lineTo() {
    this.cmds.push(['lineTo', arguments])
    return this
  }
  lineCap() {
    this.cmds.push(['lineCap', arguments])
    return this
  }
  lineJoin() {
    this.cmds.push(['lineJoin', arguments])
    return this
  }
  lineWidth() {
    this.cmds.push(['lineWidth', arguments])
    return this
  }
  stroke() {
    this.cmds.push(['stroke', arguments])
    return this
  }
  strokeStyle() {
    this.cmds.push(['strokeStyle', arguments])
    return this
  }
  closePath() {
    this.cmds.push(['closePath', arguments])
    return this
  }
  beginPath() {
    this.cmds.push(['beginPath', arguments])
    return this
  }
}

// 声明形状--对勾
class Correct extends Shape {
  constructor(x, y, size) {
    super();
    this.x = x
    this.y = y
    this.size = size
  }
  draw() {
    this.beginPath()
      .moveTo(-this.size / 2 + this.x, this.y)
      .lineTo(-this.size / 6 + this.x, this.size / 3 + this.y)
      .lineTo(this.size / 2 + this.x, -this.size / 3 + this.y)
      .strokeStyle('#38a935')
      .lineCap('round')
      .lineJoin('round')
      .lineWidth(this.size * .08)
      .stroke()
  }
}
// 声明形状--打叉
class Wrong extends Shape {
  constructor(x, y, size) {
    super();
    this.x = x
    this.y = y
    this.size = size * .67
  }
  draw() {
    this.beginPath()
      .moveTo(-this.size / 2 + this.x, -this.size / 2 + this.y)
      .lineTo(this.size / 2 + this.x, this.size / 2 + this.y)
      .moveTo(this.size / 2 + this.x, -this.size / 2 + this.y)
      .lineTo(-this.size / 2 + this.x, this.size / 2 + this.y)
      .strokeStyle('#d72229')
      .lineCap('round')
      .lineJoin('round')
      .lineWidth(this.size * .09)
      .stroke()
  }
}


// 元素管理器构造器
class Tools {
  constructor() {
    this.group = []
  }
  add(element) {
    // 在这里调用节点的 draw 方法，拿到 cmds
    element.draw()
    this.group.push(element)
  }

  // 删除，用name？id？
  distory(elementName) {

  }
}

// 工作区，画布构造器
class WorkSpace {
  constructor(ctx) {
    this.ctx = ctx
    this.renderList = []
  }

  add(obj) {
    this.renderList.push(obj)
  }
  update() {
    this.renderList.forEach((item) => {
      item.group.forEach((item) => {
        item.cmds.forEach((item) => {
          if (item[1].length > 1) {
            this.ctx[item[0]](...item[1])
          } else if (item[1].length == 1) {
            this.ctx[item[0]] = item[1][0]
          } else {
            this.ctx[item[0]]()
          }
        })
      })
    })
  }
}
module.exports = {
  Shape,
  Correct,
  Tools,
  WorkSpace,
  Wrong
}