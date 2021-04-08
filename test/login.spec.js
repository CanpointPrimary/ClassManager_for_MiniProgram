const automator = require('miniprogram-automator')
const Path = require('path') 

describe('登录注册界面测试', () => {
  let miniProgram
  let page

  beforeAll(async () => {
    miniProgram = await automator.launch({
      cliPath: 'D:/微信web开发者工具/cli.bat',
      projectPath: Path.join(__dirname,'../')
    })
   page = await miniProgram.reLaunch('/pages/login/login')
    await page.waitFor(500) 
  }, 30000)

  afterAll(async () => {
    await miniProgram.close()
  })
  // 测试用例
  // 登录界面渲染
  it ("轮播图是否成功渲染",async ()=>{
    // 轮播图是否成功渲染
      // 类名为.top_banner的swiper标签是否存在
      const swiper = await page.$('.top_banner')
      expect(swiper.tagName).toBe('swiper')
      // 轮播图里面有四项
      const swiperItem = await page.$$('.top_banner swiper-item')
      expect(swiperItem.length).toBe(4);
    })
    // 我是老师按钮是否成功渲染
  // 页面跳转
    // 我是老师按钮是否成功跳转
    // 跳转之后是否成功获得了用户信息
  // 信息填写界面是否成功渲染
  // 信息填写功能测试
    // 输入框初始状态检测
      // 文本框初始内容为空
      // 学科选择框index为-1
      // 获取到学科列表
    // 文本框状态变化检测
      // 老师姓名框文本是否和本地数据一同变化
      // 任教科目是否随着选择框改变    
    // 页面跳转 
      //  点击确认是否跳转到用户首页 
})