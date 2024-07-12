import LandingPage from "@/components/landing/LandingPage";
import { useRouter } from "next/router";

export default function Home() {
      return (
            <div>
                  {/* if the user is not logged in them show landing page */}
                  <LandingPage />
                  {/* if the user is logged in than show the posts */}
            </div>
      );
}
