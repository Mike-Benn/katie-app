'use client';
import { useAppForm } from '@/hooks/forms/useAppForm';
import { useSelector } from '@tanstack/react-form';
import { calculatePay } from '@/app/(protected)/paycheck/_lib/calculatePay';
import { DisabledField } from '@/components/FormFields/DisabledField';
import { Separator } from '@base-ui/react';

export function PaycheckForm() {
  const form = useAppForm({
    defaultValues: {
      regularHours: '',
      overtimeHours: '',
      nightshiftHours: '',
      weekendHours: '',
      holidayHours: '',
    },
  });

  const formValues = useSelector(form.store, (state) => state.values);
  const pay = calculatePay(formValues);
  return (
    <form
      className="flex flex-col pt-4 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <form.AppField
        name="regularHours"
        children={(field) => <field.MoneyField label="Regular Hours" />}
      />
      <form.AppField
        name="overtimeHours"
        children={(field) => <field.MoneyField label="Overtime Hours" />}
      />
      <form.AppField
        name="nightshiftHours"
        children={(field) => <field.MoneyField label="Nightshift Hours" />}
      />
      <form.AppField
        name="weekendHours"
        children={(field) => <field.MoneyField label="Weekend Hours" />}
      />
      <form.AppField
        name="holidayHours"
        children={(field) => <field.MoneyField label="Holiday Hours" />}
      />
      <DisabledField label="Gross Pay" value={pay.gross} />
      <DisabledField label="Net Pay" value={pay.net} className="pb-2" />
      <Separator orientation="horizontal" className="h-px bg-slate-400 w-full" />
      <DisabledField label="Excess Pay" value={pay.excess} />
    </form>
  );
}
