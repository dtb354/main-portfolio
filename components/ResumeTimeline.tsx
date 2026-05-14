import { resumeItems } from "./resumeData";

export default function ResumeTimeline() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Experience
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Resume
        </h2>
        <p className="mt-3 max-w-2xl text-white">
          A quick overview of my recent roles, responsibilities, and impact.
        </p>
      </div>

      <div className="relative ml-3 space-y-8 border-l border-zinc-800 pl-8">
        {resumeItems.map((item) => (
          <article
            key={`${item.company}-${item.title}-${item.period}`}
            className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-lg"
          >
            <span className="absolute -left-[2.15rem] top-8 h-4 w-4 rounded-full border-4 border-zinc-900 bg-cyan-400 shadow-[0_0_0_4px_rgba(24,24,27,1)]" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-1 text-zinc-300">
                  {item.company}
                  <span className="mx-2 text-zinc-600">•</span>
                  {item.location}
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
                {item.period}
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-zinc-400">{item.description}</p>

            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
