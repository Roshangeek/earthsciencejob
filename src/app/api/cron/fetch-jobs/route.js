import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // Sample automated data injection pipeline 
    // (You can replace or expand this array with your custom Python/RSS scraper parsers)
    const fetchedJobs = [
      {
        title: "Senior Exploration Geologist",
        company: "Global Minerals Corp",
        location: "Perth, Australia (Remote)",
        category: "Geology",
        jobType: "Full-time",
        url: "https://example.com/apply/geology-1"
      },
      {
        title: "GIS & Geoinformatics Analyst",
        company: "TerraMapping Solutions",
        location: "Bengaluru, India",
        category: "GIS",
        jobType: "Full-time",
        url: "https://example.com/apply/gis-1"
      },
      {
        title: "Climatology Research Associate",
        company: "Atmospheric Data Systems",
        location: "Geneva, Switzerland",
        category: "Climatology",
        jobType: "Contract",
        url: "https://example.com/apply/climate-1"
      }
    ];

    for (const job of fetchedJobs) {
      const existing = await prisma.job.findFirst({
        where: { title: job.title, company: job.company }
      });

      if (!existing) {
        await prisma.job.create({ data: job });
      }
    }

    return NextResponse.json({ success: true, message: "Daily jobs ingested successfully." });
  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

