'use client'

import { useMounted } from '@mantine/hooks'
import { cn, DaisyThemeName } from '@trenaryja/ui'
import daisyThemes from 'daisyui/theme/object'
import { useTheme } from 'next-themes'
import { FaPalette } from 'react-icons/fa6'
import * as R from 'remeda'

export const themes = R.pipe(
	daisyThemes,
	R.entries(),
	R.map(([name, theme]) => ({
		name: name as DaisyThemeName,
		mode: theme['color-scheme'] as 'dark' | 'light',
	})),
	R.sortBy(R.prop('mode'), R.prop('name')),
)

export const ThemePicker = () => {
	const mounted = useMounted()
	const { resolvedTheme, setTheme } = useTheme()

	if (!mounted) return <div className='loading' />

	return (
		<div className='dropdown dropdown-end'>
			<label tabIndex={0} className='btn btn-square btn-ghost'>
				<FaPalette />
			</label>
			<ul
				tabIndex={0}
				className='dropdown-content overflow-auto max-h-[50dvh] menu grid p-2 border border-current/25 rounded-box frosted-glass'
			>
				{themes.map((x) => (
					<li key={x.name}>
						<button
							className={cn({ 'before:content-["⦿"]': resolvedTheme === x.name })}
							onClick={() => setTheme(resolvedTheme === x.name ? 'system' : x.name)}
						>
							{x.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
