import React from 'react';
import config from '../config.json';

export const MainPage = () => {
	return (
		<article className='flex flex-col gap-10 pt-4'>
			<h1 className='pb-8 text-5xl font-bold'>{config.title}</h1>
			<section>
				<h2 className='pb-4 text-3xl font-bold'>About Me</h2>
				<p>{config.description}</p>
			</section>
			<section>
				<h2 className='pb-4 text-3xl font-bold'>Projects</h2>
				{config.work.items.length === 0 && (
					<>
						<div className='grid w-full place-items-center border-2 border-dashed border-gray-200 p-5 text-xl'>
							{config.work.defaultText}
						</div>
					</>
				)}
				<div className='grid grid-cols-2'>
					{config.work.items.map((item, index) => {
						return (
							<article
								key={index}
								className='grid border border-gray-200'
							>
								<img
									src={item.image}
									alt={item.image_alt}
									className='h-20 w-full '
								/>
								<div className='mt-[-5rem] flex h-20 w-full bg-gray-900 bg-opacity-40'>
									<section>
										<h3 className='mt-auto grid pl-5 pb-2 text-2xl font-bold'>
											{item.title}
										</h3>
									</section>
								</div>
								<div className='p-5 pt-1'>
									<section>
										<p className='pb-2'>
											{item.description}
										</p>
										<a
											className='cursor-pointer bg-gray-800 p-3 pt-2 pb-2 hover:bg-gray-700'
											href={item.link}
											target={'work_blank_' + index}
										>
											View Project
										</a>
									</section>
								</div>
							</article>
						);
					})}
				</div>
			</section>
			<section>
				<h2 className='pb-4 text-3xl font-bold'>Technologies</h2>
				<p>Bellow are some of the Technologies I use.</p>
				{config.tech.items.length === 0 && (
					<>
						<div className='grid w-full place-items-center border-2 border-dashed border-gray-200 p-5 text-xl'>
							{config.tech.defaultText}
						</div>
					</>
				)}
				<ul className='columns-[3] pt-2'>
					{config.tech.items.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</section>
			<section>
				<h2 className='pb-4 text-3xl font-bold'>Find me</h2>
				{config.contact.items.length === 0 && (
					<>
						<div className='grid w-full place-items-center border-2 border-dashed border-gray-200 p-5 text-xl'>
							{config.contact.defaultText}
						</div>
					</>
				)}
				{config.contact.items.map((item, index) => {
					return (
						<p className='pr-2' key={index}>
							<b>{item.text}: </b>
							{item.link && (
								<a
									className='underline'
									href={item.link}
									target={'contact_blank_' + index}
								>
									{item.value}
								</a>
							)}
							{!item.link && <span>{item.value}</span>}
						</p>
					);
				})}
			</section>
		</article>
	);
};
