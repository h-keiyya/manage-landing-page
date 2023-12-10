import Button from './Button';
import IntroSvg from '../assets/illustration-intro.svg';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='container flex flex-col-reverse md:flex-row mx-auto items-center p-6 mt-10'>
				<div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
					<h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
						Bring everyone together to build
						better products.
					</h1>
					<p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
						Manage makes it simple for software
						teams to plan day-to-day tasks while
						keeping the larger team goals in view.
					</p>
					<div className='flex justify-center md:justify-start'>
						<Button />
					</div>
				</div>
				<div className='md:w-1/2'>
					<img src={IntroSvg} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
