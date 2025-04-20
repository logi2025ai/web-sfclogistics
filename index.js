import Image from 'next/image'
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 bg-blue-900 text-white flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="SFC Logistics Logo" width={60} height={60} />
          <h1 className="ml-4 text-xl font-bold">SFC Logistics LLC</h1>
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#onboarding" className="hover:underline">Onboarding</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
      <main className="p-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Drive with SFC Logistics</h2>
          <p className="mb-4">Premium Dispatching & Carrier Support Services</p>
          <div className="space-x-4">
            <button className="bg-blue-900 text-white px-4 py-2 rounded">Get Started</button>
            <button className="bg-gray-300 text-gray-900 px-4 py-2 rounded">Apply Now</button>
          </div>
        </section>
        <section id="services" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="list-disc ml-6">
            <li>24/7 Dispatching</li>
            <li>Carrier Support</li>
            <li>Load Search & Negotiation</li>
            <li>Back Office Support</li>
          </ul>
        </section>
        <section id="onboarding" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Carrier Onboarding</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Company Name" className="border p-2 w-full" />
            <input type="email" placeholder="Email" className="border p-2 w-full" />
            <input type="file" className="border p-2 w-full" />
            <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Submit</button>
          </form>
        </section>
      </main>
      <footer className="p-6 bg-gray-100 text-center text-sm text-gray-500">
        &copy; 2025 SFC Logistics LLC. All rights reserved.
      </footer>
    </div>
  )
}
