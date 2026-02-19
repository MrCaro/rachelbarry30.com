export default function Banner() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 px-6 pb-6">
      <div className="pointer-events-auto mx-auto w-fit rounded-xl p-6 text-center">
        <p className="font-allura text-3xl font-bold text-[#C82A5A] md:text-4xl">
          Rachel's Tequila Sunrise Birthday Party
        </p>
        <p className="mt-3 text-xs font-bold text-slate-800 md:text-sm">
          1010 Persimmon St, Kissimmee, FL 34747
        </p>
        <p className="mt-2 text-xs font-bold text-slate-800 md:text-sm">
          April 4th, 2026 at 12:30 PM
        </p>
      </div>
    </div>
  );
}
