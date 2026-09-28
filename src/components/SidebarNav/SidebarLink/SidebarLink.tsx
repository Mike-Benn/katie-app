import Link from 'next/link';

interface SidebarLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

export function SidebarLink({ href, onClick, children }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex pl-4 py-3 gap-3 transition-colors hover:bg-gray-200 hover:text-gray-900"
    >
      {children}
    </Link>
  );
}
