"use client";

import { useState } from "react";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";

export default function DialogModal() {
	const [open, setOpen] = useState(true);

	return (
		<div className="absolute top-0 left-0 right-0 mx-auto w-fit pt-6">
			{/* <button
				onClick={() => setOpen(true)}
				className=" rounded-md bg-[#C82A5A]/10 px-2.5 py-1.5 text-sm font-semibold text-[#C82A5A] inset-ring inset-ring-[#C82A5A]/5 hover:bg-[#C82A5A]/20"
			>
				open welcome message
			</button> */}
			<Dialog open={open} onClose={setOpen} className="relative z-10">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
				/>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<DialogPanel
							transition
							className="relative transform overflow-hidden rounded-lg bg-white/20 backdrop-blur-sm px-4 pt-5 pb-4 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95 border-white/40 border"
						>
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<DialogTitle
										as="h3"
										className="text-2xl font-semibold text-white"
									>
										Welcome to Rachel's 30th Birthday
									</DialogTitle>
									<div className="mt-2">
										<p className="text-md text-white">
											If you got this far, it means you are one of the lucky few
											that got the secret link to this website. We hope you
											enjoy the celebration and have a great time! Let's make
											this a birthday to remember for our crazy ginger.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-400 sm:ml-3 sm:w-auto"
								>
									Let's go
								</button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</div>
	);
}
