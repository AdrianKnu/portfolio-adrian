import { useI18n } from "../i18n.jsx";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {t.footer.built}
        </p>
        <a href="#top" className="transition-colors hover:text-fg">
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
