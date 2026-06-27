import { AuthSection } from '@/components/sections/auth-section';

export const metadata = {
  title: 'Forgot Password',
  description: 'Premium forgot password experience for NexaCart.',
};

export default function ForgotPasswordPage() {
  return <AuthSection mode="forgot" />;
}
