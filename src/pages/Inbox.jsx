import React from "react";
import AppShell from "../components/AppShell.jsx";

/**
 * 1:1 Inbox UI (static template)
 * - Uses AppShell for Sidebar + Topbar shell
 * - This page renders the "content area" exactly like your HTML
 */
export default function Inbox({ theme, setTheme }) {
  return (
    <AppShell theme={theme} setTheme={setTheme} active="inbox">
      {/* Page Header Section */}
      <div className="px-8 py-6 flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-3xl font-bold text-[#E4E5E6] tracking-tight">Inbox</h2>
          <p className="text-white/50 text-sm mt-1">
            Manage conversations across all connected channels
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-glass-border text-white text-sm font-bold hover:bg-white/5 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">refresh</span>
            Refresh
          </button>
          <button className="px-5 py-2.5 rounded-xl btn-primary-gradient text-background-dark text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">add</span>
            New Message
          </button>
        </div>
      </div>

      {/* Two-Panel Split Layout */}
      <div className="flex-1 px-8 pb-8 flex gap-6 overflow-hidden">
        {/* Left Panel: Conversation List */}
        <div className="w-[35%] flex flex-col glass-panel rounded-2xl overflow-hidden border-glass-border">
          {/* Filter Bar */}
          <div className="p-4 border-b border-glass-border space-y-3">
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 rounded-lg bg-background-dark/40 border border-glass-border flex items-center justify-between text-xs text-white/70 hover:border-primary/40">
                Channel
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="flex-1 px-3 py-2 rounded-lg bg-background-dark/40 border border-glass-border flex items-center justify-between text-xs text-white/70 hover:border-primary/40">
                Status
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="flex-1 px-3 py-2 rounded-lg bg-background-dark/40 border border-glass-border flex items-center justify-between text-xs text-white/70 hover:border-primary/40">
                Assignee
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>

            <div className="relative">
              <input
                className="w-full bg-background-dark/60 border-glass-border rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-white/30"
                placeholder="Search conversations..."
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                search
              </span>
            </div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Active Item */}
            <div className="relative group cursor-pointer bg-primary/5 active-glow border-l-4 border-primary">
              <div className="p-4 border-b border-glass-border flex gap-3">
                <div className="relative shrink-0">
                  <div
                    className="size-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArbygTiWCLUWgHz7La1M9E2pD-9ApUFc4OGnBvtSsDoL9xcfPzmREATGoFnOCq8rCse9-9I-25vw16Jevcn9GfufGrQYbX0BNbyg_XBGkwbCNFE9-8yU7_oGLDx8E2oiPY8oAgPLECpt-iwLAT55iXdxxaRwWZxzZg1LSNWAuOCP3DNH1Bi0RpsseeytMag_N1wXcVEbk8jvPF38z4qMc9r_n4VRE7erV22aHgrBPain_njCZsEOuSmkM5GDwFcwGjEr3cvgH3DGs')",
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-background-dark flex items-center justify-center p-0.5">
                    <div className="bg-[#1877F2] w-full h-full rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-white">
                        social_leaderboard
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-sm font-bold text-white truncate">Alex Rivera</h4>
                    <span className="text-[10px] text-white/40">2m ago</span>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-1 mb-2">
                    Can you provide more details on the pricing for enterprise licenses?
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase tracking-wider">
                      Pending
                    </span>
                    <div className="size-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative group cursor-pointer hover:bg-white/5 transition-colors">
              <div className="p-4 border-b border-glass-border flex gap-3">
                <div className="relative shrink-0">
                  <div
                    className="size-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3dq9Ni_pnWMYmnpFiNxcwESm4KZ2sGvCeuJj25S8_288LCGj1z0tmiHN02BDzIm5-KLnS4IKDiV0oMgmwSYp8kA9hj3O8kImGScd2B82fEbEWliiVqgRaklh5JpTnGK-TdgLfdsep6KhuDPVllnArLy0iUKgqNPhix-JmlDbP3fRyQYj1rsY6_qTpldqx05_qhzoM5aNZxgFnftN_ruEJLiq8JhFOyEb1kZADcqrtZGWYPWNMIk7Ohewprl9xbEX0-DwJM5cHLU0')",
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-background-dark flex items-center justify-center p-0.5">
                    <div className="bg-gradient-to-tr from-[#f9ce71] via-[#ee2a7b] to-[#6228d7] w-full h-full rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-white">camera</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-sm font-bold text-white truncate">Sarah Jenkins</h4>
                    <span className="text-[10px] text-white/40">15m ago</span>
                  </div>
                  <p className="text-xs text-white/50 line-clamp-1 mb-2">
                    I just sent the screenshots of the dashboard error...
                  </p>
                  <div className="flex items-center">
                    <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative group cursor-pointer hover:bg-white/5 transition-colors opacity-80">
              <div className="p-4 border-b border-glass-border flex gap-3">
                <div className="relative shrink-0">
                  <div
                    className="size-12 rounded-full bg-cover bg-center grayscale"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBo0H6C31BnSfx8p83zxE3FauX6nlTa9uMDZKN25MB0YCoGFM3IR4SqsJSuMnBhIgzFDPKPhmCw92OLEdQtBmRFksjZRRyJHDZBPSBmK_DGA5a_sp1PYLHuv0gEu6QFemXHr0m_lYcULHDxcPiTb3Wc17OszYq9gM2wCjUf34_sMPgDsETGPLvojjztyBqNwUSsr0Aqguqzx576U4o3Ez09X7birpIdfGWld4jt9HZpD8ny_64Z8yq1qYsbxcQcdtwC1l267brv9s')",
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-background-dark flex items-center justify-center p-0.5">
                    <div className="bg-[#FF4500] w-full h-full rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-white">forum</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-sm font-bold text-white truncate">TheRedditUser</h4>
                    <span className="text-[10px] text-white/40">1h ago</span>
                  </div>
                  <p className="text-xs text-white/40 line-clamp-1 mb-2">
                    Thanks for the quick resolution, very helpful!
                  </p>
                  <div className="flex items-center">
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/40 text-[10px] font-bold uppercase tracking-wider">
                      Resolved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Density skeleton items */}
            <div className="p-4 border-b border-glass-border flex gap-3 opacity-60">
              <div className="size-12 rounded-full bg-white/5" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-white/5 w-1/3 rounded" />
                <div className="h-3 bg-white/5 w-full rounded" />
              </div>
            </div>

            <div className="p-4 border-b border-glass-border flex gap-3 opacity-40">
              <div className="size-12 rounded-full bg-white/5" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-white/5 w-1/4 rounded" />
                <div className="h-3 bg-white/5 w-3/4 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Message Preview Area */}
        <div className="w-[65%] flex flex-col glass-panel rounded-2xl overflow-hidden border-glass-border">
          {/* Thread Header */}
          <div className="px-6 py-4 border-b border-glass-border flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-4">
              <div
                className="size-10 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZ9DFQ7ctgCwZxVB0n__Pmt6pPyXtu1lCFMfGyWG5AOCmwj_gGABnvFHJqAYVuYk3jeB4qaRWUqAL1fDEgI6IwrbfR2UwQLCEjwUhW3p0MUPMS7AlPTSOCywgn-4ejm6wOrKMP87IfTcfxVmXw4GQ81BaEWVyzV5xioCyIotSuJ-s4UXqacN_-8V8LhaZUW9o6sYXYktnTANMZecnL9DAP9BCRtV4YLpqKHaXyG9e-UjlzzeZv4MnHJ-EYYB5jqgD_yYlGYbm7_E0')",
                }}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white leading-none">Alex Rivera</h3>
                  <span className="px-1.5 py-0.5 rounded bg-[#1877F2]/20 text-[#1877F2] text-[10px] font-bold">
                    FACEBOOK
                  </span>
                </div>
                <p className="text-xs text-primary/70 mt-1 font-medium">
                  Currently viewing from London, UK
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-background-dark/60 border border-glass-border text-xs text-white/60 hover:text-white transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">person_add</span>
                Assign
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/30 text-xs text-primary font-bold hover:bg-primary/30 transition-all">
                Mark as Resolved
              </button>
            </div>
          </div>

          {/* Thread Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8 flex flex-col">
            {/* Inbound Message */}
            <div className="flex items-start gap-4 max-w-[80%]">
              <div
                className="size-8 rounded-full bg-white/5 shrink-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4EvfIQwz5Gzif5S8yI0yC8FK2I7uynfLPlbtbfOW1PPEUyyuJMWLzQRMtMe9dUsqeKcj3r3-g2ehWqktxvTcdIwER6eXV0e7vwmd1DA8ydQkITj5tezq4JC3eYUcKcpT9E0NhbuNzJNfSj8znYzev2iTgU-UAY0QQWQTMV-lV7pJojJA8b9lDDO8BlgK-E1_gZqByDPMIcUgsm9KwuPBr-jmpMNl94s04ZSugiqGMKWsFwp55gBJLVaYOPRTsNcKOWKz61yG8_U')",
                }}
              />
              <div className="space-y-1">
                <div className="p-4 rounded-2xl rounded-tl-none glass-panel border-white/10 text-sm text-white/90 leading-relaxed">
                  Hello! I saw your recent post about the enterprise integrations. I&apos;m currently
                  leading a team of 400 at a fintech startup.
                </div>
                <div className="text-[10px] text-white/30 flex items-center gap-2">
                  10:42 AM • Sent from Messenger
                </div>
              </div>
            </div>

            {/* Inbound Message */}
            <div className="flex items-start gap-4 max-w-[80%]">
              <div
                className="size-8 rounded-full bg-white/5 shrink-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRp17ynkAehu8xZW3RW7ltJJfRgL4K1GLWQghddiqodLC4_137mf8vf3gq96e_l7H-on-DYVGeQd95XzFhuj_ghgF6P27fjjQrdi_uiV8Q_wvgb_PpuA6eE_jkSR3AhbeTnrKSii2mupZNjMz6QsHcWWjY_Boxknz5r1nPe1IOJG5Jn0gEnVddFNsqiXDBTXYDSsdBjPWukeCK305eQlC0XISkSsBu22tjzVCkbB_73G0JysRyv51yJcK4NuCP7dvRrIa9tiIrG8k')",
                }}
              />
              <div className="space-y-1">
                <div className="p-4 rounded-2xl rounded-tl-none glass-panel border-white/10 text-sm text-white/90 leading-relaxed">
                  Can you provide more details on the pricing for enterprise licenses? Also, do you
                  support SSO for team management?
                </div>
                <div className="text-[10px] text-white/30 flex items-center gap-2">
                  10:43 AM • Seen
                </div>
              </div>
            </div>

            {/* Outbound Message */}
            <div className="flex items-start gap-4 max-w-[80%] self-end flex-row-reverse">
              <div className="size-8 rounded-full bg-primary/20 shrink-0 border border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">
                  support_agent
                </span>
              </div>
              <div className="space-y-1 flex flex-col items-end">
                <div className="p-4 rounded-2xl rounded-tr-none bg-primary/10 border border-primary/20 text-sm text-white/90 leading-relaxed">
                  Hi Alex! Thanks for reaching out. We absolutely support SSO (SAML 2.0 and Okta).
                  Our enterprise tiers start at $499/mo for large teams with unlimited channels.
                </div>
                <div className="text-[10px] text-primary/40 flex items-center gap-1">
                  10:45 AM • Delivered
                  <span className="material-symbols-outlined text-[12px]">done_all</span>
                </div>
              </div>
            </div>

            {/* Inbound Message */}
            <div className="flex items-start gap-4 max-w-[80%]">
              <div
                className="size-8 rounded-full bg-white/5 shrink-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg35tZ1n_qnuB5HpCqPurxQGnKSBeCbszKyfXZNu44yVVxSAY3KfpjNlhEZHAI3AWYzofqkzoz0TkxD23H-aBVduaJ1dfetM03gMZZ5TR96HSShvDbAan0AVOSCHFBAgcbIGb04fASBzGI95wov4FCvDKTsJBCu8ssB1_pv5ydk7C5-2HHeCTBZ9hJOEZStW2GksCB4CJBIBGQPhCktAphpqYQYMalk1PL5m5lhiGixfID51RuKRUN-CntmlCVJr4fgrrWuYMASCc')",
                }}
              />
              <div className="space-y-1">
                <div className="p-4 rounded-2xl rounded-tl-none glass-panel border-white/10 text-sm text-white/90 leading-relaxed">
                  That sounds exactly like what we need. Could we set up a quick demo for my CTO
                  later this week?
                </div>
                <div className="text-[10px] text-white/30 flex items-center gap-2">10:50 AM</div>
              </div>
            </div>
          </div>

          {/* Thread Footer / Composer */}
          <div className="p-6 border-t border-glass-border bg-background-dark/80">
            <div className="relative">
              <div className="absolute inset-0 z-10 bg-background-dark/60 backdrop-blur-[2px] rounded-xl flex items-center justify-center border border-white/5">
                <div className="flex items-center gap-2 text-white/40">
                  <span className="material-symbols-outlined text-xl">lock</span>
                  <p className="text-sm font-medium tracking-wide">Open conversation to reply</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 bg-white/5 rounded-xl px-4 py-3 text-sm text-white/20 border border-white/5 h-24">
                  Type your message...
                </div>
                <div className="flex flex-col gap-2">
                  <button className="size-10 rounded-lg glass-panel flex items-center justify-center text-white/20">
                    <span className="material-symbols-outlined">attach_file</span>
                  </button>
                  <button className="size-10 rounded-lg glass-panel flex items-center justify-center text-white/20">
                    <span className="material-symbols-outlined">sentiment_satisfied</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end right panel */}
      </div>
    </AppShell>
  );
}
