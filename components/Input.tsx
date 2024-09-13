// components/Input.js
const Input = ({ type = 'text', className, ...props }) => (
  <input
    type={type}
    className={`block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm ${className}`}
    {...props}
  />
);

export default Input;
