import { test, expect, Page } from '@playwright/test';
import {HomePage} from '../src/pages/home.page'

test.describe("Bizview",()=>{
  test.setTimeout(12000);
  let page: Page
  
  test.beforeEach(async ({browser}) => {
    test.slow();
    page=await browser.newPage();
     await page.goto("https://insightsoftware.com/bizview/");
    })
    
    
    test("Verify Integrations Section on Bizvi ",async ({}) => {
      const home = new HomePage(page);
      await home.VerifyLogo();
      await home.NavigateSubNavBar('Integrations');
      await home.NavigateIntegratswithTab('infor');
      await home.VerifyLinkNavigation('div[id="infor"] ul a','https://insightsoftware.com/lawson/');
      await home.NavigateIntegratswithTab('microsoft');
      await home.VerifyIntegratswithTabContent('microsoft');
      await home.NavigateIntegratswithTab('sap');
      await home.VerifyIntegratswithTabContent('sap');
      await home.NavigateIntegratswithTab('oracle');
      await home.VerifyIntegratswithTabContent('oracle');
      await home.NavigateIntegratswithTab('deltek');
      await home.VerifyIntegratswithTabContent('deltek');

    });
});
