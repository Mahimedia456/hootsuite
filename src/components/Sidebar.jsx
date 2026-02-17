import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Item({ to, icon, label, badge, active }) {
  const base =
    "group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all";
  const activeCls =
    "bg-primary/10 text-primary active-glow";
  const idleCls =
    "hover:bg-white/5 text-slate-400 hover:text-white";

  return (
    <NavLink to={to} className={`${base} ${active ? activeCls : idleCls}`}>
      {active ? (
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-full" />
      ) : null}

      <span className="material-symbols-outlined">{icon}</span>
      <span className="text-sm font-medium">{label}</span>

      {badge ? (
        <span className="ml-auto bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
          {badge}
        </span>
      ) : null}
    </NavLink>
  );
}

export default function Sidebar({ active = "dashboard" }) {
  return (
    <aside className="w-[280px] glass-sidebar flex flex-col h-full z-30">
      {/* Sidebar Header: Logo */}
      <div className="p-8 flex items-center gap-3">
        <div className="size-10 rounded-xl overflow-hidden active-glow bg-white/5 border border-primary/20 flex items-center justify-center">
          <img src={logo} alt="Mahimedia" className="h-7 w-auto object-contain" />
        </div>

        <div>
          <h1 className="text-white text-lg font-bold leading-none tracking-tight">
            Unified
          </h1>
          <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-semibold mt-1">
            Social Suite
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 space-y-1 mt-4">
        <Item to="/dashboard" icon="dashboard" label="Dashboard" active={active === "dashboard"} />
        <Item to="/inbox" icon="inbox" label="Inbox" badge="12" active={active === "inbox"} />
        <Item to="/publisher" icon="send" label="Publisher" active={active === "publisher"} />
        <Item to="/calendar" icon="calendar_today" label="Calendar" active={active === "calendar"} />
        <Item to="/analytics" icon="analytics" label="Analytics" active={active === "analytics"} />
        <Item to="/contacts" icon="group" label="Contacts" active={active === "contacts"} />
      </nav>

      {/* Sidebar Bottom */}
      <div className="p-4 mt-auto border-t border-white/5">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </NavLink>

        <div className="mt-4 p-4 glass-card rounded-2xl bg-primary/5 border border-primary/20">
          <p className="text-xs text-slate-400 mb-2">Storage used</p>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[65%] rounded-full shadow-[0_0_8px_rgba(19,241,226,0.5)]" />
          </div>
          <p className="text-[10px] text-slate-500 mt-2">6.5 GB of 10 GB</p>
        </div>
      </div>
    </aside>
  );
}
