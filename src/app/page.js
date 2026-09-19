import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }) {
  const categoryFilter = searchParams?.category || '';

  // Pre-loaded sample jobs so your template looks professional instantly
  const allJobs = [
    {
      id: 1,
      title: "Senior Exploration Geologist",
      company: "TerraMines Global",
      location: "Perth, WA (Remote)",
      category: "Geology",
      jobType: "Full-time",
      url: "#"
    },
    {
      id: 2,
      title: "GIS & Geoinformatics Specialist",
      company: "EcoMapping Corp",
      location: "Bengaluru, India",
      category: "GIS",
      jobType: "Contract",
      url: "#"
    },
    {
      id: 3,
      title: "Climatology Research Associate",
      company: "Atmospheric Data Systems",
      location: "Geneva, Switzerland",
      category: "Climatology",
      jobType: "Full-time",
      url: "#"
    },
    {
      id: 4,
      title: "Seismic Geophysicist",
      company: "Subsurface Energy Ltd",
      location: "Houston, TX",
      category: "Geophysics",
      jobType: "Full-time",
      url: "#"
    },
    {
      id: 5,
      title: "Geography & Urban Planning Analyst",
      company: "CitySphere Analytics",
      location: "London, UK",
      category: "Geography",
      jobType: "Full-time",
      url: "#"
    }
  ];

  const jobs = categoryFilter 
    ? allJobs.filter(j => j.category === categoryFilter)
    : allJobs;

  const categories = ['Geology', 'Geophysics', 'GIS', 'Climatology', 'Geography'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-sans">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
          Specialized Earth Science Careers
        </h1>
        <p className="text-slate-600 text-lg">
          Your daily curated hub for Geologists, Geophysicists, GIS Experts, Climatologists, and Geographers.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <Link
          href="/"
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-sm ${
            !categoryFilter 
              ? 'bg-slate-900 text-white shadow-slate-900/10' 
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Jobs
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/?category=${cat}`}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-sm ${
              categoryFilter === cat 
                ? 'bg-slate-900 text-white shadow-slate-900/10' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Job Listings Feed */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {jobs.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl text-center border border-slate-200 shadow-sm">
            <p className="text-slate-500 font-medium">No active listings found for this filter right now.</p>
          </div>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-0.5 rounded-md">
                    {job.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">• {job.jobType}</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900">{job.title}</h2>
                <p className="text-sm font-medium text-slate-600">
                  {job.company} <span className="text-slate-300 mx-1">•</span> <span className="text-slate-500 font-normal">{job.location}</span>
                </p>
              </div>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition shadow-sm shadow-emerald-600/20"
              >
                Apply Now ↗
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
