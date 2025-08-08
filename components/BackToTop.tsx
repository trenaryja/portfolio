'use client'

import { useScrollProgress } from '@/utils'
import { FaArrowUp } from 'react-icons/fa6'

export const BackToTop = () => {
	const progress = useScrollProgress()

	if (progress < 0.1) return null

	return (
		<div className='fixed z-10 bottom-4 right-4'>
			<button
				className='btn btn-square relative overflow-hidden'
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				<div className='absolute inset-0 bg-current/10' style={{ scale: progress }} />
				<FaArrowUp />
			</button>
		</div>
	)
}
