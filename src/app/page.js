import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }) {
  const categoryFilter = searchParams?.category || '';

  const allJobs = [
    { id: 1, title: "Senior Exploration Geologist", company: "TerraMines Global", location: "Perth, WA (Remote)", category: "Geology", jobType: "Full-time", url: "#" },
    { id: 2, title: "GIS & Geoinformatics Specialist", company: "EcoMapping Corp", location: "Bengaluru, India", category: "GIS", jobType: "Contract", url: "#" },
    { id: 3, title: "Climatology Research Associate", company: "Atmospheric Data Systems", location: "Geneva, Switzerland", category: "Climatology", jobType: "Full-time", url: "#" },
    { id: 4, title: "Seismic Geophysicist", company: "Subsurface Energy Ltd", location: "Houston, TX", category: "Geophysics", jobType: "Full-time", url: "#" },
    { id: 5, title: "Geography & Urban Planning Analyst", company: "CitySphere Analytics", location: "London, UK", category: "Geography", jobType: "Full-time", url: "#" }
  ];

  const jobs = categoryFilter ? allJobs.filter(j => j.category === categoryFilter) : allJobs;
  const categories = ['Geology', 'Geophysics', 'GIS', 'Climatology', 'Geography'];

  return (
    <div className="portal-container">
      <div className="hero-section">
        <h1>Specialized Earth Science Careers</h1>
        <p>Your daily curated hub for Geologists, Geophysicists, GIS Experts, Climatologists, and Geographers.</p>
      </div>

      <div className="filter-bar">
        <Link href="/" className={`filter-btn ${!categoryFilter ? 'active' : ''}`}>
          All Jobs
        </Link>
        {categories.map((cat) => (
          <Link key={cat} href={`/?category=${cat}`} className={`filter-btn ${categoryFilter === cat ? 'active' : ''}`}>
            {cat}
          </Link>
        ))}
      </div>

      <div className="job-list">
        {jobs.length === 0 ? (
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
            <p style={{ color: '#64748b' }}>No active listings found for this filter right now.</p>
          </div>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="badge">{job.category}</span>
                  <span className="job-meta">• {job.jobType}</span>
                </div>
                <h2>{job.title}</h2>
                <p className="job-meta">
                  {job.company} • <span style={{ color: '#475569' }}>{job.location}</span>
                </p>
              </div>
              <a href={job.url} target="_blank" rel="noopener noreferrer" className="apply-btn">
                Apply Now ↗
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
