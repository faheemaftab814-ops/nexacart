import { AuthSection } from '@/components/sections/auth-section';

export const metadata = {
  title: 'Login',
  description: 'Premium login experience for NexaCart.',
};

export default function LoginPage() {
  return <AuthSection mode="login" />;
}
