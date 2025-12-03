"use client";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            About Our Spam Classifier
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A modern machine-learning system that detects spam with high accuracy,
            low latency, and strong privacy standards.
          </p>
        </header>

        {/* Mission */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to make digital communication cleaner and safer by reducing
            unwanted and potentially harmful messages. Our classifier leverages
            advanced natural language processing and adaptive models that evolve
            as spam tactics change.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>

          <ul className="space-y-4">
            
            <li className="p-4 bg-white rounded-lg shadow border border-gray-100">
              <span className="font-semibold">Machine Learning Models:</span>{" "}
              Continuously trained on diverse datasets to improve accuracy.
            </li>
            <li className="p-4 bg-white rounded-lg shadow border border-gray-100">
              <span className="font-semibold">Adaptive Filtering:</span>{" "}
              Learns from real-world feedback and emerging spam trends.
            </li>
            <li className="p-4 bg-white rounded-lg shadow border border-gray-100">
              <span className="font-semibold">Low False-Positive Rate:</span>{" "}
              Ensures legitimate communication is never blocked unnecessarily.
            </li>
          </ul>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Performance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center">
              <p className="text-xs text-gray-500">Accuracy</p>
              <p className="text-3xl font-bold mt-2">97.1%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center">
              <p className="text-xs text-gray-500">Processing Time</p>
              <p className="text-3xl font-bold mt-2">45ms</p>
            </div>
            

          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to integrate the classifier into your apps, services, or workflows.
          </p>
         
        </section>
      </div>
    </main>
  );
}
