import emailjs from '@emailjs/browser'
import { useWindowScroll } from '@mantine/hooks'
import { FormEvent } from 'react'

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const sendEmail = async (e: FormEvent) => {
	return await emailjs.sendForm(
		process.env.NEXT_PUBLIC_SERVICE_ID!,
		process.env.NEXT_PUBLIC_TEMPLATE_ID!,
		e.target as HTMLFormElement,
		process.env.NEXT_PUBLIC_USER_ID,
	)
}

export const useScrollProgress = () => {
	const [scroll] = useWindowScroll()
	if (typeof window === 'undefined') return 0
	const { scrollHeight, clientHeight } = document.documentElement
	const maxScroll = scrollHeight - clientHeight
	return maxScroll > 0 ? scroll.y / maxScroll : 0
}

export const urlToScreenshotPath = (url: string): `${string}.webp` => {
	const { hostname, pathname } = new URL(url)
	return `/screenshots/${hostname}${pathname.replace(/\/+/g, '_').replace(/^_+|_+$/g, '')}.webp`
}
