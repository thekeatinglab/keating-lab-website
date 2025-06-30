import data from '@/data/labData.json';

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/images/nyulh-logos/nyulh_logo.svg" alt="Keating Lab Logo" className="h-10 mr-3 mb-2" />
          <h3 className="text-xl font-bold">{data.labInfo.name}</h3>
          <p>{data.labInfo.address}</p>
          <p>Email: <a href={`mailto:${data.labInfo.email}`} className="hover:text-blue-300">{data.labInfo.email}</a></p>
          <p>Phone: {data.labInfo.phone}</p>
        </div>
        <div>
          <iframe
            src={data.labInfo.googleMapsEmbed}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} {data.labInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}