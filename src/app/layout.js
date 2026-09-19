import './globals.css';

export const metadata = {
  title: 'EarthScienceJobs.com',
  description: 'Free daily jobs for earth science professionals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between font-sans antialiased">
        <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="font-extrabold text-lg tracking-tight text-slate-900">
              EarthScienceJobs<span className="text-emerald-600">.com</span>
            </a>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          <p>© 2026 EarthScienceJobs.com. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
