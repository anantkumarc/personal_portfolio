import CircularButton from "@/components/CircularButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { User } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-16 fade-in-up">
            {/* Profile Image */}
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 shadow-hover flex items-center justify-center overflow-hidden border-4 border-card hover:scale-105 transition-transform duration-300">
              <User size={100} className="text-primary" />
            </div>

            {/* Hello Text & Bio */}
            <div className="text-center md:text-left">
               <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 whitespace-nowrap">
                Hello, this is Ananth
               </h1>
              <p className="text-2xl text-foreground font-medium mb-4">
                Welcome to my portfolio
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aspiring Data Analyst passionate about transforming data into actionable insights. 
                Skilled in SQL, Python, and data visualization tools.
              </p>
            </div>
          </div>

          {/* Circular Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 fade-in-delay">
            <div className="hover:-translate-y-2 transition-transform duration-300">
              <CircularButton to="/resume" label="Resume" variant="primary" />
            </div>
            <div className="hover:-translate-y-2 transition-transform duration-300">
              <CircularButton to="/biodata" label="Bio Data" variant="secondary" />
            </div>
            <div className="hover:-translate-y-2 transition-transform duration-300">
              <CircularButton to="/biodata" label="Contact" variant="accent" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
