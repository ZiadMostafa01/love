import { Outlet } from "react-router-dom";
import FloatingHearts from "./FloatingHearts";

function Layout() {
  return (
    <div className="relative min-h-screen w-full px-3 py-10 flex items-center justify-center bg-gradient-to-b from-[#ff6b81] to-[#ffc0cb] overflow-hidden">
      <FloatingHearts />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Outlet /> {/* هنا هيتحط المحتوى اللي بيتغير */}
      </div>
    </div>
  );
}

export default Layout;
