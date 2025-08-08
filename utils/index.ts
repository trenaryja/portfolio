import emailjs from '@emailjs/browser'
import { useWindowScroll } from '@mantine/hooks'
import { ClassValue, clsx } from 'clsx'
import { FormEvent } from 'react'
import { twMerge } from 'tailwind-merge'

export type RemoveIndexSignature<T> = {
	[K in keyof T as string extends K ? never : K]: T[K]
}

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const sendEmail = async (e: FormEvent) => {
	return await emailjs.sendForm(
		process.env.NEXT_PUBLIC_SERVICE_ID!,
		process.env.NEXT_PUBLIC_TEMPLATE_ID!,
		e.target as HTMLFormElement,
		process.env.NEXT_PUBLIC_USER_ID,
	)
}

export function useScrollProgress() {
	const [scroll] = useWindowScroll()
	if (typeof window === 'undefined') return 0
	const { scrollHeight, clientHeight } = document.documentElement
	const maxScroll = scrollHeight - clientHeight
	return maxScroll > 0 ? scroll.y / maxScroll : 0
}
