import Head from 'next/head';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import data from '@/data/labData.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Keating Lab - NYU Langone Health</title>
        <meta name="description" content="Keating Lab at NYU Langone Health" />
      </Head>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative">
          <img src="/images/homepage/mainimage-dna.jpg" alt="DNA Strand Image" className="w-full h-[785px] object-cover opacity-100" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl md:text-5xl font-bold">{data.labInfo.name}</h1>
            <p className="text-xl md:text-xl mt-2">{data.labInfo.tagline}</p>
          </div>
        </section>
        {/* Introduction Section */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">About the Lab</h2>
            <p className="text-lg text-gray-700">{data.labInfo.description}</p>
          </div>
        </section>
        {/* Recent Research Section */}
        <section className="py-12 px-4 md:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Recent Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.recentResearch.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded mb-4" height="200px" width="200px" />
                  <h3 className="text-xl font-semibold text-purple-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Lab News Section */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Lab News</h2>
            <ul className="list-disc list-inside text-gray-700">
              {data.labNews.map((news, index) => (
                <li key={index} className="mb-2">{news}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}