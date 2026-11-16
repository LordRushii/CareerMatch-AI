import Image from "next/image"

import { cn } from "@/lib/utils"

/** The CareerMatch AI "CM" logo mark. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-sm",
        className
      )}
    >
      <Image
        src="/brand/Gemini_Generated_Image_qbgcx1qbgcx1qbgc.png"
        alt=""
        width={40}
        height={40}
        className="size-full object-cover"
        priority
      />
    </span>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 font-display text-[17px] font-semibold tracking-[-0.025em]",
        className
      )}
    >
      <BrandMark />
      CareerMatch AI
    </span>
  )
}
