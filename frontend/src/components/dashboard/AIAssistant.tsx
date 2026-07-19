import { BrainCircuit, Sparkles, Send } from "lucide-react";

export default function AIAssistant() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/60 backdrop-blur-xl p-6 h-full">

      <div className="flex items-center gap-3 mb-6">

        <div className="p-3 rounded-xl bg-cyan-500/10">
          <BrainCircuit
            className="text-cyan-400"
            size={26}
          />
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold">
            AI Copilot
          </h2>

          <p className="text-zinc-400 text-sm">
            Offensive Security Assistant
          </p>
        </div>

      </div>

      <div className="rounded-xl border border-cyan-500/20 bg-zinc-950/60 p-5">

        <div className="flex items-center gap-2 mb-3">

          <Sparkles
            className="text-cyan-400"
            size={18}
          />

          <span className="text-cyan-400 text-sm font-medium">
            Suggested Actions
          </span>

        </div>

        <ul className="space-y-3 text-sm text-zinc-300">

          <li>
            • Scan OWASP Juice Shop using Full Profile
          </li>

          <li>
            • Review 9 Critical Findings
          </li>

          <li>
            • Generate Executive Report
          </li>

          <li>
            • Launch Recon Workflow
          </li>

        </ul>

      </div>

      <div className="mt-6">

        <input
          placeholder="Ask AI anything..."
          className="
          w-full
          rounded-xl
          bg-zinc-950
          border
          border-zinc-700
          px-4
          py-3
          outline-none
          text-white
          focus:border-cyan-500
        "
        />

      </div>

      <button
        className="
        mt-4
        w-full
        rounded-xl
        bg-cyan-500
        hover:bg-cyan-400
        transition
        py-3
        text-black
        font-semibold
        flex
        items-center
        justify-center
        gap-2
        "
      >

        <Send size={18} />

        Ask AI

      </button>

    </div>
  );
}