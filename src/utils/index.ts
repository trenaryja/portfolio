import emailjs from '@emailjs/browser'
import { FormEvent } from 'react'

export * from './theme'

export const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  const top = element?.getBoundingClientRect().top ?? 0 + window.pageYOffset

  window.scrollTo({
    top: top,
    behavior: 'smooth',
  })
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
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
