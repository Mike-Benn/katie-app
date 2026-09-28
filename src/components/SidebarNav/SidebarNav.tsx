'use client';
import { Dialog } from '@base-ui/react';
import { Menu } from 'lucide-react';
import { LogoutButton } from '@/components/Buttons/LogoutButton';
import { House } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { Plane } from 'lucide-react';
import { useState } from 'react';
import { SidebarLink } from '@/components/SidebarNav/SidebarLink';

interface SidebarNavProps {
  size: number;
}

export function SidebarNav({ size }: SidebarNavProps) {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="rounded-full transition-colors hover:bg-gray-200 p-2 cursor-pointer">
        <Menu size={size} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-x-0 top-(--header-height) bottom-0 bg-black/60" />
        <Dialog.Viewport className="fixed inset-x-0 top-(--header-height) bottom-0 flex">
          <Dialog.Popup className="w-70 bg-white flex">
            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="flex flex-col">
                <SidebarLink href="/" onClick={handleLinkClick}>
                  <House />
                  <span>Home</span>
                </SidebarLink>
                <SidebarLink href="/paycheck" onClick={handleLinkClick}>
                  <CircleDollarSign />
                  <span>Paycheck</span>
                </SidebarLink>
                <SidebarLink href="/health" onClick={handleLinkClick}>
                  <Leaf />
                  <span>Health</span>
                </SidebarLink>
                <SidebarLink href="/america" onClick={handleLinkClick}>
                  <Plane />
                  <span>America</span>
                </SidebarLink>
              </div>
              <div>
                <LogoutButton />
              </div>
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
