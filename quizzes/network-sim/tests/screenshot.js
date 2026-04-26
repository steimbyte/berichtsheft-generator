const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  await page.goto('file:///home/steimer/workspace/quizzes/network-sim/index.html');
  await page.waitForTimeout(3000);
  
  // Main interface
  await page.screenshot({ path: 'screenshots/01-main.png', fullPage: true });
  console.log('✓ 01-main.png');
  
  // VLAN Panel - click button instead
  await page.click('#btnVlan');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/02-vlan.png', fullPage: true });
  console.log('✓ 02-vlan.png');
  
  // Health Dashboard
  await page.click('#btnHealth');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/03-health.png', fullPage: true });
  console.log('✓ 03-health.png');
  
  // Network Summary - find button
  await page.evaluate(() => {
    const btns = document.querySelectorAll('button[onclick*="NetworkSummary"], button[onclick*="Summary"]');
    if (btns[0]) btns[0].click();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/04-summary.png', fullPage: true });
  console.log('✓ 04-summary.png');
  
  // Security Audit
  await page.evaluate(() => { const f = window.openSecurityAudit; if (f) f(); });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/05-security.png', fullPage: true });
  console.log('✓ 05-security.png');
  
  // Syslog
  await page.evaluate(() => { const f = window.openSyslog; if (f) f(); });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/06-syslog.png', fullPage: true });
  console.log('✓ 06-syslog.png');
  
  await browser.close();
  console.log('\n✅ Screenshots erstellt!');
})();
