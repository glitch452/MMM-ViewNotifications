import React, { JSX } from 'jsx-dom-cjs';

export interface LoadingErrorsProps {
  title?: string;
  error_list: string[];
}

const ErrorList = ({ title, error_list }: LoadingErrorsProps): JSX.Element => {
  return (
    <div className="loading small">
      {title}
      {title && error_list.length > 0 && <br />}
      {error_list.map((e, i) => (
        <>
          {e}
          {i !== error_list.length - 1 && <br />}
        </>
      ))}
    </div>
  );
};

export default ErrorList;
