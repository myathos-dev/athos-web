// The blocks use Tailwind utility classes (Softr shipped Tailwind), so the app includes it.
export default {
  content: ["./index.html", "./app/**/*.jsx", "./{core,sales,legal,teleforms}/**/block-*.jsx"],
  theme: { container: { center: true, padding: "1rem" } },
};
