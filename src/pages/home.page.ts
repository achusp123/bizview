import { Locator, Page, expect } from "@playwright/test";

export class HomePage {
	constructor(public page: Page) {}

   public async VerifyLogo()	{
      await this.page.waitForLoadState('networkidle');
      expect (await this.page.isVisible('//div[@class="insightsoftware-logo"]//img[@alt="insightsoftware logo"]')).toBeTruthy();
      console.log("Logo verified successfully");
      
   }
   public async NavigateSubNavBar(value : string)	{
      const locator=this.page.locator('//div[@id="sub-navbar"]/ul/li/a[text()="'+value+'"]');
      await locator.waitFor({ state: "attached" });
      await locator.click();
      console.log('Navigated to '+value+' successfully');
   }
   public async NavigateIntegratswithTab(value : string)	{
      
      const locator=this.page.locator('a[role="tab"][href="#'+value+'"]');
      await locator.waitFor({ state: "attached" });
      await locator.click();
      console.log('Navigated to Integrats with Tab '+value+' successfully');
   }
   public async VerifyIntegratswithTabContent(value : string)	{
      
      const ele =this.page.locator('div[id="'+value+'"] h4 a')
      expect(ele.isVisible).toBeTruthy();
      console.log('Verified Integrated with Tab for '+(await ele.innerText()).toString() );
      
   }
   public async VerifyLinkNavigation(locator : string, url : string)	{
      
      this.page.locator(locator).click();
      await this.page.waitForLoadState('networkidle');
      await expect (this.page).toHaveURL(url);
      console.log('Link Navigation verified' );
      await this.page.goBack({waitUntil: 'networkidle',timeout: 60000});
      
   }

   }
