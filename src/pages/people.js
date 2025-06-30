import Head from 'next/head';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import data from '@/data/labData.json';

export default function People() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>People - Keating Lab</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-600 mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.team.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-soft text-center hover:scale-105 transition-transform duration-300"
                >
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={member.name || 'Team Member'}
                      className="w-28 h-28 mx-auto rounded-full shadow-soft object-cover"
                    />
                  )}
                  {member.name && (
                    <h3 className="text-lg font-semibold text-purple-800 mt-4">{member.name}</h3>
                  )}
                  {member.degree && (
                    <p className="text-gray-600 text-sm">{member.degree}</p>
                  )}
                  {member.position && (
                    <p className="text-gray-600 text-sm">{member.position}</p>
                  )}
                  {(member.projects || member.about) && (
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="mt-3 text-blue-300 hover:text-blue-600 transition-colors"
                    >
                      View Details
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-8 rounded-2xl shadow-soft max-w-md w-full border border-purple-800/10 overflow-y-auto max-h-[80vh]">
              {selectedMember.photo && (
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name || 'Team Member'}
                  className="w-36 h-36 mx-auto rounded-full shadow-soft object-cover mb-4"
                />
              )}
              {selectedMember.name && (
                <h3 className="text-2xl font-semibold text-purple-800 text-center">{selectedMember.name}</h3>
              )}
              {selectedMember.degree && (
                <p className="text-gray-600 text-center">{selectedMember.degree}</p>
              )}
              {selectedMember.position && (
                <p className="text-gray-600 text-center">{selectedMember.position}</p>
              )}
              {selectedMember.projects && (
                <p className="text-gray-600 mt-4"><strong>Projects:</strong> {selectedMember.projects}</p>
              )}
              {selectedMember.about && (
                <p className="text-gray-600 mt-2"><strong>About:</strong> {selectedMember.about}</p>
              )}
              <button
                onClick={() => setSelectedMember(null)}
                className="mt-6 bg-purple-800 text-white px-6 py-2 rounded-full hover:bg-purple-900 transition-all duration-300 w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}