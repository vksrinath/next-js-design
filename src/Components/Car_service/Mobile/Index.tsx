"use client";

import { useState } from "react";
import Image from "next/image";
import Accordion from "./Accordian";

export default function AccordianCarServiceUI() {
  return (
    <div className=" w-full max-w-sm mx-auto rounded-lg">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className=" relative flex items-center gap-4 border-b  p-[1px] bg-gradient-to-r from-[#0841D1] to-[#6B01D8] rounded-md">
          <Image
            src="/assets/tabs/main_car.png"
            width={80}
            height={80}
            alt="Car"
            className="rounded-md"
          />
          <div className="text-white flex flex-col gap-1">
            <h2 className="text-md font-semibold">Maruti Swift</h2>
            <p className="text-xs font-light">Lxi, Petrol, 2019</p>
            <p className="text-sm font-light">DL12AT5140</p>
          </div>
          <div className="absolute right-3 top-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3 cursor-pointer "
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6537 6.51297L16.0551 8.57132L21.3621 12.767C21.8785 12.101 22.3104 11.5436 22.6187 11.1453C22.781 10.9356 22.9087 10.7703 22.9963 10.6566C23.0403 10.5996 23.0736 10.5563 23.096 10.527L23.0999 10.5219C23.5947 9.67337 23.3347 8.57229 22.4847 8.04328C22.455 8.02476 22.4263 8.00446 22.3988 7.9825L22.947 7.25599C22.3988 7.9825 22.3988 7.9825 22.3988 7.9825L22.0737 7.72245C21.8782 7.56609 21.6168 7.35707 21.3535 7.14641C20.8297 6.72738 20.2905 6.29601 20.255 6.26724C20.2529 6.26549 20.2507 6.26373 20.2486 6.26196C19.4603 5.61031 18.298 5.72801 17.6537 6.51297ZM23.4569 6.4988C25.1234 7.57168 25.6452 9.81606 24.5914 11.5372C24.5825 11.5514 24.57 11.5705 24.5653 11.5775C24.5621 11.5821 24.5568 11.5897 24.5544 11.593C24.5499 11.5994 24.5459 11.6048 24.5438 11.6077C24.5391 11.6141 24.5343 11.6204 24.5305 11.6255C24.5254 11.6322 24.5194 11.6402 24.5126 11.6491C24.5086 11.6543 24.5044 11.6598 24.4999 11.6656C24.4755 11.6976 24.4405 11.743 24.3963 11.8004C24.3075 11.9155 24.179 12.0818 24.0165 12.2917C23.6916 12.7117 23.2298 13.3076 22.6771 14.0204C22.552 14.1817 22.4222 14.349 22.2883 14.5217C22.2704 14.5526 22.2505 14.5828 22.2287 14.6121C22.1997 14.6509 22.1684 14.6867 22.135 14.7194C21.1133 16.0366 19.8726 17.6354 18.6329 19.2326C17.1643 21.1248 15.6971 23.0147 14.5969 24.4316C14.0469 25.1401 13.5886 25.7303 13.2678 26.1434L12.7643 26.7918C12.7643 26.7918 12.7638 26.7925 12.0658 26.218L12.7643 26.7918L12.7631 26.7934C12.2037 27.5118 11.3581 27.9317 10.4606 27.9419L5.97047 27.9999C5.55193 28.0053 5.18582 27.7109 5.08958 27.2916L4.0775 22.8815C3.8728 21.9862 4.07811 21.0453 4.6401 20.3234L16.2646 5.35519C16.2687 5.34985 16.273 5.34456 16.2772 5.33932C17.5472 3.77669 19.8186 3.55064 21.3633 4.82379L21.3697 4.82895L21.3919 4.84675C21.4104 4.8616 21.4359 4.88196 21.4673 4.90711C21.53 4.95738 21.6162 5.02639 21.718 5.10782C21.9215 5.27065 22.1868 5.48289 22.4501 5.69352C22.7134 5.90415 22.9747 6.11314 23.1701 6.26948L23.4569 6.4988ZM11.3686 25.6426L11.8718 24.9945C12.1926 24.5814 12.6508 23.9913 13.2009 23.2828C14.301 21.866 15.7682 19.9761 17.2367 18.0841C18.2836 16.7353 19.3311 15.3855 20.2467 14.2051L14.9389 10.0087L6.03476 21.474C5.81663 21.7541 5.73847 22.1151 5.81709 22.4596L6.66424 26.1509L10.4392 26.1021L10.4407 26.1021C10.8088 26.098 11.1477 25.9261 11.3686 25.6426ZM23.1293 10.483C23.1293 10.483 23.1274 10.4856 23.1211 10.4941C23.1258 10.4876 23.1293 10.483 23.1293 10.483ZM17.2628 27.0799C17.2628 26.5718 17.6628 26.1599 18.1564 26.1599H27.1064C27.5999 26.1599 28 26.5718 28 27.0799C28 27.588 27.5999 27.9999 27.1064 27.9999H18.1564C17.6628 27.9999 17.2628 27.588 17.2628 27.0799Z"
                fill="#D1D1DB"
              />
            </svg>
          </div>
        </div>

        <p className="text-center text-sm mt-8 font-medium">
          Services available for Maruti Suzuki
        </p>

        <Accordion />

        <button
          style={{
            letterSpacing: "2px",
          }}
          className="w-full text-xs bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0] text-white py-3 rounded-sm font-semibold mt-4"
        >
          BOOK A SERVICE
        </button>
      </div>
    </div>
  );
}
