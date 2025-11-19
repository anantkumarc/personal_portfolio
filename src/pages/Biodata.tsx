import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Github, Linkedin, Phone, User } from "lucide-react";

const Biodata = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 px-4 py-12">
        <div className="container mx-auto max-w-5xl fade-in-up">
          <div className="bg-card rounded-xl shadow-hover p-8 md:p-12 border border-border">
            {/* Header with Profile */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-4 border-primary/20 shadow-hover">
                <User size={80} className="text-primary" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  Ananth kumar
                </h1>
                <p className="text-xl text-primary font-medium mb-2">Data Analyst</p>
                <p className="text-muted-foreground mb-4">
                  Passionate about data analysis and visualization • Fresh Graduate
                </p>
                <Button variant="default" className="gap-2 hover:shadow-hover transition-shadow">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Results-driven and analytical Data Analyst fresher with expertise in SQL, Python, and data visualization. 
                Strong foundation in statistical analysis and business intelligence. Proven ability to transform complex datasets 
                into actionable insights through internships and academic projects. Eager to contribute to data-driven decision making 
                in a dynamic organization.
              </p>
            </section>

            {/* Contact Cards */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-5 rounded-lg bg-card border border-border hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Email</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">[anant12345@gmail.com]</p>
                </div>
                
                <div className="p-5 rounded-lg bg-card border border-border hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Phone</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">[+91 9876589778]</p>
                </div>

                <div className="p-5 rounded-lg bg-card border border-border hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Location</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">[kodigehalli, banglore, india]</p>
                </div>

                <div className="p-5 rounded-lg bg-card border border-border hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">[linkedin.com/in/yourprofile]</p>
                </div>

                <div className="p-5 rounded-lg bg-card border border-border hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">GitHub</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">[github.com/yourprofile]</p>
                </div>
              </div>
            </section>

            {/* Personal Details */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-secondary">
                Personal Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                    <p className="font-medium text-foreground">Ananth kumar</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm text-muted-foreground mb-1">Date of Birth</p>
                    <p className="font-medium text-foreground">25-6-2005</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm text-muted-foreground mb-1">Gender</p>
                    <p className="font-medium text-foreground">Male</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm text-muted-foreground mb-1">Nationality</p>
                    <p className="font-medium text-foreground">Indian</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm text-muted-foreground mb-1">Languages</p>
                    <p className="font-medium text-foreground">English,Kannada,Telugu..</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm text-muted-foreground mb-1">Marital Status</p>
                    <p className="font-medium text-foreground">Single</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm text-muted-foreground mb-1">Current Address</p>
                    <p className="font-medium text-foreground">kodigehalli ,banglore, india</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Interests & Hobbies */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-accent">
                Interests & Hobbies
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-accent/5 border-l-4 border-accent">
                  <h3 className="font-semibold text-foreground mb-2">Professional Interests</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Data Science and Machine Learning</li>
                    <li>• Business Intelligence and Analytics</li>
                    <li>• Data Visualization and Storytelling</li>
                    <li>• Statistical Analysis</li>
                  </ul>
                </div>
                <div className="p-5 rounded-lg bg-secondary/5 border-l-4 border-secondary">
                  <h3 className="font-semibold text-foreground mb-2">Personal Hobbies</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• [ 1]</li>
                    <li>• [ 2]</li>
                    <li>• [ 3]</li>
                    <li>• [ 4]</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Biodata;
