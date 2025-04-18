import Image from "next/image";
import React from "react";

import { slidesProps } from "../Carasoal";
import StarRatings from "react-star-ratings";

const Slides = ({ slide }: { slide: slidesProps }) => {
  return (
    <>
      <div className="flex items-center justify-between p-10 px-20 max-lg:10 bg-gradient-to-r from-[#0841D1] to-[#6B01D8] text-white h-[630px] max-lg:h-[400px]">
        <div className="w-1/2 max-lg:w-full space-y-4">
          <p className="text-lg text-gray-200">{slide.location}</p>
          <h1
            className="text-6xl font-extrabold"
            dangerouslySetInnerHTML={{ __html: slide.title }}
          ></h1>
          <p className="text-2xl">{slide.subtitle}</p>
          <div>
            <p className="text-[#66FFC7] text-lg font-light">{slide.offer}</p>
            <button
              style={{
                letterSpacing: "3px",
              }}
              className="bg-white text-[#1A70F1] font-extrabold w-[40%] py-4 rounded-md text-xs mt-1 cursor-pointer"
            >
              {slide.button}
            </button>
          </div>

          <div className="flex items-center space-x-6 pt-8">
            <div className="justify-center flex items-center flex-col">
              <div className="flex items-center space-x-1 ">
                <StarRatings
                  rating={slide.rating}
                  numberOfStars={5}
                  starRatedColor="#FADB14"
                  starEmptyColor="lightgray"
                  starDimension="30px"
                  starSpacing="1px"
                  svgIconPath="M25.5703 12.0286L18.4789 10.998L15.3089 4.57138C15.2223 4.39542 15.0799 4.25298 14.9039 4.1664C14.4626 3.94855 13.9264 4.13009 13.7057 4.57138L10.5357 10.998L3.44436 12.0286C3.24885 12.0565 3.0701 12.1487 2.93325 12.2884C2.76779 12.4584 2.67662 12.6872 2.67977 12.9244C2.68291 13.1617 2.78011 13.388 2.95 13.5536L8.08069 18.5558L6.86854 25.6192C6.84011 25.7835 6.8583 25.9525 6.92102 26.107C6.98375 26.2615 7.08852 26.3953 7.22344 26.4933C7.35836 26.5913 7.51804 26.6495 7.68436 26.6614C7.85069 26.6733 8.01702 26.6383 8.16448 26.5604L14.5073 23.2256L20.8501 26.5604C21.0233 26.6526 21.2244 26.6833 21.4171 26.6498C21.9031 26.566 22.2299 26.1052 22.1461 25.6192L20.9339 18.5558L26.0646 13.5536C26.2043 13.4167 26.2964 13.238 26.3244 13.0425C26.3998 12.5537 26.059 12.1012 25.5703 12.0286Z"
                  svgIconViewBox="0 0 29 30"
                />
              </div>
              <span className="text-xs mt-2 font-light">
                Based on 100+ ratings
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="36"
              viewBox="0 0 1 36"
              fill="none"
            >
              <rect width="1" height="36" rx="0.5" fill="#6B6B80" />
            </svg>
            <div className="flex items-center space-x-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="32"
                viewBox="0 0 27 32"
                fill="none"
              >
                <path
                  d="M4.2421 17.7972C4.38836 17.483 4.50152 17.1622 4.58382 16.8382C2.08934 15.327 0.421875 12.5887 0.421875 9.46082C0.421875 4.69969 4.28549 0.839844 9.05126 0.839844C13.817 0.839844 17.6807 4.69969 17.6807 9.46082C17.6807 14.222 13.817 18.0818 9.05126 18.0818C8.40047 18.0818 7.76623 18.0094 7.15658 17.8727C6.03301 19.2709 4.28862 20.0175 2.5232 19.8924C3.24109 19.3678 3.84044 18.66 4.24255 17.7972H4.2421Z"
                  fill="#4D0ACE"
                />
                <path
                  d="M1.95778 10.3034C1.95778 6.09905 5.36963 2.69052 9.5781 2.69052C12.0381 2.69052 14.2253 3.85545 15.6186 5.66249C14.3027 3.38045 11.8364 1.84375 9.01095 1.84375C4.80248 1.84375 1.39062 5.25228 1.39062 9.45709C1.39062 11.2038 1.98014 12.8133 2.97042 14.098C2.32634 12.9809 1.95778 11.6855 1.95778 10.3039V10.3034Z"
                  fill="#7236E6"
                />
                <path
                  d="M17.6756 9.18883C17.6756 9.18346 17.6751 9.1781 17.6751 9.17274C17.5731 6.19541 15.9571 3.60237 13.5726 2.13672C14.4305 3.47502 14.9279 5.06579 14.9279 6.77273C14.9279 11.5263 11.0706 15.3799 6.31238 15.3799C4.65968 15.3799 3.11611 14.9147 1.80469 14.1086C2.50781 15.2056 3.45381 16.1315 4.5662 16.8133C4.56396 16.8165 4.56217 16.8196 4.55994 16.8227C4.56799 16.8276 4.57559 16.833 4.58364 16.8375C4.50134 17.1614 4.38818 17.4823 4.24192 17.7964C3.84026 18.6593 3.24091 19.3671 2.52257 19.8917C4.28799 20.0168 6.03239 19.2701 7.15595 17.8719C7.16043 17.8728 7.16445 17.8737 7.16893 17.8746C7.16893 17.8728 7.16803 17.871 7.16803 17.8692C7.77857 18.0064 8.41281 18.0793 9.0645 18.0793C10.7346 18.0793 12.386 17.5864 13.782 16.6703C15.0129 15.8625 16.0296 14.74 16.7099 13.4347C17.2448 12.4083 17.5669 11.2765 17.655 10.1227C17.6782 9.82111 17.6854 9.49804 17.6756 9.18793V9.18883Z"
                  fill="#3C099D"
                />
                <path
                  d="M9.00283 13.2521C7.52725 13.2521 6.06687 12.6819 4.99698 11.6881C4.82254 11.5259 4.8127 11.2538 4.97462 11.0791C5.13653 10.9048 5.40937 10.8945 5.58381 11.0567C6.49626 11.9039 7.74239 12.3896 9.00283 12.3896C10.2633 12.3896 11.432 11.933 12.3337 11.1362C12.5126 10.979 12.7846 10.9955 12.9425 11.1738C13.1004 11.3521 13.0834 11.6242 12.9049 11.7819C11.8323 12.7297 10.4466 13.2516 9.00283 13.2516V13.2521Z"
                  fill="#E9E0FB"
                />
                <path
                  d="M14 7C14 7.82821 13.5526 8.5 13 8.5C12.4474 8.5 12 7.82821 12 7C12 6.17179 12.4479 5.5 13 5.5C13.5521 5.5 14 6.17179 14 7Z"
                  fill="#E9E0FB"
                />
                <path
                  d="M6 7C6 7.82821 5.55214 8.5 5 8.5C4.44786 8.5 4 7.82821 4 7C4 6.17179 4.44786 5.5 5 5.5C5.55214 5.5 6 6.17179 6 7Z"
                  fill="#E9E0FB"
                />
                <path
                  d="M23.1803 29.0511C23.034 28.7369 22.9209 28.4161 22.8386 28.0921C25.3335 26.5809 27.001 23.8426 27.001 20.7147C27.001 15.9536 23.1374 12.0938 18.3716 12.0938C13.6058 12.0938 9.74219 15.9536 9.74219 20.7147C9.74219 25.4759 13.6058 29.3357 18.3716 29.3357C19.0224 29.3357 19.6566 29.2633 20.2663 29.1266C21.3898 30.5248 23.1342 31.2714 24.8996 31.1463C24.1818 30.6217 23.5824 29.9139 23.1803 29.0511Z"
                  fill="#043AE3"
                />
                <path
                  d="M23.1801 29.0529C23.0347 28.7405 22.922 28.421 22.8397 28.0989C25.3338 26.5908 27.0008 23.8552 27.0008 20.7304C27.0008 17.6056 25.3575 14.9089 22.893 13.3945C23.7508 14.7328 24.2482 16.3236 24.2482 18.0305C24.2482 22.7841 20.3909 26.6377 15.6327 26.6377C13.98 26.6377 12.4364 26.1725 11.125 25.3664C12.656 27.7543 15.3357 29.3375 18.3853 29.3375C19.032 29.3375 19.6618 29.2656 20.2679 29.1306C21.3914 30.5275 23.1349 31.2732 24.8995 31.1481C24.1816 30.6235 23.5822 29.9157 23.1801 29.0529Z"
                  fill="#0D39C1"
                />
                <path
                  d="M11.2781 21.5573C11.2781 17.353 14.6899 13.9444 18.8984 13.9444C21.3585 13.9444 23.5457 15.1094 24.9389 16.9164C23.623 14.6344 21.1567 13.0977 18.3313 13.0977C14.1228 13.0977 10.7109 16.5062 10.7109 20.7106C10.7109 22.4573 11.3005 24.0668 12.2907 25.3515C11.6466 24.2344 11.2781 22.939 11.2781 21.5573Z"
                  fill="#2154F3"
                />
                <path
                  d="M23.5774 21.1211V20.9808C23.5774 20.5161 23.2004 20.1389 22.7347 20.1389H20.7712C20.8101 19.9839 20.9255 19.5933 21.1567 19.3306C21.451 18.9968 21.812 18.0616 21.6116 17.2465C21.4112 16.4315 20.9027 16.0977 20.6088 16.3381C20.3145 16.5785 20.3279 17.7809 19.6861 18.3819C19.0442 18.983 18.3353 20.1988 18.028 20.3726H16.5703V25.182H17.7878C17.7878 25.182 18.0821 25.5158 19.0983 25.5158C19.1203 25.5158 19.0424 25.5114 22.1917 25.5114C22.9485 25.5114 23.2035 24.5493 22.779 24.2615C23.1945 24.0176 23.3641 23.4309 22.957 23.1279C23.7071 22.6636 23.5291 21.9286 23.1735 21.7489C23.3905 21.6462 23.5779 21.3704 23.5779 21.1202L23.5774 21.1211Z"
                  fill="#F3CFC2"
                />
                <path
                  d="M14.1435 19.7188H16.0928C16.3576 19.7188 16.5723 19.9332 16.5723 20.1978V25.3776C16.5723 25.6421 16.3576 25.8566 16.0928 25.8566H14.1435C13.8788 25.8566 13.6641 25.6421 13.6641 25.3776V20.1978C13.6641 19.9332 13.8788 19.7188 14.1435 19.7188Z"
                  fill="#B4C0E8"
                />
                <g opacity="0.4">
                  <path
                    d="M13.6645 22.7969V25.3801C13.6645 25.6446 13.8792 25.8591 14.144 25.8591H16.0932C16.358 25.8591 16.5727 25.6446 16.5727 25.3801V22.7969H13.6641H13.6645Z"
                    fill="#053AE2"
                  />
                </g>
              </svg>
              <div className="flex space-x-2 flex-col text-left">
                <p className="text-2xl font-light">5000+ </p>
                <p className="text-xs font-light mt-1">Registered users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 max-lg:hidden">
          <Image
            src={slide.image}
            alt="Car Service"
            width={730}
            height={650}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Slides;
