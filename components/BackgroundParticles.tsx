'use client'

import { initParticlesEngine, Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { formatHex, oklch } from 'culori'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const getColor = () =>
	formatHex(oklch(getComputedStyle(document.documentElement).getPropertyValue('--color-base-content')))!

export const BackgroundParticles = () => {
	const [init, setInit] = useState(false)
	const [color, setColor] = useState('#000')
	const { resolvedTheme } = useTheme()

	useEffect(() => {
		initParticlesEngine(async (engine) => await loadSlim(engine)).then(() => setInit(true))
	}, [])

	useEffect(() => {
		setColor(() => getColor())
	}, [resolvedTheme])

	if (!init) return <></>

	return (
		<Particles
			className='z-[-1] opacity-50'
			options={{
				particles: {
					color: { value: color },
					links: { enable: true, distance: 150, color: color },
					move: { enable: true, random: true },
					size: { value: 1 },
					number: { density: { enable: true }, value: 150 },
				},
			}}
		/>
	)
}
