'use client'

import { cn, sendEmail } from '@/utils'
import { FormEvent, useState } from 'react'
import { FaCheck, FaPaperPlane } from 'react-icons/fa6'

export const ContactForm = () => {
	const [submissionState, setSubmissionState] = useState<'ready' | 'sending' | 'sent' | 'error'>('ready')

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		try {
			setSubmissionState('sending')
			await sendEmail(e)
			setSubmissionState('sent')
		} catch (error) {
			setSubmissionState('error')
			console.error(error)
		} finally {
			setTimeout(() => setSubmissionState('ready'), 3000)
		}
	}

	const buttonMeta: Record<typeof submissionState, { message: string; icon?: React.ReactNode; className?: string }> = {
		ready: { message: 'Send', icon: <FaPaperPlane /> },
		sending: { message: 'Sending', icon: <span className='loading loading-dots' /> },
		sent: { message: 'Sent', icon: <FaCheck />, className: 'btn-success' },
		error: { message: 'Something went wrong', className: 'btn-error' },
	}

	return (
		<form
			className='grid md:grid-cols-2 gap-5 p-5 frosted-glass border rounded-box border-current/25'
			onSubmit={handleSubmit}
		>
			<input className='input bg-transparent w-full' required name='firstName' placeholder='First Name' />
			<input className='input bg-transparent w-full' required name='lastName' placeholder='Last Name' />
			<input className='input bg-transparent w-full' required name='email' placeholder='Email' />
			<input className='input bg-transparent w-full' name='phoneNumber' placeholder='Phone Number' />
			<textarea
				className='textarea bg-transparent w-full col-span-full'
				required
				name='message'
				placeholder='Message'
			/>
			<button
				type='submit'
				disabled={submissionState !== 'ready'}
				className={cn('btn w-fit place-self-center col-span-full', buttonMeta[submissionState].className)}
			>
				{buttonMeta[submissionState].message}
				{buttonMeta[submissionState].icon}
			</button>
		</form>
	)
}
