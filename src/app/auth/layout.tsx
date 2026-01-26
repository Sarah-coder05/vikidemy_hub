export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#2eb6dc]  flex items-center justify-center pt-25 pb-10 ">
      <div className="">{children}</div>
    </main>
  );
}
