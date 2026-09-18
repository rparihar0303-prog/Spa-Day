import {
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  type ReactNode,
  forwardRef,
} from 'react';
import { AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';

interface BaseFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  className?: string;
}

export interface FormFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    BaseFieldProps {}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      error,
      required = false,
      optional = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || props.name;

    return (
      <div className={`flex flex-col ${className}`}>
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.18em] text-spa-text-secondary"
        >
          {label}{' '}
          {required && <span className="text-spa-gold">*</span>}
          {optional && (
            <span className="text-spa-text-muted/70 text-[10px] lowercase tracking-normal">
              (optional)
            </span>
          )}
        </label>

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={`w-full border bg-white/70 px-3.5 py-3 text-[14px] font-light text-spa-charcoal outline-none transition-all duration-300 placeholder:text-spa-text-muted/60 focus:border-spa-gold focus:bg-white focus:ring-1 focus:ring-spa-gold/30 ${
              error ? 'border-amber-700/60' : 'border-spa-sand'
            }`}
            {...props}
          />
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 flex items-center gap-1.5 text-[11px] text-amber-900"
            role="alert"
          >
            <AlertCircle className="h-3 w-3 shrink-0 text-amber-700" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    BaseFieldProps {
  options: (string | SelectOption)[];
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      options,
      placeholder = 'Select an option',
      error,
      required = false,
      optional = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || props.name;

    return (
      <div className={`flex flex-col ${className}`}>
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.18em] text-spa-text-secondary"
        >
          {label}{' '}
          {required && <span className="text-spa-gold">*</span>}
          {optional && (
            <span className="text-spa-text-muted/70 text-[10px] lowercase tracking-normal">
              (optional)
            </span>
          )}
        </label>

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : undefined}
            className={`w-full appearance-none border bg-white/70 px-3.5 py-3 pr-10 text-[14px] font-light text-spa-charcoal outline-none transition-all duration-300 focus:border-spa-gold focus:bg-white focus:ring-1 focus:ring-spa-gold/30 cursor-pointer ${
              error ? 'border-amber-700/60' : 'border-spa-sand'
            }`}
            {...props}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => {
              const val = typeof option === 'string' ? option : option.value;
              const lbl = typeof option === 'string' ? option : option.label;
              return (
                <option key={val} value={val}>
                  {lbl}
                </option>
              );
            })}
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-spa-gold"
            aria-hidden="true"
          />
        </div>

        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-1.5 flex items-center gap-1.5 text-[11px] text-amber-900"
            role="alert"
          >
            <AlertCircle className="h-3 w-3 shrink-0 text-amber-700" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = 'SelectField';

export interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseFieldProps {}

export const TextareaField = forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(
  (
    {
      label,
      error,
      required = false,
      optional = false,
      className = '',
      id,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const textareaId = id || props.name;

    return (
      <div className={`flex flex-col ${className}`}>
        <label
          htmlFor={textareaId}
          className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.18em] text-spa-text-secondary"
        >
          {label}{' '}
          {required && <span className="text-spa-gold">*</span>}
          {optional && (
            <span className="text-spa-text-muted/70 text-[10px] lowercase tracking-normal">
              (optional)
            </span>
          )}
        </label>

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={`w-full resize-none border bg-white/70 px-3.5 py-3 text-[14px] font-light text-spa-charcoal outline-none transition-all duration-300 placeholder:text-spa-text-muted/60 focus:border-spa-gold focus:bg-white focus:ring-1 focus:ring-spa-gold/30 ${
            error ? 'border-amber-700/60' : 'border-spa-sand'
          }`}
          {...props}
        />

        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-1.5 flex items-center gap-1.5 text-[11px] text-amber-900"
            role="alert"
          >
            <AlertCircle className="h-3 w-3 shrink-0 text-amber-700" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

TextareaField.displayName = 'TextareaField';

export interface StatusNoticeProps {
  status: 'success' | 'error';
  title?: string;
  message: ReactNode;
  className?: string;
}

export function StatusNotice({
  status,
  title,
  message,
  className = '',
}: StatusNoticeProps) {
  const isSuccess = status === 'success';

  return (
    <div
      role="status"
      className={`flex items-start gap-3.5 p-4 transition-all duration-300 ${
        isSuccess
          ? 'border border-[#C2D6BA] bg-[#EEF3EB] text-[#2C4A22]'
          : 'border border-[#DFC3C3] bg-[#F7EFEF] text-[#5A2929]'
      } ${className}`}
    >
      {isSuccess ? (
        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#3C6E2E]" />
      ) : (
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#8C3A3A]" />
      )}
      <div className="flex-1 text-[13px] font-light leading-relaxed">
        {title && <p className="mb-0.5 font-medium">{title}</p>}
        <div>{message}</div>
      </div>
    </div>
  );
}
