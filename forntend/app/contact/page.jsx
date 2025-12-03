"use client";

export default function ContactPage() {
  const handle_submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("http://127.0.0.1:8000/contact_data", {
      method: "POST",
      body: formData,
    });

    // const data = await res.json();
    // console.log("respond from backend",data);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto">

        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Have questions about integrating our Spam Classifier or need support? We're here to help.
          </p>
        </header>


        <section className="bg-white p-8 rounded-xl shadow border border-gray-100">
          <form className="space-y-6 " id="myform"      onSubmit={handle_submit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                name="name"
                id="name"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                name="email"
                id="email"

                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="text_box"
                id="text_box"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              id="submit_button"
         
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <p className="text-gray-600">We typically respond within 24 hours.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-lg border border-gray-100">
              <h3 className="font-semibold">Email</h3>
              <p className="mt-1 text-gray-500">spam@spamclassifier.com</p>
            </div>

            <div className="p-6 bg-white shadow rounded-lg border border-gray-100">
              <h3 className="font-semibold">Phone</h3>
              <p className="mt-1 text-gray-500">xxxx</p>
            </div>

            <div className="p-6 bg-white shadow rounded-lg border border-gray-100">
              <h3 className="font-semibold">Office</h3>
              <p className="mt-1 text-gray-500">xxxx</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}