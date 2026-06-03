export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Git-like versioning for AI prompts
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Never lose a great prompt again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Prompt Rollback Manager gives AI product teams full version control over their prompts — branch, diff, merge, and rollback with confidence. Stop guessing which prompt version worked best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $29/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            ["Full history", "Every prompt change tracked"],
            ["Branching", "Experiment without risk"],
            ["Rollback", "One-click revert anytime"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything your AI team needs to manage prompts at scale.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited prompt versions",
              "Branching & merging",
              "Visual diff viewer",
              "One-click rollback",
              "Team collaboration",
              "API access"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              "How is this different from storing prompts in a spreadsheet?",
              "Spreadsheets have no branching, no diffs, and no rollback. Prompt Rollback Manager gives you a full Git-like history with visual diffs so you can see exactly what changed between versions and why a prompt regressed."
            ],
            [
              "Can my whole team use it?",
              "Yes. The Pro plan includes team collaboration so multiple members can work on prompts simultaneously, create branches for experiments, and merge changes — just like a code review workflow."
            ],
            [
              "Do you offer a free trial?",
              "We offer a 14-day money-back guarantee. If Prompt Rollback Manager doesn't save your team time within two weeks, we'll refund you in full — no questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Prompt Rollback Manager. All rights reserved.
      </footer>
    </main>
  )
}
