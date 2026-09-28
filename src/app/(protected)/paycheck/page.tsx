import { PageWrapper } from '@/components/PageWrapper';
import { auth } from '@/auth/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { SessionObserver } from '@/components/SessionObserver';
import { PaycheckForm } from '@/app/(protected)/paycheck/_components/PaycheckForm';

export default async function PaycheckPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/auth/login');

  return (
    <PageWrapper mainClassName="p-6">
      <div className="flex-1 flex">
        <div className="max-w-100 w-full my-0 mx-auto">
          <h1 className="text-2xl font-semibold pb-6">Paycheck Calculator</h1>
          <PaycheckForm />
        </div>
      </div>
    </PageWrapper>
  );
}
