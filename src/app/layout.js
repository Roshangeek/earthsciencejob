import './globals.css';

export const metadata = {
  title: 'EarthScienceJobs.com — Free Daily Earth Science Careers',
  description: 'Curated jobs for Geologists, Geophysicists, GIS Experts, Climatologists, and Geographers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-emerald-500 selection:text-white">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="font-extrabold text-lg text-slate-900 tracking-tight">
              EarthScienceJobs<span className="text-emerald-600">.com</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                Free Daily Alerts 🌍
              </span>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
          <p>© 2026 EarthScienceJobs.com. Connecting Earth Science talent worldwide.</p>
        </footer>
      </body>
    </html>
  );
}
