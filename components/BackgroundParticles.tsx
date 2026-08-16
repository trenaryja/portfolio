'use client'

import type { ParticlesPluginRegistrar } from '@tsparticles/react'
import { Particles, ParticlesProvider, useParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { formatHex, oklch } from 'culori'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const getColor = () =>
	formatHex(oklch(getComputedStyle(document.documentElement).getPropertyValue('--color-base-content')))!

const register: ParticlesPluginRegistrar = async (engine) => {
	await loadSlim(engine)
}

const ParticlesLayer = () => {
	const { loaded } = useParticlesProvider()
	const [color, setColor] = useState('#000')
	const { resolvedTheme } = useTheme()

	useEffect(() => {
		// Read the CSS var after the theme class has applied to <html>, so setState runs
		// in a rAF callback (post-commit) rather than synchronously in the effect body.
		const frame = requestAnimationFrame(() => setColor(getColor()))
		return () => cancelAnimationFrame(frame)
	}, [resolvedTheme])

	if (!loaded) return null

	return (
		<Particles
			className='z-[-1] opacity-50'
			options={{
				particles: {
					color: { value: color },
					links: { enable: true, distance: 150, color },
					move: { enable: true, random: true },
					size: { value: 1 },
					number: { density: { enable: true }, value: 150 },
				},
			}}
		/>
	)
}

export const BackgroundParticles = () => (
	<ParticlesProvider init={register}>
		<ParticlesLayer />
	</ParticlesProvider>
)
