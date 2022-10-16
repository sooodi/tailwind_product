import { useState } from "react";
import basket from "../../assets/basket.svg";

import { RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import SizeProduct from "../SizeProduct";
import { useRouter } from "next/router";
import useProduct from "../../hook/productDetail";
import Head from "next/head";

const colors = [
  {
    name: "Washed Black",
    bgColor: "bg-gray-700",
    selectedColor: "ring-gray-700",
  },
  { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
  {
    name: "Washed Gray",
    bgColor: "bg-gray-500",
    selectedColor: "ring-gray-500",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const router = useRouter();
  const { Id } = router.query;
  const { isLoading, data: product, refetch } = useProduct(Id);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  console.log("product....", product);
  return (
    <div className="py-8">
      <Head>
        <title>{product?.title}</title>
        <meta name="description" content={product?.description} key="desc" />
      </Head>
      <div className="rounded-lg  bg-green-100">
        <div className="mx-auto max-w-2xl py-2 px-4 sm:py-4 sm:px-2 lg:max-w-7xl lg:px-4">
          <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8 ">
            <Tab.Group
              as="div"
              className="flex h-full flex-col-reverse justify-center "
            >
              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full pr-2 md:border-r md:border-gray-200">
                <Tab.Panel key={1}>
                  <img
                    src={product?.image}
                    alt={product?.image?.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            {/* Product info */}
            <div className="col-span-2 mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="flex py-2 ">
                <h3 className="flex w-3/4 text-xl font-bold tracking-tight text-gray-900 sm:w-full">
                  {product?.title}
                </h3>
                <div className="mt-3 flex  w-1/4 items-start justify-end ">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product?.rating?.rate > rating + 1
                            ? "text-indigo-500"
                            : "text-gray-300",
                          "h-3 w-3 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>{" "}
              *
              <div className="mt-3">
                <p className="text-3xl text-red-400">
                  <del className="mr-4 text-3xl text-gray-900">
                    {product?.price}
                  </del>
                  2.0
                </p>
              </div>
              <div className="mt-6">
                <h4 className="py-2 uppercase">Description</h4>
                <div
                  className="space-y-6 text-base text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                />
              </div>
              {/* Colors  size qty*/}
              <div className="grid grid-cols-1 gap-y-4 py-2 md:flex">
                <div className="mr-4 pr-4 md:border-r md:border-gray-200 ">
                  <h4 className="text-sm  uppercase text-gray-600">Color</h4>
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="p" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="mr-4 pr-4 md:border-r md:border-gray-200 ">
                  <h4 className="text-sm  uppercase text-gray-600">Size</h4>
                  <SizeProduct type={"size"} />
                </div>
              </div>
              <div className="mt-10  flex flex-row">
                <button
                  type="submit"
                  className=" flex flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium uppercase text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 md:w-1/4 md:px-2 "
                >
                  <div className=" w-30 h-30 relative mr-2">
                    <Image
                      src={basket}
                      className="h-6 w-6"
                      width={24}
                      height={24}
                    />
                  </div>
                  Add to card
                </button>

                <button
                  type="button"
                  className="ml-4  flex items-center justify-end rounded-md py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 md:w-3/4 md:px-3"
                >
                  <ShareIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
