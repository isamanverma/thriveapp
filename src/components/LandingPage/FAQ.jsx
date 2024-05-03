import React from "react";

export default function FAQ() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl font-bold ">FAQ</h2>
      <div className="flow-root">
        <div className="divide-y divide-gray-100">
          <details
            className="group py-8 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between text-gray-900">
              <h2 className="text-lg font-medium">
                How many days a week should I exercise?
              </h2>

              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              It is recommended to exercise at least 3-5 days a week for optimal
              health benefits. However, the frequency and intensity of exercise
              may vary depending on individual goals and fitness levels.
            </p>
          </details>

          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                How can I improve my sleep quality?
              </h2>

              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              To improve sleep quality, establish a consistent sleep schedule,
              create a relaxing bedtime routine, limit exposure to screens
              before bedtime, and ensure your sleep environment is comfortable
              and conducive to sleep.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
