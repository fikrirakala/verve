import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      {
        title: "Features",
        href: "/",
      },
      {
        title: "Integrations",
        href: "/",
      },
      {
        title: "Pricing",
        href: "/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About",
        href: "/",
      },
      {
        title: "Careers",
        href: "/",
      },
      {
        title: "Contact",
        href: "/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "/",
      },
      {
        title: "Terms of Service",
        href: "/",
      },
      {
        title: "Privacy Policy",
        href: "/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col justify-between gap-8 py-20 md:flex-row">
          <div className="flex w-full max-w-xs flex-col items-start gap-8">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={32} />
            </Link>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit nobis
              quasi earum.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {footerLinks.map((link) => (
              <div key={link.title} className="flex flex-col gap-5">
                <h6 className="font-medium text-muted-foreground">
                  {link.title}
                </h6>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="hover:text-primary"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t py-14 md:flex-row">
          <div className="text-muted-foreground">&copy;2024 Verve.</div>
          <div className="flex justify-end gap-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Changelog
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
