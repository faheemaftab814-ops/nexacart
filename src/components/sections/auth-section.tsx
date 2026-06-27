'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Eye, EyeOff, Facebook, Mail, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

interface AuthSectionProps {
  mode: 'login' | 'register' | 'forgot';
}

const socialButtons = [
  { label: 'Continue with Google', icon: Mail },
  { label: 'Continue with Facebook', icon: Facebook },
];

function InputField({
  label,
  type = 'text',
  placeholder,
  showPasswordToggle = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  showPasswordToggle?: boolean;
}) {
  const [show, setShow] = useState(false);
  const actualType = showPasswordToggle ? (show ? 'text' : 'password') : type;

  return (
    <label className="block space-y-2 text-sm font-medium text-foreground">
      <span>{label}</span>
      <div className="flex items-center gap-2 rounded-[1rem] border border-border/70 bg-background/80 px-4 py-3 shadow-sm backdrop-blur">
        <input type={actualType} placeholder={placeholder} className="w-full bg-transparent text-sm outline-none" />
        {showPasswordToggle ? (
          <button type="button" onClick={() => setShow((value) => !value)} className="text-muted-foreground transition hover:text-foreground">
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        ) : null}
      </div>
    </label>
  );
}

function AuthCard({ mode }: AuthSectionProps) {
  const isLogin = mode === 'login';
  const isRegister = mode === 'register';
  const isForgot = mode === 'forgot';

  const heading = useMemo(() => {
    switch (mode) {
      case 'register':
        return 'Create your account';
      case 'forgot':
        return 'Reset your password';
      default:
        return 'Welcome back';
    }
  }, [mode]);

  const subheading = useMemo(() => {
    switch (mode) {
      case 'register':
        return 'Join NexaCart to save your favorites and enjoy a smoother shopping journey.';
      case 'forgot':
        return 'Enter your email and we will guide you through the next steps.';
      default:
        return 'Sign in to continue your premium shopping experience.';
    }
  }, [mode]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto w-full max-w-xl rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-soft backdrop-blur-xl sm:p-8"
    >
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        <ShieldCheck className="h-4 w-4" />
        Secure shopping experience
      </div>

      <div className="mt-5 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{heading}</h1>
        <p className="text-sm leading-7 text-muted-foreground">{subheading}</p>
      </div>

      <div className="mt-6 space-y-3">
        {socialButtons.map((button) => {
          const Icon = button.icon;
          return (
            <button
              key={button.label}
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-[1rem] border border-border/60 bg-background/80 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              <Icon className="h-4 w-4" />
              {button.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
        <div className="h-px flex-1 bg-border/70" />
        <span>or continue with email</span>
        <div className="h-px flex-1 bg-border/70" />
      </div>

      <form className="mt-6 space-y-4">
        {isRegister ? <InputField label="Full Name" placeholder="Alex Morgan" /> : null}
        <InputField label="Email Address" type="email" placeholder="you@example.com" />
        {!isForgot ? <InputField label="Password" placeholder="Enter your password" showPasswordToggle /> : null}
        {isRegister ? <InputField label="Confirm Password" placeholder="Confirm your password" showPasswordToggle /> : null}

        {!isForgot ? (
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
              Remember me
            </label>
            <Link href="/auth/forgot-password" className="font-medium text-primary transition hover:underline">
              Forgot password?
            </Link>
          </div>
        ) : null}

        <Button className="w-full rounded-[1rem]">
          {isForgot ? 'Send Reset Link' : isRegister ? 'Create Account' : 'Sign In'}
        </Button>
      </form>

      <div className="mt-6 space-y-3 text-sm text-muted-foreground">
        {isForgot ? (
          <p>
            Remembered your password?{' '}
            <Link href="/auth/login" className="font-medium text-primary transition hover:underline">
              Sign in
            </Link>
          </p>
        ) : (
          <p>
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <Link href={isRegister ? '/auth/login' : '/auth/register'} className="font-medium text-primary transition hover:underline">
              {isRegister ? 'Sign in' : 'Create one'}
            </Link>
          </p>
        )}

        {!isForgot ? (
          <p>
            By continuing, you agree to our{' '}
            <a href="#" className="font-medium text-primary transition hover:underline">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-primary transition hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}

export function AuthSection({ mode }: AuthSectionProps) {
  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <div className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-background via-background to-slate-100/70 p-4 shadow-soft dark:to-slate-900/40 sm:p-6 lg:p-8">
        <AuthCard mode={mode} />
      </div>
    </Container>
  );
}
