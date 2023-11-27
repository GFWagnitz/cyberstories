import React from 'react';
import Link from "next/link";
import Image from 'next/image';

export interface PostItemProps {
  slug: string;
  title: string;
  thumbnail: string | undefined;
  headImage: string | undefined;
  publishDate: string;
  yearOfOccurrence: number;
}

export function PostItem({ title, slug, headImage, publishDate, yearOfOccurrence }: PostItemProps) {
  return (
    <Link href="/case/[slug]" as={`/case/${slug}`}>
    <div className="rounded overflow-hidden m-3">
      <div className="flex-1 p-4 inline-block align-middle">
        <h2 className="font-bold text-4xl mb-2 inline-block">{title}&nbsp;</h2>
        <span className="text-gray-700 text-xl">
          Publicado: {publishDate}&nbsp;
        </span>
        <span className="text-gray-700 text-xl">
          Ano: {yearOfOccurrence}
        </span>
      </div>
      <div className="w-48 h-48 inline-block align-middle ">
        <img className="h-48" src={headImage} alt={title} />
      </div>
    </div>
    </Link>
  );
}