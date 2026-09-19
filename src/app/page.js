import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }) {
  const categoryFilter = searchParams?.category || '';
  const regionFilter = searchParams?.region || '';

  const allJobs = [
    {
      id: 1,
      title: "Senior GIS & Remote Sensing Analyst",
      company: "ISRO / RMSI Partner",
      location: "Bengaluru, India",
      region: "India",
      category: "GIS",
      jobType: "Full-time",
      qualification: "M.Tech / M.Sc in Remote Sensing / GIS",
      lastDate: "15 April 2026",
      source: "Naukri / Direct",
      url: "https://www.naukri.com"
    },
    {
      id: 2,
      title: "Exploration Geologist (Oil & Gas)",
      company: "ONGC / Schlumberger",
      location: "Mumbai, India",
      region: "India",
      category: "Geology",
      jobType: "Full-time",
      qualification: "M.Sc Geology / Applied Geology",
      lastDate: "20 April 2026",
      source: "LinkedIn",
      url: "https://www.linkedin.com/jobs"
    },
    {
      id: 3,
      title: "Senior Hydrogeologist",
      company: "Water Management APAC",
      location: "Singapore",
      region: "APAC",
      category: "Geology",
      jobType: "Full-time",
      qualification: "Master’s in Hydrogeology or Earth Sciences",
      lastDate: "30 April 2026",
      source: "Indeed",
      url: "https://sg.indeed.com"
    },
    {
      id: 4,
      title: "Senior Petroleum Geophysicist",
      company: "ADNOC Group",
      location: "Abu Dhabi, UAE",
      region: "Middle East",
      category: "Geophysics",
      jobType: "Full-time",
      qualification: "B.Tech/M.Sc Geophysics + 5 Yrs Exp",
      lastDate: "25 April 2026",
      source: "LinkedIn",
      url: "https://www.linkedin.com/jobs"
    },
    {
      id: 5,
      title: "Climatology & Weather Data Scientist",
      company: "Global Climate Hub",
      location: "Geneva, Switzerland",
      region: "Europe",
      category: "Climatology",
      jobType: "Contract",
      qualification: "Ph.D / M.Sc in Climatology or Meteorology",
      lastDate: "10 May 2026",
      source: "Indeed Global",
      url: "https://www.indeed.com"
    }
  ];

  let jobs = allJobs;
  if (categoryFilter) jobs = jobs.filter(j => j.category === categoryFilter);
  if (regionFilter) jobs = jobs.filter(j => j.region === regionFilter);

  const categories = ['Geology', 'Geophysics', 'GIS', 'Climatology', 'Geography'];
  const regions = ['India', 'APAC', 'Middle East', 'Europe'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Authentication Bar (Google & Phone Login) */}
      <div className="mineral-card p-4 rounded-xl mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 border border-slate-700">
        <div>
          <span className="text-sm font-bold text-teal-400">EarthScienceJobs.com 🌍</span>
          <p className="text-xs text-slate-400">Sign in to save alerts and receive daily notifications.</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition shadow">
            Sign in with Google 🌐
          </button>
          <button className="flex-1 sm:flex-none bg-teal-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-teal-500 transition shadow">
            Phone Login 📱
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-white">
          Specialized Earth Science Careers
        </h1>
        <p className="text-slate-300 text-sm">
          Curated portal for Geologists, GIS Experts, and Geophysicists across India, APAC, and the Middle East.
        </p>
      </div>

      {/* Region Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        <span className="text-xs font-semibold text-slate-400 self-center mr-1">Region:</span>
        <Link href="/" className={`px-3 py-1 rounded-md text-xs font-bold transition ${!regionFilter ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
          All
        </Link>
        {regions.map((reg) => (
          <Link key={reg} href={`/?region=${reg}${categoryFilter ? `&category=${categoryFilter}` : ''}`} className={`px-3 py-1 rounded-md text-xs font-bold transition ${regionFilter === reg ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
            {reg}
          </Link>
        ))}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Link href={`/${regionFilter ? `?region=${regionFilter}` : ''}`} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${!categoryFilter ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
          All Fields
        </Link>
        {categories.map((cat) => (
          <Link key={cat} href={`/?category=${cat}${regionFilter ? `&region=${regionFilter}` : ''}`} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${categoryFilter === cat ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
            {cat}
          </Link>
        ))}
      </div>

      {/* Manual Job & Document Posting Box */}
      <div className="mineral-card p-5 rounded-2xl mb-8 max-w-3xl mx-auto border border-teal-500/30">
        <h3 className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-2">➕ Post a Job or Mineral/Research Document Manually</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-3">
          <input type="text" placeholder="Job Title / Role" className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500" />
          <input type="text" placeholder="Company / Organization" className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500" />
          <input type="text" placeholder="Application Link / PDF URL" className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500" />
        </div>
        <button className="w-full mineral-btn py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow">
          Publish Listing Instantly
        </button>
      </div>

      {/* FreeJobAlert Style Job Feed */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {jobs.length === 0 ? (
          <div className="mineral-card p-6 rounded-xl text-center">
            <p className="text-slate-400 text-xs">No active listings found for this filter.</p>
          </div>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="mineral-card p-5 rounded-2xl transition hover:border-teal-500/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">{job.category}</span>
                    <span className="text-[10px] font-bold uppercase badge-region px-2 py-0.5 rounded">{job.region}</span>
                    <span className="text-xs text-slate-400">• Source: {job.source}</span>
                  </div>
                  <h2 className="text-sm font-bold text-white">{job.title}</h2>
                  <p className="text-xs text-teal-400 font-medium">{job.company} — {job.location}</p>
                </div>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="mineral-btn px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-center w-full md:w-auto">
                  Apply / Official Site ↗
                </a>
              </div>

              {/* FreeJobAlert Metadata Table Style */}
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-xs space-y-1 text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Eligibility / Qualification:</span>
                  <span className="font-semibold text-slate-200 text-right">{job.qualification}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Job Type:</span>
                  <span className="font-semibold text-slate-200">{job.jobType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Last Date / Deadline:</span>
                  <span className="font-semibold text-amber-400">{job.lastDate}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
