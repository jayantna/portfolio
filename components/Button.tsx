const Button = ({ children, className, ...props }) => (
  <button
    className={`inline-flex items-center rounded-md border border-transparent px-4 py-2 text-base font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
