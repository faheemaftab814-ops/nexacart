import { AuthSection } from '@/components/sections/auth-section';

export const metadata = {
  title: 'Register',
  description: 'Premium register experience for NexaCart.',
};

export default function RegisterPage() {
  return <AuthSection mode="register" />;
}
