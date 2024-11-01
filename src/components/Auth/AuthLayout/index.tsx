import black_logo from "../../../assets/logos/black_logo.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181F47",
      }}
    >
      <div className="flex flex-col gap-[20px] w-[400px] bg-white p-[20px] rounded-[8px]">
        <div className="flex flex-col items-center gap-[10px]">
          <h2 className="text-2xl font-extrabold">Linked Out Admin</h2>
          <div className="rounded-[8px] overflow-hidden">
            <img src={black_logo} width={100} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
