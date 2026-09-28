import { Field, Input } from '@base-ui/react';
interface DisabledFieldProps {
  label?: string;
  value: string;
  className?: string;
}

export function DisabledField({ label = '', value = '', className = '' }: DisabledFieldProps) {
  return (
    <Field.Root className={`flex flex-col gap-2 ${className}`}>
      {label && <Field.Label className="font-semibold">{label}</Field.Label>}
      <Input
        value={value}
        readOnly
        className="cursor-default rounded-sm border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600 outline-none focus:ring-1 focus:border-indigo-600 focus:ring-indigo-600 opacity-50"
      />
    </Field.Root>
  );
}
