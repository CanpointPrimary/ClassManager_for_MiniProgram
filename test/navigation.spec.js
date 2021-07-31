// 测试小程序所有的跳转
const {
  log
} = require('console')
const automator = require('miniprogram-automator')
const {
  default: MiniProgram
} = require('miniprogram-automator/out/MiniProgram')
const Path = require('path')
let miniProgram
let page

describe('起始页跳转测试', () => {

  beforeAll(async () => {
    miniProgram = await automator.launch({
      cliPath: 'D:/微信web开发者工具/cli.bat',
      projectPath: Path.join(__dirname, '../'),
    })
    page = await miniProgram.reLaunch('/pages/start/poster')
    await page.waitFor(500)
  }, 40000)

  afterAll(async () => {})

  // 进入海报页面
  it('当前页面为海报页面', async () => {
    const currentPage = await miniProgram.currentPage()
    expect(currentPage.path).toBe(page.path);
  });
  it('三秒之后，本地有数据的情况下跳转到首页', async () => {
    await page.waitFor(3000)
    // 如果有本地用户数据，则跳转到首页
    const data = await miniProgram.callWxMethod('getStorageSync', 'currentUser')
    const currentPage = await miniProgram.currentPage()
    if (data) {
      expect(currentPage.path).toBe("pages/homePage/homePage");
    }
    // 如果没有用户数据，则跳转到引导页
    else {
      expect(currentPage.path).toBe("pages/start/guide");
      it('引导页的各跳转正确', async () => {
        // 左滑到最后展示身份选择按钮
        const currentPage = await miniProgram.currentPage()
        const swiper = await currentPage.$('swiper')
        const swiperItems = await currentPage.$$('swiper-item')
        swiper.swipeTo((swiperItems.length - 1))
        const btn = await currentPage.$('.btn')

        expect(await btn.offset().left).toBeLessThan(375);
        expect(await btn.offset().top).toBeGreaterThan(0);
        // 身份选择按钮按下后跳转到首页
        await btn.tap()
        const currentPage1 = await miniProgram.currentPage()
        expect(currentPage1.path).toBe('pages/homePage/homePage');
      });
    }
  });
})
let tabbars
describe('tab栏跳转测试', () => {

  beforeAll(async () => {
    page = await miniProgram.reLaunch('/pages/homePage/homePage')
    await page.waitFor(500)
  }, 40000)

  afterAll(async () => {})
  // 首页到学情
  it('首页到学情', async () => {
    let currentPage = await miniProgram.currentPage()
    tabbars = await currentPage.$$('.custom-tab-bar-index--tab-bar-item')
    await tabbars[1].tap()
    await currentPage.waitFor(300)
    let currentPage1 = await miniProgram.currentPage()
    expect(currentPage1.path).toBe('pages/classStatus/classStatus');
  });
  // 学情到个人中心

  it('学情到个人中心', async () => {
    let currentPage = await miniProgram.currentPage()
    tabbars = await currentPage.$$('.custom-tab-bar-index--tab-bar-item')
    await tabbars[2].tap()
    await currentPage.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/users/users');
  });
  // 个人中心到学情
  it('个人中心到学情', async () => {
    let currentPage = await miniProgram.currentPage()
    await currentPage.waitFor(300)
    tabbars = await currentPage.$$('.custom-tab-bar-index--tab-bar-item')
    await tabbars[1].tap()
    await currentPage.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/classStatus/classStatus');
  });
  // 学情到首页
  it('学情到首页', async () => {
    let currentPage = await miniProgram.currentPage()
    tabbars = await currentPage.$$('.custom-tab-bar-index--tab-bar-item')
    await tabbars[0].tap()
    await currentPage.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/homePage/homePage');
  });
  // 首页到个人中心
  it('首页到个人中心', async () => {
    let currentPage = await miniProgram.currentPage()
    tabbars = await currentPage.$$('.custom-tab-bar-index--tab-bar-item')
    await tabbars[2].tap()
    await currentPage.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/users/users');
  });
  // 个人中心到首页
  it('个人中心到首页', async () => {
    let currentPage = await miniProgram.currentPage()
    tabbars = await currentPage.$$('.custom-tab-bar-index--tab-bar-item')
    await tabbars[0].tap()
    await currentPage.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/homePage/homePage');
  });

})

// 首页各跳转正确

describe('首页跳转正确', () => {

  beforeAll(async () => {
    page = await miniProgram.reLaunch('/pages/homePage/homePage')
    await page.waitFor(500)
  }, 40000)

  afterAll(async () => {})
  // 点击切换班级跳转到班级列表
  it('点击切换班级跳转到班级列表', async () => {
    const btnSwitch = await page.$('.idCard--btnSwitch')
    await btnSwitch.tap()
    await page.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/classList/classList');
  });
  // 点击作业跳转到作业列表
  it('点击作业跳转到作业列表', async () => {
    const btnSwitch = await page.$('.menuItem')
    await miniProgram.navigateBack()
    await btnSwitch.tap()
    await page.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/homeWork/homeWork');
  });
})

// 点击反馈流程跳转正确
describe('点击反馈流程跳转正确', () => {

  beforeAll(async () => {}, 40000)

  afterAll(async () => {
    await miniProgram.disconnect()
  })
  // 从个人中心跳转到反馈页面
  it('点击反馈按钮跳转到反馈页面', async () => {
    page = await miniProgram.reLaunch('/pages/help/help')
    const btnSwitch = await page.$('.btn_item')
    await btnSwitch.tap()
    await page.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/help/feedback/feedback');
  });
  // 按键跳转到功能异常页面
  it('按键跳转到功能异常页面', async () => {
    currentPage = await miniProgram.currentPage()
    const btnSwitchs = await currentPage.$$('.cell--cell')
    await btnSwitchs[0].tap()
    await page.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/help/feedback/bug');
  });
  // 按键跳转到产品建议
  it('按键跳转到产品建议页面', async () => {
    await miniProgram.navigateBack()
    currentPage = await miniProgram.currentPage()
    const btnSwitchs = await currentPage.$$('.cell--cell')
    await btnSwitchs[1].tap()
    await page.waitFor(300)
    currentPage = await miniProgram.currentPage()
    expect(await currentPage.path).toBe('pages/help/feedback/advice');
  });
})