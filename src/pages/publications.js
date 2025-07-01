import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import data from '@/data/labData.json';
import { useState } from 'react';

export default function Publications() {
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 10; // Adjust this number as needed

  // Calculate total pages
  const totalPublications = data.publications.length;
  const totalPages = Math.ceil(totalPublications / publicationsPerPage);

  // Get publications for the current page
  const indexOfLastPub = currentPage * publicationsPerPage;
  const indexOfFirstPub = indexOfLastPub - publicationsPerPage;
  const currentPublications = data.publications.slice(indexOfFirstPub, indexOfLastPub);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Publications - Keating Lab</title>
      </Head>
      <Navbar />
      <main>
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Publications</h2>
            <ul className="list-disc list-inside text-gray-700">
              {currentPublications.map((pub, index) => (
                <li key={`${pub.citation}-${index}`} className="mb-2">
                  {pub.citation}{' '}
                  <a
                    href={pub.link}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </li>
              ))}
            </ul>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-8 flex flex-col items-center space-y-4">
                <div className="w-full overflow-x-auto">
                  <div className="flex space-x-2 min-w-max">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1.5 rounded-md text-sm font-medium md:px-4 md:py-2
                        disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
                        bg-purple-800 text-white hover:bg-blue-300"
                    >
                      Previous
                    </button>
                    {/* Page Numbers */}
                    {pageNumbers.map((number) => (
                      <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className="px-3 py-1.5 rounded-md text-sm font-medium md:px-4 md:py-2
                          disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
                          bg-purple-800 text-white hover:bg-blue-300"
                      >
                        {number}
                      </button>
                    ))}
                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1.5 rounded-md text-sm font-medium md:px-4 md:py-2
                        disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
                        bg-purple-800 text-white hover:bg-blue-300"
                    >
                      Next
                    </button>
                  </div>
                </div>
                {/* Page Info */}
                <p className="text-sm text-gray-600">
                  Showing {indexOfFirstPub + 1} to{' '}
                  {Math.min(indexOfLastPub, totalPublications)} of {totalPublications}{' '}
                  publications
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}