import { SidebarNav } from '@/components/SidebarNav';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="h-17.5 border-b border-neutral-border px-3 py-1.5 flex items-center gap-3">
        <SidebarNav size={20} />

        <div>Katie App</div>
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
