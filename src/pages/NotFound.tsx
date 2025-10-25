import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative flex flex-grow items-center bg-gradient-to-br from-primary to-[#010630] text-primary-foreground overflow-hidden py-32 md:py-40"> {/* Adjusted padding and background */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column ("404") */}
            <div className="text-center lg:text-left">
              <h1 className="text-[12rem] lg:text-[16rem] font-bold leading-none tracking-tight text-white/90"> {/* Custom large size */}
                404
              </h1>
            </div>

            {/* Right Column (Text & Button) */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                Oops! Page Not Found
              </h2>
              <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto lg:mx-0">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              <Link to="/">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-3 h-auto text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white" // Style from image
                >
                  Back To Home
                </Button>
              </Link>
            </div>

          </div>
        </div>

      </section>
    </Layout>
  );
};

export default NotFound;