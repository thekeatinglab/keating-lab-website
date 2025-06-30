import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import data from '@/data/labData.json';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact - Keating Lab</title>
      </Head>
      <Navbar />
      <main>
        <section className="relative w-full h-[700px] bg-gray-900">
          {/* Background Image */}
          <img
            src="/images/nyulh-logos/langone_location_2.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Overlay for Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 md:px-8 gap-8">
            <div className="text-white max-w-md">
              <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-lg mb-6">
                Reach out to us for inquiries, collaboration opportunities, or to learn more about our work.
              </p>
              <p className="text-sm">
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${data.labInfo.email}`}
                  className="text-blue-300 hover:text-blue-600 transition-colors"
                >
                  {data.labInfo.email}
                </a>
              </p>
              <p className="text-sm mt-2">
                <strong>Phone:</strong> {data.labInfo.phone}
              </p>
              <p className="text-sm mt-2">
                <strong>Address:</strong> {data.labInfo.address}
              </p>
            </div>
            <div className="max-w-lg w-full">
              <iframe
                src={data.labInfo.googleMapsEmbed}
                width="100%"
                height="250"
                className="rounded-lg shadow-soft"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}