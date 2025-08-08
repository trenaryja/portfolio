import { ContactForm } from '@/components'
import { projects } from '@/data'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { FaChevronDown, FaGithub, FaLink } from 'react-icons/fa6'
import logo from './icon.svg'

const HashHeading = ({ id, className, ...props }: ComponentProps<'a'> & { id: string }) => (
	<Link
		id={id}
		href={`#${id}`}
		className={cn('block text-3xl font-bold py-5 hover:[&::after]:content-["_#"]', className)}
		{...props}
	/>
)

export default async function HomePage() {
	return (
		<>
			<section className='grid gap-10 place-items-center md:grid-flow-col self-center'>
				<div className='grid place-items-center gap-5 text-center'>
					<h1 className='text-5xl font-bold'>Hi, I'm Justin!</h1>
					<div className='relative inline-block size-20'>
						<Image src={logo} alt='logo' className={cn('invisible')} />
						<div
							className='bg-primary absolute inset-0 mask-center mask-contain mask-no-repeat'
							style={{ maskImage: `url(${logo.src})`, WebkitMaskImage: `url(${logo.src})` } as React.CSSProperties}
						/>
					</div>
					<h2 className='text-3xl font-bold'>Welcome to my portfolio!</h2>
				</div>
				<div className='grid-stack rounded-full overflow-hidden max-w-sm *:object-contain *:aspect-square *:transition-opacity'>
					<img src='/faces/bitmoji.webp' className='rotate-y-180 [animation:fade-a_4s_linear_infinite]' />
					<img src='/faces/justin.webp' className='[animation:fade-b_4s_linear_infinite]' />
				</div>
			</section>

			<section>
				<HashHeading id='about'>About</HashHeading>
				<p>
					I am a full stack software engineer with experience working in the government contracting industry. My
					interests in software are wide, ranging from backend technologies such as GraphQL, to front end technologies
					such as React and React Native. Having built multiple personal web applications and npm packages, I also have
					experience working with enterprise-scale web applications, and both RESTful and GraphQL APIs. Overall Im
					looking for opportunities to continue learning new technologies and make meaningful contributions to a team at
					the company I work for!
				</p>
			</section>

			<section>
				<HashHeading id='projects'>Projects</HashHeading>
				<div className='grid md:grid-cols-2 gap-5'>
					{projects.map((project) => (
						<div
							key={project.title}
							className='h-fit border border-current/25 frosted-glass rounded-box overflow-hidden transition-all hover:scale-105'
						>
							<img src={project.links.img} alt={project.title} />
							<div className='p-5 grid gap-5'>
								<div tabIndex={0} className='collapse'>
									<div className='collapse-title flex gap-5 justify-center items-center'>
										<h3 className='text-xl font-semibold text-center'>{project.title}</h3>
										<FaChevronDown />
									</div>
									<div className='collapse-content grid gap-5'>
										<p>{project.description}</p>
										<div className='flex flex-wrap gap-2 justify-center'>
											{project.tech?.map((tech) => (
												<span key={tech.name} className='badge badge-outline p-2 flex items-center gap-2'>
													{tech.name}
													<tech.icon />
												</span>
											))}
										</div>
									</div>
								</div>
								<div className='flex justify-center gap-5'>
									<Link target='_blank' href={project.links.source} className='btn'>
										Source <FaGithub />
									</Link>
									<Link target='_blank' href={project.links.visit} className='btn'>
										Visit <FaLink />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section>
				<HashHeading id='contact'>Contact</HashHeading>
				<ContactForm />
			</section>
		</>
	)
}
