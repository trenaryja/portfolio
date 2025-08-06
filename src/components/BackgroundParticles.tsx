import { initParticlesEngine, Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useState } from 'react'

export const BackgroundParticles = () => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		initParticlesEngine(async (engine) => await loadSlim(engine)).then(() => setInit(true))
	}, [])

	if (!init) return <></>

	return (
		<Particles
			options={{
				style: { opacity: '0.25' },
				fpsLimit: 60,
				particles: {
					links: { enable: true, distance: 150 },
					move: { enable: true, random: true },
					size: { value: 1 },
					number: { density: { enable: true }, value: 150 },
				},
			}}
		/>
	)
}
