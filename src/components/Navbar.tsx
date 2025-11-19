import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Portfolio
          </NavLink>
          
          <div className="flex items-center gap-8">
            <NavLink 
              to="/resume" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              activeClassName="text-primary after:w-full"
            >
              Resume
            </NavLink>
            <NavLink 
              to="/biodata" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              activeClassName="text-primary after:w-full"
            >
              Bio-data
            </NavLink>
            <NavLink 
              to="/projects" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              activeClassName="text-primary after:w-full"
            >
              Contacts
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
