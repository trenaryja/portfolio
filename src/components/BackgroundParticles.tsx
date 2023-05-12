import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'

export const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => await loadFull(engine), [])

  return (
    <Particles
      init={particlesInit}
      options={{
        style: { opacity: '0.25' },
        fpsLimit: 60,
        particles: {
          links: { enable: true, distance: 150 },
          move: { enable: true, random: true },
          size: { value: 1 },
          number: { density: { enable: true, area: 100 }, value: 10 },
        },
      }}
    />
  )
}
