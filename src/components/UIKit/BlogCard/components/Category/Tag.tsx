"use client";
import React from "react";
import Link from "next/link";
import { useEditSearchParams } from "../Tag/useEditSearchParams";

import styles from "./Tag.module.scss";

interface TagLinkProps {
  tag: string;
  className?: string;
}
const searchParamName = "categories";

function setSearchParams(
  data: { [x: string]: string | string[] },
  separator = ","
) {
  const searchParams = new URLSearchParams();

  Object.keys(data).forEach((name) => {
    if (Array.isArray(data[name]))
      searchParams.set(name, data[name].join(separator));
    else searchParams.set(name, data[name]);
  });

  return searchParams.toString();
}

const Category: React.FC<TagLinkProps> = ({ className, tag }) => {
  // return (
  //   <Link
  //     href={
  //       "/blog" +
  //       "?" +
  //       setSearchParams({
  //         categories: tag,
  //         query: ["qwerty", "search"],
  //       })
  //     }
  //     className={`${styles.category} ${className}`}>
  //     {tag}
  // </Link>
  // );

  const onCategoryClick = useEditSearchParams(
    searchParamName,
    tag,
    "/blog"
  );
  return (
    <button
      className={`${styles.category} ${className}`}
      onClick={onCategoryClick}>
      {tag}
    </button>
  );
};

export default Category;
