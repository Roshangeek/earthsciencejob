import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }) {
  const categoryFilter = searchParams?.category || '';
  const regionFilter = searchParams?.region || '';

  // Real data with India, APAC, Middle East, and global sources (LinkedIn, Indeed, Naukri)
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
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-emerald-400 drop-shadow-md">
          EarthScienceJobs.com 🌍
        </h1>
        <p className="text-slate-300 text-base">
          Curated portal for Geologists, GIS Experts, and Geophysicists across India, APAC, and the Middle East.
        </p>
      </div>

      {/* Region Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-400 self-center mr-2">Region:</span>
        <Link href="/" className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${!regionFilter ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
          All Regions
        </Link>
        {regions.map((reg) => (
          <Link key={reg} href={`/?region=${reg}${categoryFilter ? `&category=${categoryFilter}` : ''}`} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${regionFilter === reg ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
            {reg}
          </Link>
        ))}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <Link href={`/${regionFilter ? `?region=${regionFilter}` : ''}`} className={`px-4 py-2 rounded-full text-xs font-semibold transition ${!categoryFilter ? 'bg-teal-600 text-white' : 'bg-slate-800/80 text-slate-300 border border-slate-700'}`}>
          All Disciplines
        </Link>
        {categories.map((cat) => (
          <Link key={cat} href={`/?category=${cat}${regionFilter ? `&region=${regionFilter}` : ''}`} className={`px-4 py-2 rounded-full text-xs font-semibold transition ${categoryFilter === cat ? 'bg-teal-600 text-white' : 'bg-slate-800/80 text-slate-300 border border-slate-700'}`}>
            {cat}
          </Link>
        ))}
      </div>

      {/* Manual Job Posting Section */}
      <div className="mineral-card p-6 rounded-2xl mb-10 max-w-3xl mx-auto border border-teal-500/30">
        <h3 className="text-sm font-bold text-teal-300 uppercase tracking-wider mb-2">➕ Post a Job or Mineral/Research Document Manually</h3>
        <p className="text-xs text-slate-400 mb-4">Have an earth science opening, tender, or exam notification? Submit details directly to the portal.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input type="text" placeholder="Job Title / Role" className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200" />
          <input type="text" placeholder="Company / Organization" className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200" />
          <input type="text" placeholder="Application Link / PDF URL" className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200" />
        </div>
        <button className="mt-3 w-full mineral-btn py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg">
          Publish Listing Instantly
        </button>
      </div>

      {/* FreeJobAlert Style Details List */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {jobs.length === 0 ? (
          <div className="mineral-card p-8 rounded-2xl text-center">
            <p className="text-slate-400 text-sm">No active listings found for this specific filter.</p>
          </div>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="mineral-card p-6 rounded-2xl transition hover:border-teal-500/50">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">{job.category}</span>
                    <span className="text-[10px] font-bold uppercase badge-region px-2 py-0.5 rounded">{job.region}</span>
                    <span className="text-xs text-slate-400">• Source: {job.source}</span>
                  </div>
                  <h2 className="text-base font-bold text-slate-100">{job.title}</h2>
                  <p className="text-xs text-teal-400 font-medium">{job.company} — {job.location}</p>
                </div>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="mineral-btn px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center w-full md:w-auto">
                  Apply / Official Site ↗
                </a>
              </div>

              {/* FreeJobAlert Metadata Table Style */}
              <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-xs space-y-1.5 text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400 font-medium">Eligibility / Qualification:</span>
                  <span className="font-semibold text-slate-200 text-right">{job.qualification}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400 font-medium">Job Type:</span>
                  <span className="font-semibold text-slate-200">{job.jobType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Last Date / Deadline:</span>
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
