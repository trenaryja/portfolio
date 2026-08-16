import { projects } from '@/data'
import { urlToScreenshotPath } from '@/utils'
import { mkdir } from 'fs/promises'
import { dirname, join } from 'path'
import puppeteer from 'puppeteer'

const scale = 75

async function screenshotAll() {
	const baseDir = join(process.cwd(), 'public')
	const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })

	for (const project of projects) {
		try {
			const url = project.links.visit
			const imgPath = join(baseDir, urlToScreenshotPath(project.links.visit))
			console.log(`📸 Capturing ${url} -> ${imgPath}`)
			const page = await browser.newPage()
			await page.setViewport({ width: 16 * scale, height: 9 * scale })
			const context = browser.defaultBrowserContext()
			await context.overridePermissions(url, ['geolocation'])
			await page.setGeolocation({ latitude: 40.7418, longitude: -73.9893 }) // New York
			await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 })
			await mkdir(dirname(imgPath), { recursive: true })
			await page.screenshot({ path: imgPath })
			await page.close()
		} catch (err) {
			console.error(`❌ Failed to capture ${project.title}`, err)
		}
	}

	await browser.close()
	console.log('✅ Done capturing screenshots')
}

screenshotAll()
