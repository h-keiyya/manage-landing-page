import {
	Splide,
	SplideSlide,
} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Ali from '../assets/avatar-ali.png';
import Anisha from '../assets/avatar-anisha.png';
import Richard from '../assets/avatar-richard.png';
import Shanai from '../assets/avatar-shanai.png';

const Testimonials = () => {
	return (
		<div className='container max-w-6xl p-6 mx-auto mt-32 text-center'>
			<h2 className='text-4xl font-bold text-center'>
				What they’ve said
			</h2>
			{/* Testimonials Slider  */}
			<Splide
				options={{
					rewind: true,
					gap: '1rem',
					perPage: 3,
					breakpoints: {
						580: {
							perPage: 1,
						},
						780: {
							perPage: 2,
						},
					},
				}}
				className='grid'
			>
				{/* Testimonial 1  */}
				<SplideSlide className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray my-20'>
					<img
						src={Anisha}
						className='w-16 -mt-14'
						alt=''
					/>
					<h5 className='text-lg font-bold'>
						Anisha Li
					</h5>
					<p className='text-sm text-darkGrayishBlue'>
						“Manage has supercharged our team’s
						workflow. The ability to maintain
						visibility on larger milestones at all
						times keeps everyone motivated.”
					</p>
				</SplideSlide>
				{/* Testimonial 2  */}
				<SplideSlide className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray my-20'>
					<img
						src={Ali}
						className='w-16 -mt-14'
						alt=''
					/>
					<h5 className='text-lg font-bold'>
						Ali Bravo
					</h5>
					<p className='text-sm text-darkGrayishBlue'>
						“We have been able to cancel so many
						other subscriptions since using
						Manage. There is no more cross-channel
						confusion and everyone is much more
						focused.”
					</p>
				</SplideSlide>
				{/* Testimonial 3  */}
				<SplideSlide className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray my-20'>
					<img
						src={Richard}
						className='w-16 -mt-14'
						alt=''
					/>
					<h5 className='text-lg font-bold'>
						Richard Watts
					</h5>
					<p className='text-sm text-darkGrayishBlue'>
						“Manage allows us to provide structure
						and process. It keeps us organized and
						focused. I can’t stop recommending
						them to everyone I talk to!”
					</p>
				</SplideSlide>
				{/* Testimonial 4 */}
				<SplideSlide className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray my-20'>
					<img
						src={Shanai}
						className='w-16 -mt-14 z-10'
						alt=''
					/>
					<h5 className='text-lg font-bold'>
						Shanai Gough
					</h5>
					<p className='text-sm text-darkGrayishBlue'>
						“Their software allows us to track,
						manage and collaborate on our projects
						from anywhere. It keeps the whole team
						in-sync without being intrusive.”
					</p>
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Testimonials;
