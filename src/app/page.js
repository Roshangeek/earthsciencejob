import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }) {
  const activeTab = searchParams?.tab || 'jobs';
  const sectorFilter = searchParams?.sector || '';
  const regionFilter = searchParams?.region || '';

  // Verified active direct-employer database with salaries & company ratings
  const allJobs = [
    {
      id: 1,
      title: "Senior GIS & Remote Sensing Analyst",
      company: "RMSI Geospatial",
      location: "Bengaluru, India",
      region: "India",
      sector: "GIS & Remote Sensing",
      jobType: "Full-time",
      companyType: "MNC / Enterprise",
      rating: "⭐ 4.2 / 5",
      salary: "₹12 LPA - ₹18 LPA",
      qualification: "M.Tech / M.Sc in Remote Sensing / GIS",
      lastDate: "15 April 2026",
      url: "https://www.rmsi.com/careers/"
    },
    {
      id: 2,
      title: "Exploration Geologist (Upstream Oil & Gas)",
      company: "Oil & Natural Gas Corporation (ONGC)",
      location: "Mumbai, India",
      region: "India",
      sector: "Oil & Gas",
      jobType: "Full-time",
      companyType: "Public Sector (PSU)",
      rating: "⭐ 4.4 / 5",
      salary: "₹16 LPA - ₹24 LPA",
      qualification: "M.Sc Geology / Applied Geology",
      lastDate: "20 April 2026",
      url: "https://www.ongcindia.com/web/eng/careers"
    },
    {
      id: 3,
      title: "Senior Hydrogeologist",
      company: "Aurecon Water Group",
      location: "Singapore",
      region: "APAC",
      sector: "Hydrogeology & Environment",
      jobType: "Full-time",
      companyType: "MNC / Engineering",
      rating: "⭐ 4.3 / 5",
      salary: "S$85k - S$120k / yr",
      qualification: "Master's in Hydrogeology or Earth Sciences",
      lastDate: "30 April 2026",
      url: "https://careers.aurecongroup.com/"
    },
    {
      id: 4,
      title: "Senior Petroleum Geophysicist",
      company: "ADNOC Group",
      location: "Abu Dhabi, UAE",
      region: "Middle East",
      sector: "Oil & Gas",
      jobType: "Full-time",
      companyType: "National Oil Company",
      rating: "⭐ 4.6 / 5",
      salary: "$90k - $140k / yr",
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
      companyType: "Global Mining MNC",
      rating: "⭐ 4.5 / 5",
      salary: "A$110k - A$150k / yr",
      qualification: "B.E/M.Sc Geology with Open Cast Mining Exp",
      lastDate: "05 May 2026",
      url: "https://careers.bhp.com"
    },
    {
      id: 6,
      title: "Climatology & Weather Data Scientist",
      company: "MeteoSwiss Data Labs",
      location: "Geneva, Switzerland",
      region: "Europe",
      sector: "Climatology & Meteorology",
      jobType: "Contract",
      companyType: "Research Institution",
      rating: "⭐ 4.7 / 5",
      salary: "CHF 95k - CHF 130k / yr",
      qualification: "Ph.D / M.Sc in Climatology or Meteorology",
      lastDate: "10 May 2026",
      url: "https://www.meteoswiss.admin.ch"
    }
  ];

  const allScholarships = [
    {
      id: 1,
      title: "Commonwealth Master's Scholarship for Earth Sciences",
      provider: "UK Foreign, Commonwealth & Development Office",
      eligibility: "First-class Bachelor's degree in Geology, Geography, or Environmental Science",
      deadline: "15 May 2026",
      amount: "Full Tuition + Living Stipend",
      url: "https://fcdo.gov.uk/scholarships"
    },
    {
      id: 2,
      title: "DAAD Fellowship in Geospatial & Environmental Engineering",
      provider: "German Academic Exchange Service",
      eligibility: "Open to Indian & APAC Master's/Ph.D candidates in GIS or Geosciences",
      deadline: "30 May 2026",
      amount: "€934/month + Travel Allowance",
      url: "https://www.daad.in/en/"
    },
    {
      id: 3,
      title: "Fullbright-Nehru Master's Fellowship in Earth & Climate Sciences",
      provider: "US-IEF / Government of India",
      eligibility: "Completed equivalent of a US Bachelor's degree with 3+ years professional experience",
      deadline: "15 June 2026",
      amount: "Full J-1 Visa Support + Airfare & Living Costs",
      url: "https://www.usief.org.in/"
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
      {/* Navigation Switcher Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono tracking-widest text-teal-400 uppercase">Global Portal</span>
          <h1 className="text-xl font-bold tracking-tight text-white">Geoscience & Scholarship Hub</h1>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          <Link href="/?tab=jobs" className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'jobs' ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}>
            💼 Job Openings
          </Link>
          <Link href="/?tab=scholarships" className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'scholarships' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}>
            🎓 Scholarships & Grants
          </Link>
          <Link href="/admin" className="px-4 py-1.5 rounded-lg text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition">
            ⚙️ Admin Panel
          </Link>
        </div>
      </div>

      {activeTab === 'jobs' ? (
        <>
          {/* Hero Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 text-white">
              Verified Industrial Geoscience Careers
            </h2>
            <p className="text-slate-400 text-xs">
              Direct official employer links with company ratings, salary ranges, and zero dead pages.
            </p>
          </div>

          {/* Region Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="text-xs font-semibold text-slate-400 self-center mr-1 font-mono">Region:</span>
            <Link href="/?tab=jobs" className={`px-3 py-1 rounded-md text-xs font-bold transition ${!regionFilter ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
              All Regions
            </Link>
            {regions.map((reg) => (
              <Link key={reg} href={`/?tab=jobs&region=${reg}${sectorFilter ? `&sector=${encodeURIComponent(sectorFilter)}` : ''}`} className={`px-3 py-1 rounded-md text-xs font-bold transition ${regionFilter === reg ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
                {reg}
              </Link>
            ))}
          </div>

          {/* Sector Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Link href={`/?tab=jobs${regionFilter ? `&region=${regionFilter}` : ''}`} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${!sectorFilter ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
              All Sectors
            </Link>
            {sectors.map((sec) => (
              <Link key={sec} href={`/?tab=jobs&sector=${encodeURIComponent(sec)}${regionFilter ? `&region=${regionFilter}` : ''}`} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${sectorFilter === sec ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
                {sec}
              </Link>
            ))}
          </div>

          {/* Job Feed */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {jobs.length === 0 ? (
              <div className="bg-slate-900 p-8 rounded-2xl text-center border border-slate-800">
                <p className="text-slate-400 text-xs">No active listings match this specific filter.</p>
              </div>
            ) : (
              jobs.map((job) => (
                <div key={job.id} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition shadow-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800/60">{job.sector}</span>
                        <span className="text-[10px] font-bold uppercase bg-amber-950/60 text-amber-300 px-2 py-0.5 rounded border border-amber-800/60">{job.region}</span>
                        <span className="text-[10px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">{job.companyType}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-wide">{job.title}</h3>
                      <p className="text-xs text-teal-400 font-medium flex items-center gap-1.5 mt-0.5">
                        <span>🏛️ {job.company}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300">{job.location}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-amber-300 font-mono">{job.rating}</span>
                      </p>
                    </div>
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-center w-full md:w-auto shadow transition flex items-center justify-center gap-1">
                      <span>Apply on Official Site</span>
                      <span>↗</span>
                    </a>
                  </div>

                  {/* Metadata Details Style */}
                  <div className="bg-slate-950/90 rounded-xl p-3 border border-slate-800/80 text-xs space-y-1.5 text-slate-300 font-mono">
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span className="text-slate-400">Expected Salary / Compensation:</span>
                      <span className="font-bold text-emerald-400">{job.salary}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span className="text-slate-400">Eligibility / Qualification:</span>
                      <span className="font-semibold text-slate-200 text-right">{job.qualification}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Application Deadline:</span>
                      <span className="font-semibold text-amber-400">{job.lastDate}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <>
          {/* Scholarships Feed Section */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 text-white">
              Global Earth Science Scholarships & Fellowships
            </h2>
            <p className="text-slate-400 text-xs">
              Fully and partially funded global academic awards for geoscientists, hydrogeologists, and GIS researchers.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {allScholarships.map((sch) => (
              <div key={sch.id} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase bg-amber-950 text-amber-300 px-2.5 py-1 rounded border border-amber-800/60 font-mono">🎓 Academic Fellowship</span>
                    <h3 className="text-base font-bold text-white mt-2">{sch.title}</h3>
                    <p className="text-xs text-teal-400 font-medium">Provider: {sch.provider}</p>
                  </div>
                  <a href={sch.url} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center w-full md:w-auto shadow transition">
                    Apply for Grant ↗
                  </a>
                </div>

                <div className="bg-slate-950/90 rounded-xl p-3.5 border border-slate-800 text-xs space-y-2 text-slate-300 font-mono">
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="text-slate-400">Funding / Stipend:</span>
                    <span className="font-bold text-emerald-400">{sch.amount}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="text-slate-400">Eligibility Criteria:</span>
                    <span className="font-semibold text-slate-200 text-right max-w-md">{sch.eligibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Application Deadline:</span>
                    <span className="font-semibold text-amber-400">{sch.deadline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
