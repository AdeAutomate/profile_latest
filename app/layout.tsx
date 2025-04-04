export const metadata = {
  title: "Personal Portfolio",
  description: "Python Automation Enthusiast Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
