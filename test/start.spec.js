const {
  log
} = require('console')
const automator = require('miniprogram-automator')
const {
  default: MiniProgram
} = require('miniprogram-automator/out/MiniProgram')
const Path = require('path')
describe('打开小程序流程测试', () => {
  let miniProgram
  let page

  beforeAll(async () => {
    miniProgram = await automator.launch({
      cliPath: 'D:/微信web开发者工具/cli.bat',
      projectPath: Path.join(__dirname, '../'),
    })
    page = await miniProgram.reLaunch('/pages/start/poster')
    await page.waitFor(500)
  }, 40000)

  afterAll(async () => {
    await miniProgram.disconnect()
  })
  // 海报图有没有正确渲染
  it('海报图有没有正确渲染', async () => {
    // 本地有无海报图数据

    let data = await page.data()
    expect(data.postSrc).toBeTruthy();
    // 海报图渲染成功
    let post = await page.$(".poster")
    expect(await post.offset("left")).toBe(0);
    expect(await post.offset("top")).toBe(0);
    expect(await post.style('backgroundImage')).toBeTruthy();
  });
  // 本地是否有记录的判断
  it('本地是否有该数据', async () => {
    let classInfo = await page.data('currentClass')
     if(classInfo == {}){
        // 本地无数据是否正确跳转到引导页
      let guide = await miniProgram.currentPage()
        expect(guide.url).toBe('/pages/start/guide');
        // 引导页是否正确渲染
        let swipers = guide.$$('swiperItem')
        expect(swipers.length).toBe(await guide.data('guideList').length);
         // 第三页的身份选择按键是否渲染
         // 点击按键之后是否正确跳转，本地是否缓存对应数据
     }else{
      expect(await miniProgram.currentPage().url).toBe('/pages/homePage/homePage');
     }
  });

});