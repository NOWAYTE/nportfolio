"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div className="flex justify-center">
  <div className="grid grid-cols-1 gap-10 pl-10 sm:pl-20 md:pl-0 max-w-4xl">
    {products.map((product: Product, idx: number) => (
      <motion.div
        key={product.href}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: idx * 0.1 }}
      >
        <Link
          href={product.slug ? `/projects/${product.slug}` : product.href}
          key={product.href}
          className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 dark:hover:bg-[#4a4b49] dark:hover:backdrop-blur-sm rounded-2xl transition duration-200 pt-4"
        >
          <Image
            src={product.thumbnail}
            alt="thumbnail"
            height="200"
            width="200"
            className="rounded-md"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-black text-lg md:text-lg lg:text-lg dark:text-[#e7e5d5]">
                {product.title}
              </h1>
              <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl dark:text-[#7a8377]">
                {product.description}
              </Paragraph>
            </div>
            <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
              {product.stack?.map((stack: string) => (
                <span
                  key={stack}
                  className="text-xs md:text-xs lg:text-xs bg-gray-50 dark:bg-neutral-700 px-2 py-1 rounded-full text-secondary"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
</div>
  );
};
