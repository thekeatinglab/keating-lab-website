import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import data from '@/data/labData.json';

export default function Funding() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Funding - Keating Lab</title>
      </Head>
      <Navbar />
      <main>
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Funding</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.funding.map((funding, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img src={funding.logo} alt={funding.name} className="h-16 mb-4" height="200px" width="200px" />
                  <h3 className="text-xl font-semibold text-purple-800">{funding.name}</h3>
                  <p className="text-gray-600">{funding.description}</p>
                  <a href={funding.website} className="text-blue-600 hover:underline" target="_blank">Visit Website</a>
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