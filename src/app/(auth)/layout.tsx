'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';

interface AuthLayoutProps {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	const pathname = usePathname();
	return (
		<main className='bg-neutral-100 min-h-screen'>
			<div className='mx-auto max-w-screen-2xl p-4'>
				<nav className='flex justify-between items-center'>
					<div className='flex items-center gap-1'>
						<Image src='/logo.svg' alt='logo' width={24} height={24} />
						<h3 className='font-semibold text-lg'>Collabify</h3>
					</div>
					<div className='flex items-center gap-2'>
						<Link
							href={pathname === '/sign-in' ? '/sign-up' : '/sign-in'}
							className={buttonVariants({ variant: 'secondary' })}>
							{pathname === '/sign-in' ? 'Sign Up' : 'Login'}
						</Link>
					</div>
				</nav>
				<div className='flex flex-col items-center justify-center pt-4 md:pt-14'>
					{children}
				</div>
			</div>
		</main>
	);
}
