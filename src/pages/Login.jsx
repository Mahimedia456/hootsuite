import React, { useMemo, useState } from "react";
import { toggleTheme } from "../lib/theme.js";

export default function Login({ theme, setTheme }) {
  const isDark = theme === "dark";

  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit = useMemo(() => {
    return email.trim().length > 0 && password.trim().length > 0;
  }, [email, password]);

  function onSubmit(e) {
    e.preventDefault();
    // UI only for now
    console.log("Login:", { email, password });
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
      <div className="bg-glow flex min-h-screen w-full items-center justify-center p-4 sm:p-6">
        {/* Theme Toggle */}
        <button
          type="button"
          className="fixed top-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-primary border border-primary/20 hover:bg-primary/10 transition-all backdrop-blur-md"
          onClick={() => setTheme((t) => toggleTheme(t))}
          aria-label="Toggle theme"
        >
          <span className={`material-symbols-outlined text-[20px] ${isDark ? "hidden" : ""}`}>
            dark_mode
          </span>
          <span className={`material-symbols-outlined text-[20px] ${isDark ? "" : "hidden"}`}>
            light_mode
          </span>
        </button>

        {/* Card */}
        <main className="glass-effect relative z-10 w-full max-w-[460px] rounded-xl p-8 shadow-2xl transition-all duration-500">
          {/* Logo */}
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[32px]">hub</span>
            </div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary/80 dark:text-primary">
              MAHIMEDIA solutions
            </h2>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-primary/60">
              Enter your credentials to access the Unified Social Suite.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <input
                  type="email"
                  className="block w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-white/50 dark:bg-black/20 py-3.5 pl-11 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <a className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors" href="#">
                  Forgot password?
                </a>
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>

                <input
                  type={showPwd ? "text" : "password"}
                  className="block w-full rounded-lg border border-slate-200 dark:border-primary/20 bg-white/50 dark:bg-black/20 py-3.5 pl-11 pr-12 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-primary transition-colors"
                  onClick={() => setShowPwd((v) => !v)}
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPwd ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!canSubmit}
                className="group relative flex w-full justify-center rounded-lg bg-primary px-4 py-4 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 hover:bg-white hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="flex items-center">
                  Sign in
                  <span className="material-symbols-outlined ml-2 text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200 dark:bg-primary/10" />
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-primary/10" />
          </div>

          {/* Social Buttons (UI only) */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-primary/10 bg-white/50 dark:bg-white/5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium">Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-primary/10 bg-white/50 dark:bg-white/5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium">GitHub</span>
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-10 border-t border-slate-200 dark:border-primary/10 pt-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                © 2024 MAHIMEDIA solutions. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </div>
            </div>
          </footer>
        </main>

        {/* Glow accent */}
        <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      </div>
    </div>
  );
}
