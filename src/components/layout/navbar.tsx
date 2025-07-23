import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Book, Newspaper, LinkedinIcon, GithubIcon } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/cem-sirin",
    label: "GitHub",
    icon: GithubIcon,
    className: "hover:text-gray-700",
    ariaLabel: "GitHub",
  },
  {
    href: "https://linkedin.com/in/cem-sirin",
    label: "LinkedIn",
    icon: LinkedinIcon,
    className: "hover:text-blue-700",
    ariaLabel: "LinkedIn",
  },
];

function Navbar() {
  // Navigation links array with icon components
  const navigationLinks = [
    { href: "/", label: "CV", icon: Book },
    { href: "/blog", label: "Blog", icon: Newspaper },
  ];

  return (
    <header className="border-b mb-8 sticky top-0 z-50 bg-background/50 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left: Name */}
        <div className="flex flex-1 items-center">
          <span className="font-bold text-lg text-primary">Cem Şirin</span>
        </div>
        {/* Center: Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink
                    href={link.href}
                    className="flex flex-row items-center gap-2 font-medium text-foreground hover:text-primary"
                  >
                    <Icon
                      size={16}
                      className="text-muted-foreground/80"
                      aria-hidden="true"
                    />
                    <span>{link.label}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right: Social Icons */}
        <div className="flex flex-1 items-center justify-end gap-4">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className={link.className}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
