import React from 'jsx-dom-cjs';

export interface LoadingErrorsProps {
  error_list: string[];
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const LoadingErrors: React.FC<LoadingErrorsProps> = ({ error_list }) => {
  return (
    <div className="loading small">
      Configuration error!
      {error_list.map((e) => (
        <>
          <br />
          {e}
        </>
      ))}
    </div>
  );
};

export default LoadingErrors;
