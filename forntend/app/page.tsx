"use client";
import { useState } from "react";


export default function page() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [toggle, settoggle] = useState(false)

  const handle_submit_msg=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // console.log(formData)


    const res = await fetch("http://127.0.0.1:8000/additional_data", {
      method: "POST",
      body: formData,
    });

    // const data = await res.json();
    // console.log("respond from backend",data);
    
  }

  const handleSave = () => {
    settoggle(true)

  }
  const handleClassify = async () => {

    // console.log("chech_out", text)
    if (!text.trim()) return;
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    console.log("data", data);
    setResult(data.prediction)
  }



  return (
    <div className="min-h-screen flex flex-col  bg-gray-50">

      <main className="flex-grow flex items-center justify-center p-6 mt-[-150] ">
        <div className="w-full max-w-7xl  bg-white rounded-2xl  p-2 pt-0 space-y-6">
          <div className="p-6 space-y-4 shadow shadow-2xl ">
            <h2 className="text-2xl font-semibold text-center">Check if a message is spam</h2>
            <textarea
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring"
              rows={5}
              placeholder="Enter message here..."
              // value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition w-full " onClick={handleClassify}>Classify</button>
            {result && (
              <div className={`mt-4 text-center text-lg font-bold ${result === "Spam" ? "text-red-600" : "text-green-600"}`}>
                Result: {result}
              </div>
            )}
          </div>

          <div className="p-6 space-y-4 shadow shadow-2xl">

            <h2 className="text-2xl font-semibold text-center">Add new spam message if you have</h2>

            <form className="space-y-6 "       
            onSubmit={handle_submit_msg}
            >
            <div>

              <textarea 
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring"
              rows={5}
              name="message"
              placeholder="Enter message here..."

            />
            </div>
            <div>
              <select name="label"  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" required>
                <option value="" >Select spam/notspam</option>
                <option value="spam">spam</option>
                <option value="not spam">Not spam</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition w-full " onClick={handleSave}>Save</button>
            {toggle && (
              <div className=" w-1/6 rounded-xl mx-auto  text-center text-lg font-bold ">
                Saved
              </div>
            )}
            </form>
   
          </div>
        </div>
      </main>


    </div>
  );
}



