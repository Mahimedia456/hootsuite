import React, { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell.jsx";
import logo from "../assets/images/logo.png";


function CodeBox({ value, onChange, onBackspace, inputRef }) {
  return (
    <input
      ref={inputRef}
      inputMode="numeric"
      pattern="[0-9]*"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
      onKeyDown={(e) => {
        if (e.key === "Backspace") onBackspace();
      }}
      className="h-14 w-14 rounded-xl border border-primary/20 bg-black/10 dark:bg-black/20 text-center text-xl font-semibold text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
      aria-label="Verification code digit"
    />
  );
}

export default function VerifyEmail({ theme, setTheme }) {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [submitted, setSubmitted] = useState(false);

  const refs = useRef([...Array(6)].map(() => React.createRef()));

  const fullCode = useMemo(() => code.join(""), [code]);
  const canSubmit = fullCode.length === 6;

  function setDigit(i, digit) {
    const next = [...code];
    next[i] = digit;
    setCode(next);
    if (digit && i < 5) refs.current[i + 1].current?.focus();
  }

  function backspace(i) {
    const next = [...code];
    if (next[i]) {
      next[i] = "";
      setCode(next);
    } else if (i > 0) {
      refs.current[i - 1].current?.focus();
      next[i - 1] = "";
      setCode(next);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    // UI flow: verified -> go reset
    setTimeout(() => {
      navigate("/reset-password");
    }, 700);
  }

  return (
    <AuthShell theme={theme} setTheme={setTheme}>
      <main className="glass-effect relative z-10 w-full max-w-[520px] rounded-xl p-8 shadow-2xl transition-all duration-500">
        {/* Brand */}
        <div className="mb-8 flex flex-col items-center text-center">
           <img
    src={logo}
    alt="Mahimedia Solutions"
    className="h-12 w-auto object-contain"
  />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-center">
          Verify your email
        </h1>
        <p className="mt-2 text-sm text-center text-slate-500 dark:text-primary/60">
          We&apos;ve sent a 6-digit code to your email. <br />
          Enter it below to continue.
        </p>

        <form onSubmit={onSubmit} className="mt-8">
          <div className="flex justify-center gap-3">
            {code.map((v, i) => (
              <CodeBox
                key={i}
                value={v}
                inputRef={refs.current[i]}
                onChange={(digit) => setDigit(i, digit)}
                onBackspace={() => backspace(i)}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={!canSubmit || submitted}
            className="mt-8 group relative flex w-full justify-center rounded-lg bg-primary px-4 py-4 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 hover:bg-white hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="flex items-center">
              {submitted ? "Verified" : "Verify"}
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
          </button>

          <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Didn&apos;t receive a code?{" "}
            <button type="button" className="font-semibold text-primary hover:text-primary/80 transition-colors">
              Resend code
            </button>
          </div>

          <div className="mt-6 border-t border-slate-200 dark:border-primary/10 pt-5 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">help</span>
              Contact support
            </button>
          </div>

          <div className="pt-8 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-primary/80 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              Back to login
            </Link>
          </div>
        </form>
      </main>
    </AuthShell>
  );
}
