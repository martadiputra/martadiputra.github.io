const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="font-medium">I Made Dwi Martadi Putra (Martadi)</p>
          <p className="text-sm text-primary-foreground/80">
            Data Analyst • Turning Data Into Actionable Insights
          </p>
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
