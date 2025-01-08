import { FcGoogle } from 'react-icons/fc';

import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { DottedSeparator } from '@/components/dotted-separator';
import { Button, buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';

const formSchema = z
	.object({
		name: z.string().min(1, 'Required'),
		email: z.string().email(),
		password: z.string().min(6, 'Minimum of 6 characters'),
		confirm_password: z.string(),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: 'Passwords must match',
		path: ['confirm_password'],
	});

export const SignUpCard = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirm_password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log({ values });
	};

	return (
		<Card className='w-full h-full md:w-[487px] border-none shadow-none'>
			<CardHeader className='flex items-center justify-center text-center p-7'>
				<CardTitle className='text-2xl'>Sign Up</CardTitle>
				<CardDescription>
					By signing up, you agree to our{' '}
					<Link href='/privacy'>
						<span className='text-blue-700'>Privacy Policy</span>
					</Link>{' '}
					and{' '}
					<Link href='/terms-and-condition'>
						<span className='text-blue-700'>Terms of Service</span>
					</Link>
				</CardDescription>
			</CardHeader>
			<div className='px-7'>
				<DottedSeparator />
			</div>
			<CardContent className='p-7'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							name='name'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type='text'
											placeholder='Enter your name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='email'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type='email'
											placeholder='Enter your email address'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='password'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type='password'
											placeholder='Enter your password'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='confirm_password'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type='password'
											placeholder='Confirm your password'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button disabled={false} size='lg' className='w-full'>
							Login
						</Button>
					</form>
				</Form>
			</CardContent>
			<div className='px-7'>
				<DottedSeparator />
			</div>
			<CardContent className='p-7 flex flex-col gap-y-4'>
				<Button
					disabled={false}
					variant={'secondary'}
					size={'lg'}
					className='w-full'>
					<FcGoogle className='mr-2 size-5' />
					Login with Google
				</Button>
			</CardContent>
			<div className='px-7'>
				<DottedSeparator />
			</div>
			<CardContent className='p-7 flex items-center justify-center'>
				<p>Already have an account?</p>
				<Link href='/sign-in' className={buttonVariants({ variant: 'link' })}>
					Login
				</Link>
			</CardContent>
		</Card>
	);
};