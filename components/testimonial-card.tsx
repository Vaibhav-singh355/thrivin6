import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  imageSrc: string
}

export default function TestimonialCard({ quote, name, title, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="border-green-100 shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <QuoteIcon className="h-8 w-8 text-green-200" />
          <p className="text-gray-700 italic">{quote}</p>
          <div className="flex items-center space-x-4 pt-4">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full" />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
