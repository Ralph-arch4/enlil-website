import { chromium } from 'playwright'
import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'

const BASE = 'http://localhost:3000'
const OUT = './screenshots'

const shots = [
  { name: 'desktop-hero',     width: 1440, height: 900,  scrollY: 0 },
  { name: 'desktop-services', width: 1440, height: 900,  scrollY: 900 },
  { name: 'desktop-contact',  width: 1440, height: 900,  scrollY: 1800 },
  { name: 'mobile-hero',      width: 390,  height: 844,  scrollY: 0 },
  { name: 'mobile-services',  width: 390,  height: 844,  scrollY: 844 },
  { name: 'mobile-contact',   width: 390,  height: 844,  scrollY: 2500 },
]

async function run() {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true })

  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  for (const shot of shots) {
    console.log(`📸  ${shot.name}  (${shot.width}×${shot.height})`)
    await page.setViewportSize({ width: shot.width, height: shot.height })
    await page.goto(BASE, { waitUntil: 'networkidle' })

    // Give Three.js / animations time to settle
    await page.waitForTimeout(3000)

    if (shot.scrollY > 0) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), shot.scrollY)
      await page.waitForTimeout(2000)
    }

    await page.screenshot({
      path: `${OUT}/${shot.name}.png`,
      fullPage: false,
    })
    console.log(`   ✓  saved ${OUT}/${shot.name}.png`)
  }

  await browser.close()
  console.log('\nAll screenshots saved to', OUT)
}

run().catch((err) => { console.error(err); process.exit(1) })
