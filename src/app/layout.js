import './globals.css';

export const metadata = {
  title: 'EarthScienceJobs — Free Portal for Geosciences & GIS',
  description: 'Find daily updated careers in Geology, Geophysics, GIS, Climatology, and Geography.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="font-extrabold text-xl tracking-tight text-emerald-400">
              EarthScience<span className="text-white">Jobs</span>.com
            </a>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full font-medium hidden sm:inline-block">
                Free Daily Alerts
              </span>
            </div>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-slate-900 text-slate-400 text-sm py-8 mt-16 border-t border-slate-800 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <p className="mb-2 font-medium text-slate-300">EarthScienceJobs.com — Connecting Professionals Worldwide</p>
            <p>© {new Date().getFullYear()} All rights reserved. Built for Geology, Geophysics, GIS, Climatology & Geography talent.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

