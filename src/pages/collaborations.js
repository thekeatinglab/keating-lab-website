import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import data from '@/data/labData.json';

export default function Collaborations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Collaborations - Keating Lab</title>
      </Head>
      <NavBar />
      <main>
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Collaborations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.collaborations.map((collab, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img src={collab.logo} alt={collab.name} className="h-16 mb-4" height="200px" width="200px" />
                  <h3 className="text-xl font-semibold text-purple-800">{collab.name}</h3>
                  <p className="text-gray-600">{collab.description}</p>
                  <a href={collab.link} className="text-blue-600 hover:underline" target="_blank">Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}