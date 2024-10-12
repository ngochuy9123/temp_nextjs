import DashboardMainMenu from "./components/main-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <div className="bg-muted overflow-auto p-4">
        <DashboardMainMenu />
      </div>
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, TOM!</h1>
        {children}
      </div>
    </div>
  );
}
