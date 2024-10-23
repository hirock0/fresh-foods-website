"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const FooterNavLinks = () => {
    const pathName = usePathname()
    return (
        <ul className="flex max-md:flex-wrap max-md:justify-center  items-center  gap-5">
             <Link href={"/"} className={`${pathName == "/"?" text-slate-200":""}`}>
                <li>HOME</li>
              </Link>
              <Link href={"/foods/products"} className={`${pathName == "/foods/products"?" text-slate-200":""}`}>
                <li>PRODUCTS</li>
              </Link>
              <Link href={"/info/about_us"} className={`${pathName == "/info/about_us"?" text-slate-200":""}`}>
                <li>ABOUT US</li>
              </Link>
              <Link href={"/info/blog"} className={`${pathName == "/info/blog"?" text-slate-200":""}`}>
                <li>BLOG</li>
              </Link>
              <Link href={"/info/contact"} className={`${pathName == "/info/contact"?" text-slate-200":""}`}>
                <li>CONTACT</li>
              </Link>
        </ul>
    )
}

export default FooterNavLinks
