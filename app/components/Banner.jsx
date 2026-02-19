export default function Banner() {
	return (
		<div className="absolute z-1 pointer-events-none inset-x-0 bottom-0 px-6 pb-6">
			<div className="pointer-events-auto mx-auto w-fit rounded-xl p-6 text-center">
				<p className="font-allura text-4xl text-[#C82A5A] font-bold">
					Rachel's Tequila Sunrise Birthday Party
				</p>
				<p className="text-sm/6 text-slate-800 font-bold mt-3">
					1010 Persimmon St, Kissimmee, FL 34747
				</p>
				<p className="text-sm/6 text-slate-800 font-bold">
					April 4th, 2026 at 12:30 PM
				</p>
			</div>
		</div>
	);
}
