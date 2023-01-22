const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://app-staging.youshd.com/login');

  const select_flag = await page.waitForXPath('//*[@id="root"]/div/div/div[1]/div[2]/div[2]')
  await select_flag.click()
  
  const select_flag_search = await page.waitForXPath('//*[@id="root"]/div/div/div[1]/div[2]/div[2]/ul/li[1]/input')
  await select_flag_search.click()
  await select_flag_search.type("india")

  const select_flag_india = await page.waitForXPath('//*[@id="root"]/div/div/div[1]/div[2]/div[2]/ul/li[3]')
  await select_flag_india.click()

  const select_phone_input = await page.waitForXPath('//*[@id="root"]/div/div/div[1]/div[2]/input')
  await select_phone_input.click()
  await select_phone_input.type('1135567550')
  await page.screenshot({path: 'example1.png'});

  const select_button = await page.waitForXPath('//*[@id="root"]/div/div/div[2]/button[2]')
  await select_button.click()

  const sel_otp1 = await page.waitForXPath('//*[@id="otp-error"]/div/div[1]/input')
  await sel_otp1.click()
  await sel_otp1.type('123456')
  await page.screenshot({path: 'example.png'});

  const sel_welcome_button = await page.waitForXPath('//*[@id="root"]/div/div/div/div[3]/button')
  await sel_welcome_button.click()
  await page.screenshot({path: 'example2.png'});

  const sel_shop_button = await page.waitForXPath('//*[@id="root"]/div/div/div/div[3]/button')
  await sel_shop_button.click()
  await page.screenshot({path: 'example3.png'});

  const sel_post_button = await page.waitForXPath('//*[@id="root"]/div/div/div/div[3]/button')
  await sel_post_button.click()
  await page.screenshot({path: 'example4.png'});

  const sel_earn_button = await page.waitForXPath('//*[@id="root"]/div/div/div/div[3]/button')
  await sel_earn_button.click()
  
  console.log('before waiting');
await page.evaluate(async() => {
  setTimeout(function(){
      console.log('waiting');
  }, 5000)
});
console.log('after waiting');

const con_btn = await page.waitForXPath('//*[@id="root"]/div/div/div[4]/button[2]')
await con_btn.click()

  
})();

