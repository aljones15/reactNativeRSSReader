describe('Click on an Item', () => {
  before(async () => {
    await device.reloadReactNative();
  });
  
  it('should have an Rss List', async () => {
    await expect(element(by.id('RssList'))).toExist();
  });
 
  it('should have a Header', async () => {
    await expect(element(by.id('main_header'))).toExist();
  });

  it('should have a populated rss list', async () => {
    await expect(element(by.id('rss_list_populated'))).toExist();
  });
 
  it('should have an rss item', async () => {
    await expect(element(by.id('rss_list_2'))).toBeVisible();
  });
 
  it('should tap on the rss item', async () => {
    await element(by.id('rss_list_2')).longPress();
  });

  it('should see the item view', async () => {
    await expect(element(by.id('item_view'))).toBeVisible();
  });
  
})
