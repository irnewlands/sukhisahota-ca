export default function About() {
  return (
    <main className="min-h-screen bg-[#f8f1e7] text-[#111827]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e85d04]">
          About Sukhi
        </p>

        <h1 className="mb-8 font-serif text-5xl font-bold leading-tight md:text-7xl">
          A life shaped by resilience, community, and public service.
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-8">
            <p>
              I am originally from the UK and was raised in a single-parent
              family with two siblings who have learning difficulties.
            </p>

            <p>
              My journey has taken me from the UK to Japan, Australia, New
              Zealand, Hong Kong, and now Canada. These experiences shaped my
              understanding of community, belonging, and the importance of
              building a fairer society.
            </p>

            <p>
              I have faced joblessness, discrimination, grief, housing
              insecurity, and food insecurity. These experiences inform why I
              believe politics must be grounded in compassion, dignity, and
              practical support for everyday people.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-4 font-serif text-3xl font-bold">
              What guides my work
            </h2>

            <ul className="space-y-4 text-lg">
              <li>Grassroots democracy</li>
              <li>Social and economic justice</li>
              <li>Climate responsibility</li>
              <li>Public services that protect people</li>
              <li>Community-led organizing</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
