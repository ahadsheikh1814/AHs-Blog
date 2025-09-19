
export default function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?:string;
}>) {
  return (
    <main className={`max-w-5xl mx-auto bg-gray-50 min-h-screen ${className}`}>{children}</main>
  );
}
