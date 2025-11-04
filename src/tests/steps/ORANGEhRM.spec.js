import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

let webContext;

test.beforeAll('test', async ({ browser }) => {
 const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' );
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
 await context.storageState({path: 'state.json'})//STORE THE STATE

 webContext=await browser.newContext({storageState:'state.json'})//USE THE STORED STATE
  
});
test('test 2',async()=>{
  const page=await webContext.newPage(); 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('bharathi');
  await page.locator('.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('aUTOMATION tESTER');
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Enabled' }).locator('span').click();
  await page.getByRole('button', { name: 'Search' }).click();

})

test('test3',async()=>{
const page=await webContext.newPage(); 
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
await page.tohaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
//await page.tohaveURL('openSou')
await page.locator("button[type='submit']").click();

})


test('test4',async()=>{

await page.route('https://rahulshettyacademy.com/client/#/dashboard/myorders',route=>{
})

})