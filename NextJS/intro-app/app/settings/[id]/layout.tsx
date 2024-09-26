export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Layout for each page in settings</h1>
      {children}
    </>
  );
}
