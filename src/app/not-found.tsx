import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen dark-mode flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm tracking-widest uppercase mb-4 text-white/50">404</p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white">Page not found</h1>
        <p className="text-lg text-white/50 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all glass glass-card-hover text-white/80 hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
