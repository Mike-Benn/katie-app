'use client';
import { authClient } from '@/auth/auth-client';
import { Button } from '@base-ui/react';
import { toast } from 'sonner';
import { LogOut } from 'lucide-react';

export function LogoutButton() {
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/auth/login';
        },
        onError: (error) => {
          toast.error(error.error.message);
        },
      },
    });
  };
  return (
    <Button
      type="button"
      onClick={handleLogout}
      className="cursor-pointer flex gap-3 pl-4 py-3 w-full transition-colors hover:bg-gray-200 hover:text-gray-900 items-center"
    >
      <LogOut />
      <span>Log Out</span>
    </Button>
  );
}
