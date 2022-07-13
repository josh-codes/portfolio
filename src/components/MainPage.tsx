import React from 'react';
import config from '../config.json';

export const MainPage = () => {
	return (
		<article className='flex flex-col gap-10 pt-4'>
			<section>
				<h1 className='font-bold text-5xl pb-8'>{config.title}</h1>
				<p>{config.description}</p>
			</section>
			<section>
				<h2 className='font-bold text-3xl pb-4'>My projects</h2>
				<p>Bellow are some of the projects I made.</p>
				{config.work.items.length === 0 && (<>
					<div className='w-full p-5 grid place-items-center text-xl'>
						{config.work.defaultText}
					</div>
				</>)}
				<div className='grid grid-cols-2'>
					{config.work.items.map((item, index) => {
						return (
							<article key={index} className='border-gray-200 border grid'>
								<img src={item.image} alt={item.image_alt} className='h-20 w-full '/>
								<div className='bg-gray-900 bg-opacity-40 h-20 w-full mt-[-5rem] flex'>
									<h3 className='font-bold text-2xl pl-5 pb-2 grid mt-auto'>{item.title}</h3>
								</div>
								<div className='p-5 pt-1'>
									<p className='pb-2'>{item.description}</p>
									<a className='p-3 pt-2 pb-2 cursor-pointer bg-gray-800 hover:bg-gray-700' href={item.link} target={'work_blank_'+index}>
										View Project
									</a>
								</div>
							</article>
						);
					})}
				</div>
			</section>
			<section>
				<h2 className='font-bold text-3xl pb-4'>Technologies</h2>
				<p>Bellow are some of the Technologies I use.</p>
				{config.tech.items.length === 0 && (<>
					<div className='w-full p-5 grid place-items-center text-xl'>
						{config.contact.defaultText}
					</div>
				</>)}
				<ul className='columns-[3] pt-2'>
					{config.tech.items.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						);
					})}
				</ul>
			</section>
			<section>
				<h2 className='font-bold text-3xl pb-4'>Find me</h2>
				{config.contact.items.length === 0 && (<>
					<div className='w-full p-5 grid place-items-center text-xl'>
						{config.contact.defaultText}
					</div>
				</>)}
				{config.contact.items.map((item, index) => {
					return (
						<div key={index} className='flex'>
							<label className='font-bold pr-2'>{item.text}:</label>
							{item.link && (<a className='underline' href={item.link} target={'contact_blank_'+index}>{item.value}</a>)}
							{!item.link && (<span>{item.value}</span>)}
						</div>
					);
				})}
			</section>
		</article>
	);
};