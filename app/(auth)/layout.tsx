import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return  (
     <main className="flex min-h-screen w-full" >
      {children}

      <div className="auth-asset">
      <div>
        
      </div>
      </div>
     </main>
    );
  }