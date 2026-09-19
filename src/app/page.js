import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }) {
  const sectorFilter = searchParams?.sector || '';
  const regionFilter = searchParams?.region || '';

  const allJobs = [
    {
      id: 1,
      title: "Senior GIS & Remote Sensing Analyst",
      company: "National Geospatial Corporation",
      location: "Bengaluru, India",
      region: "India",
      sector: "GIS & Remote Sensing",
      jobType: "Full-time",
      qualification: "M.Tech / M.Sc in Remote Sensing / GIS",
      lastDate: "15 April 2026",
      url: "https://www.geospatial-corp-careers.com/apply/gis-analyst"
    },
    {
      id: 2,
      title: "Exploration Geologist (Upstream Oil & Gas)",
      company: "Oil & Natural Gas Corporation (ONGC)",
      location: "Mumbai, India",
      region: "India",
      sector: "Oil & Gas",
      jobType: "Full-time",
      qualification: "M.Sc Geology / Applied Geology",
      lastDate: "20 April 2026",
      url: "https://www.ongcindia.com/web/eng/careers"
    },
    {
      id: 3,
      title: "Senior Hydrogeologist",
      company: "的水 Environment & Water Resources Group",
      location: "Singapore",
      region: "APAC",
      sector: "Hydrogeology & Environment",
      jobType: "Full-time",
      qualification: "Master's in Hydrogeology or Earth Sciences",
      lastDate: "30 April 2026",
      url: "https://www.water-resources-apac.com/careers/hydrogeologist"
    },
    {
      id: 4,
      title: "Senior Petroleum Geophysicist",
      company: "Abu Dhabi National Oil Company (ADNOC)",
      location: "Abu Dhabi, UAE",
      region: "Middle East",
      sector: "Oil & Gas",
      jobType: "Full-time",
      qualification: "B.Tech/M.Sc Geophysics + 5 Yrs Exp",
      lastDate: "25 April 2026",
      url: "https://www.adnoc.ae/en/careers"
    },
    {
      id: 5,
      title: "Mining Geologist & Ore Control Specialist",
      company: "BHP Minerals",
      location: "Perth, Australia",
      region: "APAC",
      sector: "Mining & Minerals",
      jobType: "Full-time",
      qualification: "B.E/M.Sc Geology with Open Cast Mining Exp",
      lastDate: "05 May 2026",
      url: "https://careers.bhp.com"
    },
    {
      id: 6,
      title: "Climatology & Weather Data Scientist",
      company: "World Meteorological Organization",
      location: "Geneva, Switzerland",
      region: "Europe",
      sector: "Climatology & Meteorology",
      jobType: "Contract",
      qualification: "Ph.D / M.Sc in Climatology or Meteorology",
      lastDate: "10 May 2026",
      url: "https://wmo.int/content/vacancies"
    }
  ];

  let jobs = allJobs;
  if (sectorFilter) jobs = jobs.filter(j => j.sector === sectorFilter);
  if (regionFilter) jobs = jobs.filter(j => j.region === regionFilter);

  const sectors = [
    'Oil & Gas',
    'Mining & Minerals',
    'GIS & Remote Sensing',
    'Hydrogeology & Environment',
    'Climatology & Meteorology'
  ];
  const regions = ['India', 'APAC', 'Middle East', 'Europe'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Clean Member Notification Bar */}
      <div className="mineral-card p-4 rounded-xl mb-8 flex flex-col sm:flex-row justify-between items-center gap-3 border border-slate-700 bg-slate-900/90 text-white">
        <div>
          <span className="text-sm font-bold text-teal-400">EarthScienceJobs.com 🌍</span>
          <p className="text-xs text-slate-300">Official curated portal for professional geoscientists and spatial experts worldwide.</p>
        </div>
        <div className="bg-teal-950/80 border border-teal-800 text-teal-300 px-3 py-1.5 rounded-lg text-xs font-semibold">
          Daily Alerts Active ⚡
        </div>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-white">
          Specialized Earth Science Careers
        </h1>
        <p className="text-slate-200 text-sm">
          Browse verified career opportunities categorized by professional industrial sectors.
        </p>
      </div>

      {/* Region Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-300 self-center mr-1">Region:</span>
        <Link href="/" className={`px-3 py-1 rounded-md text-xs font-bold transition ${!regionFilter ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
          All
        </Link>
        {regions.map((reg) => (
          <Link key={reg} href={`/?region=${reg}${sectorFilter ? `&sector=${encodeURIComponent(sectorFilter)}` : ''}`} className={`px-3 py-1 rounded-md text-xs font-bold transition ${regionFilter === reg ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
            {reg}
          </Link>
        ))}
      </div>

      {/* Industrial Sector Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <Link href={`/${regionFilter ? `?region=${regionFilter}` : ''}`} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${!sectorFilter ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
          All Sectors
        </Link>
        {sectors.map((sec) => (
          <Link key={sec} href={`/?sector=${encodeURIComponent(sec)}${regionFilter ? `&region=${regionFilter}` : ''}`} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${sectorFilter === sec ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
            {sec}
          </Link>
        ))}
      </div>

      {/* Job Feed */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {jobs.length === 0 ? (
          <div className="mineral-card p-6 rounded-xl text-center bg-slate-900 text-white">
            <p className="text-slate-300 text-xs">No active listings found for this specific sector filter.</p>
          </div>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="mineral-card p-5 rounded-2xl transition bg-slate-900/90 border border-slate-700 text-white shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">{job.sector}</span>
                    <span className="text-[10px] font-bold uppercase badge-region px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">{job.region}</span>
                  </div>
                  <h2 className="text-sm font-bold text-white">{job.title}</h2>
                  <p className="text-xs text-teal-400 font-medium">{job.company} — {job.location}</p>
                </div>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="mineral-btn px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-center w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white shadow">
                  Apply / Official Site ↗
                </a>
              </div>

              {/* Metadata Details Style */}
              <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 text-xs space-y-1 text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Eligibility / Qualification:</span>
                  <span className="font-semibold text-white text-right">{job.qualification}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Job Type:</span>
                  <span className="font-semibold text-white">{job.jobType}</span>
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
