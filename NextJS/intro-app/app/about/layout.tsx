export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>ABOUT PAGE LAYOUT </h1>
      {children}
    </>
  );
}
