export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full uppercase tracking-widest">
          ✦ Welcome to MyApp
        </span>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Build something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            extraordinary
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed">
          A modern platform to help you ship faster, scale smarter, and design
          with confidence. Tailwind is{" "}
          <span className="font-semibold text-indigo-600">working perfectly</span> if you see colors & gradients.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200 transition-all">
            Get Started Free
          </button>
          <button className="px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm">
            View Demo →
          </button>
        </div>

        {/* Visual proof Tailwind works */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          <div className="h-2 rounded-full bg-indigo-500" />
          <div className="h-2 rounded-full bg-purple-500" />
          <div className="h-2 rounded-full bg-pink-500" />
        </div>
        <p className="mt-3 text-xs text-gray-400">↑ Tailwind color bars — if visible, CSS is loading ✓</p>
      </div>
    </section>
  );
}