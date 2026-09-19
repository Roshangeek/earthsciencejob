import './globals.css';

export const metadata = {
  metadataBase: new URL('https://earthsciencejobs.com'),
  title: {
    default: 'EarthScienceJobs.com — Global Geoscience & GIS Careers',
    template: '%s | EarthScienceJobs.com',
  },
  description: 'Discover verified jobs, MNC careers, public sector openings, and global scholarships for Geologists, Geophysicists, GIS Experts, and Climatologists.',
  keywords: ['Earth Science Jobs', 'Geology Careers India', 'GIS Analyst Jobs', 'Oil and Gas Geoscientist Jobs', 'Mining Geology Scholarships'],
  openGraph: {
    title: 'EarthScienceJobs.com — Global Geoscience Portal',
    description: 'Direct official employer links, expected salaries, and company ratings for earth science professionals.',
    url: 'https://earthsciencejobs.com',
    siteName: 'EarthScienceJobs.com',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f19] text-white min-h-screen flex flex-col justify-between font-sans antialiased selection:bg-teal-500 selection:text-white">
        <header className="border-b border-slate-800/80 bg-[#0b0f19]/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="font-mono font-extrabold text-sm tracking-widest text-teal-400 flex items-center gap-2">
              <span>🌐</span> EARTHSCIENCEJOBS<span className="text-white">.COM</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono bg-teal-950 text-teal-300 border border-teal-800 px-2.5 py-1 rounded-full">
                ⚡ Direct Links Only
              </span>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-slate-800/80 bg-[#0b0f19] py-8 text-center text-xs text-slate-500 font-mono">
          <p>© 2026 EarthScienceJobs.com. Verified Professional Geoscience Portal.</p>
        </footer>
      </body>
    </html>
  );
}
