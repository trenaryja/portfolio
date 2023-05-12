import emailjs from '@emailjs/browser'
import { FormEvent } from 'react'

export function scrollTo(id: string): void {
  const element = document.getElementById(id)
  const top = element?.getBoundingClientRect().top ?? 0 + window.pageYOffset

  window.scrollTo({
    top: top,
    behavior: 'smooth',
  })
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export async function sendEmail(e: FormEvent) {
  return await emailjs.sendForm(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    e.target as HTMLFormElement,
    process.env.NEXT_PUBLIC_USER_ID,
  )
}

export function getFormData(e: FormEvent) {
  return [...(e.target as HTMLFormElement)]
    .filter((x) => x.hasAttribute('name'))
    .reduce<Record<string, string>>((result, x) => {
      result[x.getAttribute('name') ?? '_'] = (x as HTMLInputElement).value
      return result
    }, {})
}
