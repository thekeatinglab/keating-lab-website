import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import data from '@/data/labData.json';

export default function Research() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Research - Keating Lab</title>
      </Head>
      <Navbar />
      <main>
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Research</h2>
            {data.researchProjects.map((project, index) => (
              <div key={index} className="mb-8">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" height="200px" width="200px" />
                <h3 className="text-xl font-semibold text-purple-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                {/* <a href={project.link} className="text-blue-600 hover:underline">Learn More</a> */}
              </div>
            ))}
          </div>
        </section>
        {/* <section className="py-12 px-4 md:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Latest Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.latestResearch.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-purple-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}