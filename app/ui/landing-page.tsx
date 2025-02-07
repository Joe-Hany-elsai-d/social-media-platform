import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';

export default function LandingPage() {
  return (  
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <nav className="flex items-center justify-between p-6">
        <span className="text-2xl font-bold text-indigo-600">Socialize</span>
        <Link
          href="/login"
          className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700"
        >
          Sign In
        </Link>
      </nav>

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 md:text-6xl">
            Connect with Amazing People
          </h1>
          <p className="mt-6 text-xl text-gray-600 md:mt-8 md:text-2xl">
            Join our community to share ideas, collaborate on projects, and grow your network.
          </p>
          
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-indigo-700"
            >
              Get Started
              <FaLongArrowAltRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose Socialize?
          </h2>
          
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { title: 'Instant Networking', description: 'Connect with professionals worldwide in seconds' },
              { title: 'Smart Collaboration', description: 'Real-time tools for seamless teamwork' },
              { title: 'Secure Platform', description: 'Enterprise-grade security for your data' },
            ].map((feature, index) => (
              <div key={index} className="rounded-xl p-8 shadow-lg transition hover:shadow-xl">
                <div className="h-12 w-12 rounded-full bg-indigo-100"></div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}