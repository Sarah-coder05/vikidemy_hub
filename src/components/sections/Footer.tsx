import { Ig, Linkedin, Facebook } from "@/components/lib/socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/app/public/smallLogo.png";
import { email, phoneNumber } from "@/components/lib/constant";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const tags = [
    {
      id: 2,
      heading: "Company",
      sub1: { text: "About Us", link: "/about" },
      sub2: { text: "Careers", link: "/careers" },
      sub3: { text: "Become a Partner", link: "/partner" },
      sub4: { text: "Scholarship", link: "/scholarship" },
    },
    {
      id: 3,
      heading: "Resources",
      sub1: { text: "Blog", link: "https://medium.com/@edusproute" },
    },
  ];

  return (
    <footer className="bg-gray-200 pl-8 py-8 text-black">
      <div className="container mx-auto py-8">
        <div className="flex-wrap justify-between sm:flex sm:gap-6">
          <div className="pb-6">
            <div className="pb-8">
              <Link href="/">
                {/* <SmallLogo /> */}
                <Image src={logo} alt="logo" width={150} height={150} />
              </Link>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/1A7SGUufPe/"
                target="_blank"
              >
                <Facebook />
              </a>
              <a
                href="https://www.linkedin.com/company/vikidemy-hub/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/vikidemy_hub?igsh=OGU1dTB1NXJxc2d2"
                target="_blank"
              >
                <Ig />
              </a>
            </div>
          </div>
          <div className="sm:flex lg:gap-16">
            <div>
              <div className="my- h-[1px] w-[116px] bg-grey-700"></div>
              <p className="text-[18px] font-semibold text-black">
                Reach out to us
              </p>
              <p className="max-w-[206px] mt-4 text-sm text-black">
                Have questions? <br />
                We are here to help.
              </p>

              <div className="item-center fle gap-2 pt-[14px]">
                <div className="flex mt-3 gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.28716 6.00525C5.80916 7.09246 6.52075 8.11144 7.42193 9.01263C8.32312 9.91381 9.3421 10.6254 10.4293 11.1474C10.5228 11.1923 10.5696 11.2148 10.6288 11.232C10.839 11.2933 11.0972 11.2493 11.2753 11.1218C11.3254 11.0859 11.3683 11.043 11.454 10.9573C11.7162 10.6951 11.8473 10.564 11.9791 10.4783C12.4763 10.155 13.1172 10.155 13.6144 10.4783C13.7462 10.564 13.8773 10.6951 14.1396 10.9573L14.2857 11.1034C14.6843 11.502 14.8836 11.7013 14.9918 11.9153C15.2071 12.341 15.2071 12.8437 14.9918 13.2694C14.8836 13.4834 14.6843 13.6827 14.2857 14.0813L14.1675 14.1995C13.7703 14.5967 13.5717 14.7953 13.3016 14.947C13.002 15.1153 12.5366 15.2364 12.193 15.2353C11.8833 15.2344 11.6716 15.1743 11.2483 15.0542C8.9732 14.4085 6.82643 13.1901 5.03545 11.3991C3.24446 9.60813 2.02611 7.46136 1.38038 5.18631C1.26022 4.76298 1.20015 4.55131 1.19923 4.2416C1.1982 3.89793 1.31922 3.43256 1.48754 3.13293C1.63923 2.86291 1.83783 2.6643 2.23505 2.26708L2.35328 2.14886C2.75186 1.75028 2.95115 1.55099 3.16519 1.44273C3.59086 1.22742 4.09356 1.22742 4.51923 1.44273C4.73326 1.55099 4.93255 1.75028 5.33113 2.14886L5.47729 2.29501C5.73949 2.55722 5.87059 2.68832 5.95631 2.82015C6.27955 3.31732 6.27955 3.95825 5.95631 4.45542C5.87059 4.58726 5.73949 4.71836 5.47729 4.98056C5.39155 5.0663 5.34869 5.10916 5.3128 5.15927C5.1853 5.33734 5.14127 5.59554 5.20256 5.8058C5.21981 5.86497 5.24226 5.91173 5.28716 6.00525Z"
                      stroke="#020203ff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    href={`tel:+234${phoneNumber}`}
                    className="text-sm text-[#2eb6dc]"
                  >
                    {phoneNumber}
                  </a>
                </div>
                <div className="flex mt-3 gap-2">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 3.29297L7.62369 7.57955C8.11957 7.92667 8.36751 8.10022 8.6372 8.16745C8.87542 8.22683 9.12458 8.22683 9.3628 8.16745C9.63249 8.10022 9.88043 7.92667 10.3763 7.57955L16.5 3.29297M5.1 13.043H12.9C14.1601 13.043 14.7902 13.043 15.2715 12.7977C15.6948 12.582 16.039 12.2378 16.2548 11.8144C16.5 11.3331 16.5 10.7031 16.5 9.44297V4.64297C16.5 3.38285 16.5 2.75279 16.2548 2.27149C16.039 1.84813 15.6948 1.50392 15.2715 1.2882C14.7902 1.04297 14.1601 1.04297 12.9 1.04297H5.1C3.83988 1.04297 3.20982 1.04297 2.72852 1.2882C2.30516 1.50392 1.96095 1.84813 1.74524 2.27149C1.5 2.75279 1.5 3.38285 1.5 4.64297V9.44297C1.5 10.7031 1.5 11.3331 1.74524 11.8144C1.96095 12.2378 2.30516 12.582 2.72852 12.7977C3.20982 13.043 3.83988 13.043 5.1 13.043Z"
                      stroke="#0a0a0bff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <a
                    href={`mailto:${email}`}
                    className="text-sm mt-[-4px] text-[#2eb6dc]"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
            {tags.map((tag) => (
              <ul className="mb-6 mr-4" key={tag.id}>
                <h3 className="mb-4 text-[18px] font-semibold">
                  {tag.heading}
                </h3>
                <li>
                  <Link
                    href={tag.sub1.link}
                    className="mb-5 w-full text-black hover:text-gray-700 sm:text-sm md:mb-0 md:w-1/4"
                    target={
                      tag.sub1.link.startsWith("https") ||
                      tag.sub1.link.startsWith("mailto")
                        ? "_blank"
                        : ""
                    }
                  >
                    {tag.sub1.text}
                  </Link>
                </li>
                {tag.sub2 && (
                  <li>
                    <Link
                      href={tag.sub2.link}
                      className="mb-5 w-full text-black hover:text-gray-700 sm:text-sm md:mb-0 md:w-1/4"
                    >
                      {tag.sub2.text}
                    </Link>
                  </li>
                )}
                {tag.sub3 && (
                  <li>
                    <Link
                      href={tag.sub3.link}
                      className="mb-5 w-full text-black hover:text-gray-700 sm:text-sm md:mb-0 md:w-1/4"
                    >
                      {tag.sub3.text}
                    </Link>
                  </li>
                )}
              </ul>
            ))}
          </div>
        </div>
        <div className="my-6 w-full border-t border-gray-700"></div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex gap-4 text-sm">
            <Link href="/privacy">Privacy </Link>
            <Link href="/terms">Terms of Service </Link>
            <p>Cookie Policy </p>
          </div>
          <div>
            <p className="text-sm">
              © {currentYear} Vikidemy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
