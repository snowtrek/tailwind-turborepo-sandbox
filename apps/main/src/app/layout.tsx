import "#/styles/tailwind.css";
import "ui/styles.css";
import "focus-visible";

import { ModeScript } from "ui";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: "Demo App",
    template: "%s | Demo App",
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <ModeScript />
      </head>
      <body className="bg-white antialiased dark:bg-zinc-900">{children}</body>
    </html>
  );
}
