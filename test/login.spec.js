const {
  log
} = require('console')
const automator = require('miniprogram-automator')
const {
  default: MiniProgram
} = require('miniprogram-automator/out/MiniProgram')
const Path = require('path')

describe('登录注册界面测试', () => {
  let miniProgram
  let page

  beforeAll(async () => {
    miniProgram = await automator.launch({
      cliPath: 'D:/微信web开发者工具/cli.bat',
      projectPath: Path.join(__dirname, '../'),
    })
    page = await miniProgram.reLaunch('/pages/login/login')
    await page.waitFor(500)
  }, 40000)

  afterAll(async () => {
    await miniProgram.close()
  })
  // 测试用例
  // 登录界面渲染
  it('轮播图是否成功渲染', async () => {
    // 轮播图是否成功渲染
    // 类名为.top_banner的swiper标签是否存在
    const swiper = await page.$('.top_banner')
    expect(swiper.tagName).toBe('swiper')
    // 轮播图里面有四项
    const swiperItem = await page.$$('.top_banner swiper-item')
    expect(swiperItem.length).toBe(4)
  })
  // 我是老师按钮是否成功渲染
  it('按钮部分成功渲染', async () => {
    const btnTea = await page.$('.teacher')
    const btnStu = await page.$('.student')
    expect(await btnTea.wxml()).toContain('我是老师')
    expect(await btnStu.wxml()).toContain('我是学生/家长')
  })
  // 页面跳转
  // 我是老师按钮是否成功跳转
  // 跳转之后是否成功获得了用户信息
  // 信息填写界面是否成功渲染
  it('信息填写界面是否渲染成功', async () => {
    page = await miniProgram.navigateTo('/pages/login/userInfo')
    const formItem = await page.$$('.selection')
    expect(formItem.length).toEqual(2);
    const submit = await page.$('.submit')
    expect(await submit.text()).toBe('立即使用');
  });
  // 信息填写功能测试
  // 输入框初始状态检测
  // 文本框初始内容为空
  let inputs
  it('文本框初始内容为空', async () => {
    inputs = await page.$$('input')
    expect(await inputs[1].value() + await inputs[0].value()).toBe('');

  });
  // 学科选择框index为-1
  it('学科选择框index为-1', async () => {
    const picker = await page.$('picker')
    expect(await picker.value()).toBe(-1);
  });
  // 获取到学科列表
  it('获取到学科列表', async () => {
    expect(await page.data('array')).toBeTruthy();
  });
  // 文本框状态变化检测
  // 老师姓名框文本是否和本地数据一同变化
  it('老师姓名框文本是否和本地数据一同变化', async () => {
    await inputs[0].input('王老师')
    expect(await inputs[0].value()).toBe('王老师');
    expect(await inputs[0].value()).toBe(await page.data('realName'));
  });
  // 任教科目是否随着选择框改变
  it('任教科目是否随着选择框改变', async () => {
    await page.setData({
      index: 2
    })
    const array = await page.data('array')
    expect(await inputs[1].value()).toBe(array[2].subject);
  });
})