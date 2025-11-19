import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 px-4 py-12">
        <div className="container mx-auto max-w-4xl fade-in-up">
          <div className="bg-card rounded-xl shadow-hover p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">Resume</h1>
                <p className="text-muted-foreground">Data Analyst</p>
              </div>
              <Button variant="default" className="gap-2 hover:shadow-hover transition-shadow">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>

            {/* Profile Summary */}
            <section className="mb-10 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Profile Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Motivated and detail-oriented Data Analyst fresher with strong analytical skills and a passion for transforming data into actionable insights. 
                Proficient in SQL, Python, Excel, and data visualization tools. Experienced through internships in analyzing datasets, creating dashboards, 
                and supporting data-driven decision making.
              </p>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Education
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground">[Bachelor's Degree in Computer Science / Statistics / Data Science]</h3>
                  <p className="text-primary font-medium">[Atria institute of technology]</p>
                  <p className="text-sm text-muted-foreground mt-1">[oct , 2027] • CGPA: [8.5/10.0]</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-secondary">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Programming & Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "Python", "MySQL", "PostgreSQL"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Visualization & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Power BI", "Excel", "Google Sheets"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Analytics & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Pandas", "NumPy", "Data Analysis", "Statistical Analysis"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Other Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Data Cleaning", "ETL", "Git", "Problem Solving"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-foreground/10 text-foreground rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Internships */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-accent">
                Internship Experience
              </h2>
              <div className="space-y-6">
                <div className="p-5 rounded-lg border border-border hover:shadow-soft transition-shadow bg-card">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Data Analytics Intern</h3>
                      <p className="text-primary font-medium">[tstep enterprizes]</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">[3 - 25] - [5 - 25] • 3 months</p>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>Analyzed customer datasets using SQL and Python to identify trends and patterns</li>
                    <li>Created interactive dashboards in Tableau/Power BI for business stakeholders</li>
                    <li>Performed data cleaning and preprocessing on large datasets</li>
                    <li>Collaborated with cross-functional teams to deliver data-driven insights</li>
                  </ul>
                </div>

                <div className="p-5 rounded-lg border border-border hover:shadow-soft transition-shadow bg-card">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Business Analytics Intern</h3>
                      <p className="text-primary font-medium">[Infosys]</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">[6 - 25] - [7 -  25] • 2 months</p>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>Conducted market research and competitive analysis using data analytics tools</li>
                    <li>Developed Excel models for sales forecasting and performance tracking</li>
                    <li>Generated weekly reports on key business metrics and KPIs</li>
                    <li>Assisted in A/B testing analysis and presented findings to management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Projects
              </h2>
              <div className="space-y-5">
                <div className="p-5 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h3 className="text-lg font-semibold text-foreground mb-2">[Project 1: Sales Dashboard Analytics]</h3>
                  <p className="text-muted-foreground mb-2">
                    Developed an interactive sales dashboard using [Tableau/Power BI] to visualize key metrics and trends
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Technologies:</span> SQL, Python, Tableau/Power BI
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h3 className="text-lg font-semibold text-foreground mb-2">[Project 2: Customer Segmentation Analysis]</h3>
                  <p className="text-muted-foreground mb-2">
                    Performed customer segmentation using Python and clustering techniques to identify target groups
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Technologies:</span> Python, Pandas, Scikit-learn, Matplotlib
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h3 className="text-lg font-semibold text-foreground mb-2">[Project 3: Data Cleaning & Visualization]</h3>
                  <p className="text-muted-foreground mb-2">
                    Cleaned and transformed messy datasets, created visualizations to communicate insights effectively
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Technologies:</span> Excel, Python, Pandas, Seaborn
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-secondary">
                Certifications
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">[Google Data Analytics Professional Certificate]</h3>
                    <p className="text-sm text-muted-foreground">Coursera • [Year]</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">[SQL for Data Science]</h3>
                    <p className="text-sm text-muted-foreground">Platform • [Year]</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">[Excel Skills for Business]</h3>
                    <p className="text-sm text-muted-foreground">Platform • [Year]</p>
                  </div>
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

export default Resume;
