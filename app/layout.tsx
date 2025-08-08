import { BackgroundParticles, BackToTop, ThemePicker } from '@/components'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Rubik } from 'next/font/google'
import Link from 'next/link'
import type React from 'react'
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa6'
import './globals.css'

export const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Justin Trenary: Portfolio',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning className={`scroll-smooth sans ${rubik.className}`}>
			<body className='grid grid-rows-[auto_1fr_auto] gap-y-20 max-h-screen min-h-screen'>
				<ThemeProvider>
					<header className='z-10 flex items-center gap-5 justify-around full-bleed p-5'>
						<Link className='font-bold' href='#about'>
							About
						</Link>
						<Link className='font-bold' href='#projects'>
							Projects
						</Link>
						<Link className='font-bold' href='#contact'>
							Contact
						</Link>
						<ThemePicker />
					</header>

					<main className='full-bleed-container p-5 gap-y-20'>{children}</main>

					<footer className='flex flex-col full-bleed  p-5 place-items-center justify-center gap-5 md:gap-20 md:flex-row'>
						<span className='text-center'>Made with 🤍 by Justin Trenary</span>
						<div className='flex gap-5 text-2xl'>
							<Link href='https://github.com/trenaryja'>
								<FaGithub />
							</Link>
							<Link href='https://www.linkedin.com/in/justintrenary/'>
								<FaLinkedin />
							</Link>
							<Link href='https://codepen.io/jtrenary'>
								<FaCodepen />
							</Link>
						</div>
					</footer>

					<BackToTop />
					<BackgroundParticles />
				</ThemeProvider>
			</body>
		</html>
	)
}
