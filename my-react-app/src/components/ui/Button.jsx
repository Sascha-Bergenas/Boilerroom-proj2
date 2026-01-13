export default function Button({ text, type, variant, disabled = false }) {
  return (
    <button
      type={type}
      disabled={disabled}
      variant={variant}
      className="btn btn-primary"
    >
      {text}
    </button>
  );
}
