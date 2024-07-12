import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Longalongo",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <div className="pt-[28px] lg:pt-[72px]">{children}</div>
        <Footer />
        {/* <footer className="bg-red-900 flex md:hidden">
          <div className="bg-yellow-300 flex flex-col p-[16px]">
            <div className="bg-red-600 mb-[24px]">
              <svg
                width="151"
                height="32"
                viewBox="0 0 151 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2104_893)">
                  <path
                    d="M3.24846 1.00165V21.99H15.57V25.1211H0V1.00165H3.24846Z"
                    fill="white"
                  />
                  <path
                    d="M19.8368 14.3615C20.4915 13.2424 21.4427 12.3244 22.586 11.7081C23.8098 11.0436 25.1867 10.7097 26.5801 10.7396C27.954 10.7131 29.3107 11.0471 30.5141 11.7081C31.63 12.3313 32.5515 13.2495 33.1768 14.3615C33.8206 15.5004 34.1491 16.7892 34.1287 18.0962C34.1482 19.4093 33.8198 20.7044 33.1768 21.8507C32.5529 22.9638 31.6311 23.8824 30.5141 24.5041C29.2894 25.1661 27.9132 25.4998 26.5201 25.4726C25.1448 25.4987 23.785 25.1793 22.5661 24.5439C21.4314 23.956 20.4857 23.0618 19.8368 21.9635C19.1624 20.785 18.8219 19.446 18.8517 18.0896C18.8368 16.7811 19.1772 15.493 19.8368 14.3615ZM22.586 20.5174C22.9538 21.2303 23.5081 21.8308 24.1903 22.2554C25.049 22.7759 26.061 22.9867 27.057 22.8527C28.0531 22.7187 28.9727 22.2479 29.6621 21.5191C30.5201 20.5961 30.9792 19.3737 30.9402 18.1161C30.9756 16.8551 30.5172 15.6299 29.6621 14.6998C28.9735 13.9629 28.0498 13.4867 27.0484 13.3524C26.047 13.2182 25.0299 13.4341 24.1703 13.9635C23.498 14.3996 22.9519 15.0033 22.586 15.7148C22.2014 16.4572 22.0006 17.2806 22.0006 18.1161C22.0006 18.9516 22.2014 19.775 22.586 20.5174Z"
                    fill="white"
                  />
                  <path
                    d="M50.1247 11.9403C50.5459 12.3157 50.8824 12.7759 51.1119 13.2905C51.3414 13.805 51.4587 14.3623 51.4561 14.9254V25.1211H48.2808V15.9801C48.2755 15.3049 48.0248 14.6545 47.5752 14.1493C47.3218 13.9103 47.0225 13.7248 46.6954 13.604C46.3682 13.4832 46.0199 13.4295 45.6714 13.4461C45.0805 13.4345 44.4951 13.561 43.9622 13.8156C43.4293 14.0702 42.9636 14.4458 42.6027 14.9121C41.7702 15.9782 41.3434 17.3036 41.3978 18.6534V25.1211H38.3025V11.3101H41.1183L41.318 13.9635C41.7943 12.9709 42.566 12.1486 43.528 11.6086C44.558 11.0275 45.7262 10.7342 46.9096 10.7595C48.0929 10.7319 49.2424 11.1541 50.1247 11.9403Z"
                    fill="white"
                  />
                  <path
                    d="M71.4527 11.3101V25.2073C71.466 26.4218 71.1287 27.6146 70.4809 28.6434C69.7996 29.6905 68.8444 30.5322 67.7183 31.0779C66.4084 31.7022 64.9697 32.0112 63.518 31.9801C62.2801 32.0122 61.0498 31.7792 59.9101 31.2968C58.7908 30.7642 57.7585 30.0665 56.848 29.2272L58.6852 27.0912C59.3559 27.7443 60.1239 28.2903 60.9618 28.7098C61.7444 29.084 62.6034 29.2725 63.4714 29.2604C64.7563 29.3445 66.0271 28.9523 67.0394 28.1592C67.4507 27.7866 67.7765 27.3301 67.9948 26.8207C68.213 26.3113 68.3186 25.761 68.3041 25.2073V22.6003C67.7619 23.495 66.9774 24.2192 66.0409 24.6899C64.9789 25.2245 63.8022 25.4931 62.6127 25.4726C61.3735 25.4821 60.1562 25.1467 59.098 24.5041C58.0482 23.8623 57.1817 22.9623 56.5817 21.8905C55.9384 20.7608 55.6077 19.4812 55.6232 18.1824C55.5896 16.8458 55.9209 15.5252 56.5817 14.3615C57.2185 13.2582 58.1372 12.3426 59.2444 11.7081C60.3283 11.0684 61.566 10.7337 62.8257 10.7396C63.9577 10.7286 65.0782 10.9664 66.1074 11.4361C67.0181 11.8248 67.8018 12.4588 68.3707 13.267L68.6037 11.33L71.4527 11.3101ZM66.6266 21.9237C67.4802 21.3049 68.0863 20.4048 68.3374 19.3831V16.6501C68.0379 15.6672 67.4139 14.814 66.5667 14.2288C65.6859 13.6149 64.6327 13.2945 63.5579 13.3134C62.9283 13.293 62.301 13.4001 61.7141 13.6281C61.1271 13.8562 60.5927 14.2004 60.1431 14.6401C59.6882 15.0805 59.3307 15.6106 59.0935 16.1966C58.8562 16.7826 58.7443 17.4115 58.7651 18.0431C58.7577 18.8873 58.9735 19.7185 59.3906 20.4532C59.8078 21.188 60.4116 21.8004 61.1416 22.2288C61.8711 22.6657 62.7068 22.8951 63.5579 22.8922C64.6599 22.9143 65.7384 22.574 66.6266 21.9237Z"
                    fill="white"
                  />
                  <path
                    d="M86.7498 21.5854L88.1877 23.8806C87.4488 24.3741 86.6445 24.7626 85.7979 25.0348C84.9932 25.3045 84.1507 25.4455 83.3017 25.4527C81.897 25.4848 80.5078 25.1558 79.2677 24.4975C78.1479 23.8976 77.2239 22.9906 76.6051 21.8839C75.9691 20.7281 75.6457 19.4274 75.6665 18.1094C75.6539 16.7981 76.009 15.5093 76.6916 14.3881C77.3716 13.2727 78.3363 12.3571 79.4874 11.7347C80.6736 11.0774 82.0111 10.7391 83.3682 10.7529C85.0269 10.6989 86.646 11.2644 87.9081 12.3383C89.1881 13.5098 90.0602 15.0573 90.3977 16.7562L79.4208 20.5638C79.8039 21.241 80.3656 21.8007 81.0451 22.1824C81.7532 22.5805 82.5554 22.7821 83.3682 22.7662C84.5943 22.7495 85.7815 22.3349 86.7498 21.5854ZM79.9867 14.5473C79.1456 15.478 78.7015 16.6986 78.7485 17.9502C78.7349 18.2066 78.7349 18.4634 78.7485 18.7197L86.8164 15.7479C86.5149 15.0343 86.0361 14.4088 85.4252 13.9303C84.7571 13.4617 83.9513 13.2283 83.1353 13.267C82.5491 13.244 81.9649 13.3463 81.4217 13.5671C80.8786 13.788 80.3893 14.1222 79.9867 14.5473Z"
                    fill="white"
                  />
                  <path
                    d="M107.745 18.7861H98.4255L95.856 25.1211H92.6409L103.225 0H103.425L114.002 25.1211H110.254L107.745 18.7861ZM106.64 15.9801L103.178 7.17081L99.5971 15.9801H106.64Z"
                    fill="white"
                  />
                  <path
                    d="M132.048 11.3101V25.2073C132.064 26.4212 131.729 27.6139 131.083 28.6435C130.402 29.6905 129.447 30.5322 128.321 31.078C127.008 31.7016 125.567 32.0106 124.114 31.9801C122.869 32.0151 121.632 31.782 120.486 31.2969C119.365 30.7629 118.331 30.0653 117.417 29.2272L119.261 27.0912C119.932 27.7443 120.7 28.2903 121.538 28.7098C122.32 29.0841 123.179 29.2725 124.047 29.2604C125.332 29.3445 126.603 28.9524 127.615 28.1592C128.031 27.7891 128.362 27.3336 128.585 26.8241C128.808 26.3146 128.918 25.763 128.906 25.2073V22.6003C128.364 23.4951 127.58 24.2193 126.643 24.6899C125.581 25.2245 124.405 25.4931 123.215 25.4727C121.974 25.4806 120.755 25.1453 119.694 24.5042C118.638 23.8638 117.764 22.9639 117.157 21.8906C116.514 20.7609 116.183 19.4812 116.199 18.1824C116.181 16.8539 116.524 15.5454 117.191 14.3947C117.827 13.2914 118.746 12.3758 119.853 11.7413C120.937 11.1016 122.175 10.7669 123.435 10.7728C124.567 10.7625 125.687 11.0003 126.716 11.4693C127.62 11.8499 128.401 12.472 128.973 13.267L129.206 11.33L132.048 11.3101ZM127.229 21.9237C128.08 21.3029 128.686 20.4036 128.94 19.3831V16.6501C128.633 15.6634 128 14.8097 127.142 14.2289C126.259 13.6148 125.204 13.2944 124.127 13.3134C123.498 13.2961 122.871 13.4046 122.285 13.6324C121.698 13.8603 121.164 14.2029 120.712 14.6401C120.259 15.0818 119.904 15.6123 119.668 16.1981C119.432 16.7839 119.32 17.4122 119.341 18.0431C119.339 18.8995 119.569 19.7405 120.006 20.4776C120.42 21.2044 121.019 21.8087 121.744 22.2289C122.471 22.6646 123.305 22.894 124.154 22.8922C125.258 22.9144 126.338 22.574 127.229 21.9237Z"
                    fill="white"
                  />
                  <path
                    d="M147.352 21.5854L148.79 23.8806C148.051 24.3741 147.247 24.7626 146.4 25.0348C145.595 25.3045 144.753 25.4455 143.904 25.4527C142.499 25.4848 141.11 25.1558 139.87 24.4975C138.75 23.8976 137.826 22.9906 137.207 21.8839C136.571 20.7281 136.248 19.4274 136.269 18.1094C136.256 16.7981 136.611 15.5093 137.294 14.3881C137.974 13.2727 138.939 12.3571 140.09 11.7347C141.276 11.0774 142.613 10.7391 143.971 10.7529C145.629 10.6989 147.248 11.2644 148.51 12.3383C149.79 13.5098 150.662 15.0573 151 16.7562L140.023 20.5638C140.406 21.241 140.968 21.8007 141.647 22.1824C142.355 22.5805 143.158 22.7821 143.971 22.7662C145.197 22.7495 146.384 22.3349 147.352 21.5854ZM140.589 14.5473C139.748 15.478 139.304 16.6986 139.351 17.9502C139.337 18.2066 139.337 18.4634 139.351 18.7197L147.419 15.7479C147.117 15.0343 146.638 14.4088 146.027 13.9303C145.359 13.4617 144.554 13.2283 143.738 13.267C143.151 13.244 142.567 13.3463 142.024 13.5671C141.481 13.788 140.992 14.1222 140.589 14.5473Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2104_893">
                    <rect width="151" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="bg-red-600 font-bold text-[16px] mb-[8px]">
              Stay Connected with Us
            </div>
            <div className="bg-red-600 flex flex-row gap-[8px] mb-[24px]">
              <button className="bg-blue-800 rounded-full w-[24px] h-[24px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM5.28073 9.11072H7.77357V16.6007H5.28073V9.11072ZM7.93779 6.79374C7.92161 6.05935 7.39645 5.5 6.54366 5.5C5.69088 5.5 5.13336 6.05935 5.13336 6.79374C5.13336 7.51291 5.6744 8.08837 6.5113 8.08837H6.52723C7.39645 8.08837 7.93779 7.51291 7.93779 6.79374ZM13.8935 8.93481C15.5339 8.93481 16.7637 10.0055 16.7637 12.3061L16.7636 16.6006H14.2709V12.5935C14.2709 11.587 13.9101 10.9002 13.0077 10.9002C12.319 10.9002 11.9088 11.3632 11.7286 11.8104C11.6627 11.9707 11.6466 12.194 11.6466 12.4178V16.6008H9.15342C9.15342 16.6008 9.18627 9.81371 9.15342 9.11089H11.6466V10.1718C11.9774 9.66179 12.57 8.93481 13.8935 8.93481Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </button>
              <button className="bg-blue-800 rounded-full w-[24px] h-[24px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM5.28073 9.11072H7.77357V16.6007H5.28073V9.11072ZM7.93779 6.79374C7.92161 6.05935 7.39645 5.5 6.54366 5.5C5.69088 5.5 5.13336 6.05935 5.13336 6.79374C5.13336 7.51291 5.6744 8.08837 6.5113 8.08837H6.52723C7.39645 8.08837 7.93779 7.51291 7.93779 6.79374ZM13.8935 8.93481C15.5339 8.93481 16.7637 10.0055 16.7637 12.3061L16.7636 16.6006H14.2709V12.5935C14.2709 11.587 13.9101 10.9002 13.0077 10.9002C12.319 10.9002 11.9088 11.3632 11.7286 11.8104C11.6627 11.9707 11.6466 12.194 11.6466 12.4178V16.6008H9.15342C9.15342 16.6008 9.18627 9.81371 9.15342 9.11089H11.6466V10.1718C11.9774 9.66179 12.57 8.93481 13.8935 8.93481Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-yellow-950 mb-[8px] font-bold text-[14px]">
              Contact Us
            </div>
            <div className="bg-red-600 flex flex-row gap-[12px]">
              <button className="bg-blue-800 rounded-full w-[24px] h-[24px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM5.28073 9.11072H7.77357V16.6007H5.28073V9.11072ZM7.93779 6.79374C7.92161 6.05935 7.39645 5.5 6.54366 5.5C5.69088 5.5 5.13336 6.05935 5.13336 6.79374C5.13336 7.51291 5.6744 8.08837 6.5113 8.08837H6.52723C7.39645 8.08837 7.93779 7.51291 7.93779 6.79374ZM13.8935 8.93481C15.5339 8.93481 16.7637 10.0055 16.7637 12.3061L16.7636 16.6006H14.2709V12.5935C14.2709 11.587 13.9101 10.9002 13.0077 10.9002C12.319 10.9002 11.9088 11.3632 11.7286 11.8104C11.6627 11.9707 11.6466 12.194 11.6466 12.4178V16.6008H9.15342C9.15342 16.6008 9.18627 9.81371 9.15342 9.11089H11.6466V10.1718C11.9774 9.66179 12.57 8.93481 13.8935 8.93481Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </button>
              <div className="bg-red-600 text-[12px]">healogika@gmail.com</div>
            </div>
            <div className="bg-red-600 flex flex-row gap-[12px] mb-[24px]">
              <button className="bg-blue-800 rounded-full w-[24px] h-[24px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM5.28073 9.11072H7.77357V16.6007H5.28073V9.11072ZM7.93779 6.79374C7.92161 6.05935 7.39645 5.5 6.54366 5.5C5.69088 5.5 5.13336 6.05935 5.13336 6.79374C5.13336 7.51291 5.6744 8.08837 6.5113 8.08837H6.52723C7.39645 8.08837 7.93779 7.51291 7.93779 6.79374ZM13.8935 8.93481C15.5339 8.93481 16.7637 10.0055 16.7637 12.3061L16.7636 16.6006H14.2709V12.5935C14.2709 11.587 13.9101 10.9002 13.0077 10.9002C12.319 10.9002 11.9088 11.3632 11.7286 11.8104C11.6627 11.9707 11.6466 12.194 11.6466 12.4178V16.6008H9.15342C9.15342 16.6008 9.18627 9.81371 9.15342 9.11089H11.6466V10.1718C11.9774 9.66179 12.57 8.93481 13.8935 8.93481Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </button>
              <div className="bg-red-600 text-[12px]">0877 0022 7888</div>
            </div>
            <div className="bg-red-600 text-[14px] font-bold mb-[8px]">
              Explore
            </div>
            <div className="bg-red-600 text-[12px] mb-[8px]">Disease</div>
            <div className="bg-red-600 text-[12px] mb-[8px]">Food & Diet</div>
            <div className="bg-red-600 text-[12px] mb-[8px]">
              Vitamins & Supplements
            </div>
            <div className="bg-red-600 text-[12px] mb-[8px]">Aging</div>
            <div className="bg-red-600 text-[12px] mb-[8px]">Collagen</div>
            <div className="bg-red-600 text-[12px] mb-[24px]">
              Biological Age
            </div>
            <div className="bg-green-900 text-[14px] mb-[8px] font-bold">
              Terms & Conditions
            </div>
            <div className="bg-red-600 text-[14px] mb-[24px] font-bold">
              Privacy Policy
            </div>
            <div className="bg-purple-900 text-nowrap text-[12px] mb-[8px]">
              Discover the secret to Lifelong & Youthful Body
            </div>
            <div className="bg-red-600 flex flex-row gap-[16px]">
              <div className="bg-fuchsia-800">
                <button className="bg-[#FFFFFF] rounded-md text-[#9B9B9B] text-[12px] flex justify-center items-center">
                  Enter your email address
                </button>
              </div>
              <div className="bg-green-950">
                <button className="bg-[#FFFFFF] text-black text-[12px] rounded-md flex justify-center items-center">
                  Sign Me Up
                </button>
              </div>
            </div>
          </div>
        </footer> */}
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import React from "react";
