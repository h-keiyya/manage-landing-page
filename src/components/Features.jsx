const Features = () => {
	const featuresList = [
		{
			id: '01',
			title: 'Track company-wide progress',
			text: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
		},
		{
			id: '02',
			title: 'Advanced built-in reports',
			text: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
		},
		{
			id: '03',
			title: ' Everything you need in one place',
			text: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
		},
	];

	return (
		<div>
			<div className='container mx-auto p-6 flex flex-col mt-10 space-y-12 md:space-y-0 md:flex-row'>
				<div className='flex flex-col items-center space-y-12 md:w-1/2'>
					<h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
						What’s different about Manage?
					</h2>
					<p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
						Manage provides all the functionality
						your team needs, without the
						complexity. Our software is
						tailor-made for modern digital product
						teams.
					</p>
				</div>
				<div className='flex flex-col space-y-8 md:w-1/2'>
					{featuresList.map((list, index) => (
						<div
							className='flex flex-col space-y-7 md:space-y-0 md:space-x-6'
							key={index}
						>
							{/* Heading  */}
							<div className='rounded-l-full bg-brightRed/10 md:bg-transparent'>
								<div className='flex items-center space-x-2'>
									<div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
										{list.id}
									</div>
									<h3 className='text-base font-bold md:text-lg'>
										{list.title}
									</h3>
								</div>
							</div>

							<div>
								<p className='text-darkGrayishBlue md:ml-6'>
									{list.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
