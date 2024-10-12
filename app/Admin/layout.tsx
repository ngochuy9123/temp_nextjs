import LightDarkToggle from "@/components/ui/light-dark-toggle";

type Props = {
  children?: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2 -mt-4" />
    </>
  );
};

export default AdminLayout;
