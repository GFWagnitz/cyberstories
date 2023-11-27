import React from 'react';
import Link from "next/link";

export interface PostItemProps {
  slug: string;
  title: string;
  thumbnail: string | undefined;
  headImage: string | undefined;
  publishDate: string;
  yearOfOccurrence: number;
}

export function PostItem({ title, slug, thumbnail, publishDate, yearOfOccurrence }: PostItemProps) {
  return (
    <Link className={"timeline-item " + (publishDate == "TBD" ? "disabled" : "" )} href="/case/[slug]" as={`/case/${slug}`}>
    <div className="rounded m-3">
      <div className="flex-1 p-4 inline-block align-middle">
        <h2 className={"font-bold text-4xl mb-2 inline-block " + (publishDate == "TBD" ? "text-gray-700" : "text-gray-300" )}>{title} ({yearOfOccurrence})&nbsp;</h2>
        <span className={"text-xl " + (publishDate == "TBD" ? "text-gray-700" : "text-gray-600" )}>
          Publicado: {publishDate}&nbsp;
        </span>
      </div>
      <div className="w-48 h-48 inline-block align-middle ">
      <span className="faded faded-all">
        <img className="h-48" src={thumbnail} alt={title} />
        </span>
      </div>
    </div>
    </Link>
  );
}