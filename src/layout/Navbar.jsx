import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-[var(--color-primary)]">
                    HZ <span className="text-[var(--color-primary)]">.</span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm text-[var(--color-muted-foreground)] rounded-full hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button size="sm">
                        Contact Me
                    </Button>
                </div>

                <button className="md:hidden p-2 text-[var(--color-foreground)]" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>

            {isMobileMenuOpen && 
                <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className=" py-2 text-lg text-[var(--color-muted-foreground)] rounded-full hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button size="sm">
                        Contact Me
                    </Button>
                </div>
            </div>}
        </header>
    );
};
