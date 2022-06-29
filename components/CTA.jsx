export default function CTA() {
  return (
    <aside class="p-12 bg-primary sm:p-16 lg:p-24">
      <div class="max-w-xl mx-auto text-center">
        <p class="text-sm font-medium text-gray-300">
          Don't get overwhelmed with your studies!
        </p>

        <p class="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Ace them with us!
        </p>

        <form class="mt-8 sm:flex">
          <div class="sm:flex-1">
            <label for="email" class="sr-only">
              Email
            </label>

            <input
              type="email"
              placeholder="john.doe@yourschool.edu"
              class="w-full p-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg"
            />
          </div>

          <button
            type="submit"
            class="flex items-center justify-between w-full px-5 py-3 mt-4 font-medium text-white bg-accent rounded-lg sm:w-auto sm:mt-0 sm:ml-4 hover:bg-accent/75 transition ease-in-out"
          >
            Sign up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="flex-shrink-0 w-4 h-4 ml-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </aside>
  );
}
