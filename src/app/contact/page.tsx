export default async function Contact() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist&type=single"
  );
  const data = await res.json();

  return (
    <div className="font-sans mx-auto justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full">
      <h1 className="text-2xl font-bold text-center">Contact</h1>
      <p className="text-lg text-center">
        If you would like to get in touch, feel free to reach out!
      </p>
      <p className="text-lg text-center">
        You can find me on{" "}
        <a
          href="https://github.com/danielspindler"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </p>
      <div className="max-w-3/4 mx-auto bg-red-900/90 hidden sm:block">
        {data.joke && (
          <p className="text-lg text-center mt-4 break-all p-4 max-h-40 text-wrap">
            Here&apos;s a programming joke for you: {data.joke}
          </p>
        )}
      </div>
      <div className="md:flex gap-x-8 space-y-8">
        <div className="md:w-1/2 mx-auto mt-12">
          <form
            className="flex flex-col gap-4"
            action="mailto:admin@daniel-spindler.de"
            method="POST"
            encType="text/plain"
          >
            <label htmlFor="message" className="font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="border rounded p-2 resize-none bg-white/60 text-large font-bold text-black text-shadow-2xs"
              placeholder="Type your message here..."
            />
            {/* Simple Captcha */}
            <label htmlFor="captcha" className="font-medium">
              What is 3 + 4? (to prevent spam)
            </label>
            <input
              id="captcha"
              name="captcha"
              type="text"
              required
              pattern="7"
              className="border rounded p-2 bg-white/60 text-large font-bold text-black text-shadow-2xs"
              placeholder="Enter the answer"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
