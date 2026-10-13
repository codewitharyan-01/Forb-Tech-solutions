import React, { useId } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
  rows?: number;
  className?: string;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  error,
  helperText,
  value,
  onChange,
  options = [],
  rows = 4,
  className = "",
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId = `field-${name}-${generatedId}`;
  const errorId = `error-${name}-${generatedId}`;
  const helperId = `helper-${name}-${generatedId}`;

  const baseInputClasses =
    "w-full rounded-xl border bg-[var(--surface-sunken)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-text)] transition-all duration-200 focus:bg-[var(--surface)] focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 disabled:opacity-50 min-h-[44px]";

  const borderClass = error
    ? "border-[#ff3b30] focus:border-[#ff3b30] focus:ring-[#ff3b30]/20"
    : "border-[var(--line)]";

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={fieldId} className="text-xs font-medium text-[var(--foreground)]">
        {label} {required && <span className="text-[#ff3b30]" aria-hidden="true">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${baseInputClasses} ${borderClass} resize-y`}
        />
      ) : type === "select" ? (
        <select
          id={fieldId}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${baseInputClasses} ${borderClass}`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${baseInputClasses} ${borderClass}`}
        />
      )}

      {error ? (
        <p id={errorId} className="text-xs font-normal text-[#ff3b30]" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-[11px] text-[#86868b]">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
