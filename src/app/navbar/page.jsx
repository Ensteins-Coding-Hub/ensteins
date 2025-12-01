import Logo from "@/src/components/Logo"
import NavigationBar from "@/src/components/NavigationBar";



export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw] bg-black ">
      <div className="fixed w-full">
        <NavigationBar />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[20vw]">
          <Logo />
        </div>
      </div>
    </main>
  );
}
