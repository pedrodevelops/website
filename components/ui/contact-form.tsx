import * as React from "react";

function ContactForm() {
  return (
    <form
      action="mailto:dev.henriquegn@gmail.com"
      method="POST"
      className="border-2 space-y-4 border-stone-900 p-6 rounded-lg"
    >
      <div className="space-y-2">
        <label className="uppercase font-bold text-lg" htmlFor="name">
          Your name
        </label>
        <input
          className="p-2 rounded outline-none text-sm"
          id="name"
          placeholder="Jon"
        />
      </div>
      <div className="space-y-2">
        <label className="uppercase font-bold text-lg" htmlFor="message">
          Your message
        </label>
        <textarea
          className="p-2 rounded w-full outline-none text-sm"
          id="message"
          placeholder="Let's solve this puzzle"
        />
      </div>
      <button
        className="px-2 py-1 font-semibold uppercase rounded bg-stone-900 text-stone-100 hover:bg-stone-800 hover:text-stone-50"
        type="submit"
      >
        Contact
      </button>
    </form>
  );
}

export { ContactForm };
