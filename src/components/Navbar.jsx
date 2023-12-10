import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Hamburger from '../assets/icon-hamburger.svg';
import CloseIcon from '../assets/icon-close.svg';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] =
		useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const listItems = [
		'Pricing',
		'Product',
		'About Us',
		'Careers',
		'Community',
	];
	function displayLists() {
		return listItems.map((item, index) => (
			<li key={index}>
				<a
					href='#'
					className='hover:text-darkGrayishBlue'
				>
					{item}
				</a>
			</li>
		));
	}

	return (
		<nav className='relative container mx-auto p-6'>
			<div className='relative flex items-center justify-between'>
				{/* Logo */}
				<div className='pt-2'>
					<img src={Logo} alt='' />
				</div>
				{/* Menu Items */}
				<ul className='hidden space-x-4 md:flex'>
					{displayLists()}
				</ul>
				{/* Button */}
				<button className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRed/75 md:block'>
					Get Started
				</button>

				{/* Hamburger and Close Icons */}
				<div
					className='md:hidden cursor-pointer'
					onClick={toggleMenu}
				>
					{isMenuOpen ? (
						<img src={CloseIcon} alt='' />
					) : (
						<img src={Hamburger} alt='' />
					)}
				</div>

				{/* Mobile Menu */}
				<ul
					className={`absolute bg-white p-6 ${
						isMenuOpen ? 'flex' : 'hidden'
					} flex-col items-center space-y-6 top-[180%] left-5 right-5 drop-shadow-lg font-medium text-darkBlue`}
				>
					{displayLists()}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
