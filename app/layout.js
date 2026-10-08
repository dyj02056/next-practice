import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav aria-label="주 메뉴">
          <Link href="/">처음</Link>
          <Link href="/notes">메모</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}