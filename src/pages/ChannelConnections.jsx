// src/pages/ChannelConnections.jsx
import React, { useMemo, useState } from "react";
import AppShell from "../components/AppShell.jsx";

const CHANNELS = [
  {
    key: "facebook",
    name: "Facebook",
    status: "CONNECTED",
    accountLabel: "Mahimedia Solutions",
    meta: [
      { label: "Page ID", value: "FB_88291" },
      { label: "Last Sync", value: "2m ago" },
      { label: "Token Status", value: "Expiring in 58 days", accent: "primary" },
    ],
    actionPrimary: "Reconnect",
    actionSecondary: "Disconnect",
    icon: { bg: "bg-blue-600/20", border: "border-blue-500/30", text: "text-blue-400", glyph: "social_leaderboard" },
    statusTone: "ok",
  },
  {
    key: "instagram",
    name: "Instagram",
    status: "NEEDS RECONNECT",
    accountLabel: "@mahimedia_official",
    meta: [{ label: "Notice", value: "Requires Business Account", accent: "warn" }],
    actionPrimary: "Reconnect Now",
    actionSecondary: "Remove",
    icon: { bg: "bg-gradient-to-tr from-pink-500/20 to-orange-500/20", border: "border-pink-500/30", text: "text-pink-400", glyph: "camera" },
    statusTone: "warn",
  },
  {
    key: "reddit",
    name: "Reddit",
    status: "CONNECTED",
    accountLabel: "u/Mahimedia_Dev",
    note: "Note: Messaging may require approval for non-whitelisted domains.",
    actionPrimary: "Configure",
    actionSecondary: "Disconnect",
    icon: { bg: "bg-orange-600/20", border: "border-orange-500/30", text: "text-orange-400", glyph: "forum" },
    statusTone: "ok",
  },
];

const LOGS = [
  { id: "l1", channel: "Facebook", icon: { glyph: "social_leaderboard", cls: "text-blue-400" }, event: "Auth Token Refresh", time: "Oct 24, 2023 - 14:20:12", status: "Success" },
  { id: "l2", channel: "Instagram", icon: { glyph: "camera", cls: "text-pink-400" }, event: "API Handshake", time: "Oct 24, 2023 - 13:45:01", status: "Warning" },
  { id: "l3", channel: "Reddit", icon: { glyph: "forum", cls: "text-orange-400" }, event: "Content Synchronization", time: "Oct 24, 2023 - 12:10:55", status: "Success" },
];

function StatusBadge({ tone, label }) {
  const dotCls =
    tone === "warn" ? "bg-amber-500 animate-pulse" : "bg-primary";
  const textCls =
    tone === "warn" ? "text-amber-500" : "text-primary";

  return (
    <div className="mt-1 flex items-center gap-2">
      <span className={["flex h-2 w-2 rounded-full", dotCls].join(" ")} />
      <span className={[textCls, "text-sm font-semibold uppercase tracking-wide"].join(" ")}>
        {label}
      </span>
    </div>
  );
}

function LogStatusPill({ status }) {
  if (status === "Warning") {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500">
        Warning
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
      Success
    </span>
  );
}

export default function ChannelConnections({ theme, setTheme }) {
  const [q, setQ] = useState("");

  const filteredChannels = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return CHANNELS;
    return CHANNELS.filter((c) => {
      return (
        c.name.toLowerCase().includes(s) ||
        c.accountLabel.toLowerCase().includes(s) ||
        c.status.toLowerCase().includes(s)
      );
    });
  }, [q]);

  const filteredLogs = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return LOGS;
    return LOGS.filter((l) => {
      return (
        l.channel.toLowerCase().includes(s) ||
        l.event.toLowerCase().includes(s) ||
        l.status.toLowerCase().includes(s)
      );
    });
  }, [q]);

  return (
    <AppShell
      theme={theme}
      setTheme={setTheme}
      active="channelConnections"
      topSearchPlaceholder="Search accounts or logs..."
      topSearchValue={q}
      onTopSearchChange={setQ}
    >
      <div className="p-8 max-w-6xl mx-auto w-full space-y-8">
        {/* Title row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              Channel Connections
            </h2>
            <p className="text-slate-400 mt-2 text-lg">
              Manage and monitor connected social accounts
            </p>
          </div>

          <button
            className="bg-primary text-background-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(19,241,226,0.35)] transition-all"
            type="button"
          >
            <span className="material-symbols-outlined">add_link</span>
            Connect channel
          </button>
        </div>

        {/* Channel cards */}
        <section className="space-y-4">
          {filteredChannels.map((c) => (
            <div
              key={c.key}
              className={[
                "glass-panel rounded-2xl p-6 flex items-start gap-6 transition-all duration-300",
                c.statusTone === "warn" ? "border border-amber-500/20 hover:border-amber-500/40" : "border border-primary/10 hover:border-primary/25",
              ].join(" ")}
            >
              <div className={["w-16 h-16 rounded-xl flex items-center justify-center border", c.icon.bg, c.icon.border].join(" ")}>
                <span className={["material-symbols-outlined text-3xl leading-none", c.icon.text].join(" ")}>
                  {c.icon.glyph}
                </span>
              </div>

              <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-bold text-white">{c.name}</h3>
                  <StatusBadge
                    tone={c.statusTone}
                    label={c.statusTone === "warn" ? "Needs reconnect" : "Connected"}
                  />
                </div>

                <div className="lg:col-span-2 space-y-2">
                  <p className="text-slate-300 font-medium">
                    Account: <span className="text-white">{c.accountLabel}</span>
                  </p>

                  {/* Meta grid */}
                  {c.meta?.length ? (
                    <div className="grid grid-cols-2 gap-4 text-xs text-slate-500 uppercase font-bold tracking-widest mt-2">
                      {c.meta.map((m) => (
                        <div key={m.label}>
                          {m.label}:
                          <span
                            className={[
                              "block",
                              m.accent === "primary"
                                ? "text-primary"
                                : m.accent === "warn"
                                ? "text-amber-500"
                                : "text-slate-300",
                              "normal-case tracking-normal font-semibold mt-1",
                            ].join(" ")}
                          >
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {c.note ? (
                    <p className="text-xs text-slate-500 italic">{c.note}</p>
                  ) : null}

                  {/* Special instagram notice pill (to match screenshot) */}
                  {c.key === "instagram" ? (
                    <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-3 py-1.5 rounded-lg w-fit">
                      <span className="material-symbols-outlined text-sm">info</span>
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Requires Business account
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="lg:col-span-1 flex flex-col gap-2 justify-center">
                  <button
                    className={[
                      "w-full py-2 text-sm font-bold rounded-lg transition-all",
                      c.statusTone === "warn"
                        ? "bg-amber-500 text-background-dark hover:bg-amber-400"
                        : "bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-background-dark",
                    ].join(" ")}
                    type="button"
                  >
                    {c.actionPrimary}
                  </button>

                  <button
                    className="w-full py-2 text-slate-500 text-sm font-bold rounded-lg hover:text-rose-400 transition-all"
                    type="button"
                  >
                    {c.actionSecondary}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Logs */}
        <section className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">Connection Logs</h3>
            <button className="text-primary text-sm font-bold flex items-center gap-2 hover:underline" type="button">
              View all logs
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="glass-panel rounded-2xl overflow-hidden border border-primary/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/5 border-b border-primary/10">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">Channel</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">Event</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">Timestamp</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 text-right">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-primary/5">
                {filteredLogs.map((l) => (
                  <tr key={l.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className={["material-symbols-outlined text-lg", l.icon.cls].join(" ")}>
                          {l.icon.glyph}
                        </span>
                        <span className="text-sm font-medium text-slate-200">{l.channel}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-400">{l.event}</span>
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-500">{l.time}</span>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <LogStatusPill status={l.status} />
                    </td>
                  </tr>
                ))}

                {filteredLogs.length === 0 ? (
                  <tr>
                    <td className="px-6 py-8 text-center text-slate-500 text-sm" colSpan={4}>
                      No logs matched your search.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>

          <footer className="pt-6 text-center">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-[0.2em]">
              Unified Social Suite • V 2.4.1 Build 2023
            </p>
          </footer>
        </section>
      </div>
    </AppShell>
  );
}
