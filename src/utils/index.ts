import emailjs from '@emailjs/browser'
import { FormEvent } from 'react'

export * from './theme'

export const scrollTo = (id: string | undefined) => {
  if (!id) return
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
  window.addEventListener('scrollend', () => (window.location.hash = id), { once: true })
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  window.addEventListener('scrollend', () => (window.location.hash = ''), { once: true })
}

export const sendEmail = async (e: FormEvent) => {
  return await emailjs.sendForm(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    e.target as HTMLFormElement,
    process.env.NEXT_PUBLIC_USER_ID,
  )
}

export const getFormData = (e: FormEvent) => {
  return [...(e.target as HTMLFormElement)]
    .filter((x) => x.hasAttribute('name'))
    .reduce<Record<string, string>>((result, x) => {
      result[x.getAttribute('name') ?? '_'] = (x as HTMLInputElement).value
      return result
    }, {})
}
