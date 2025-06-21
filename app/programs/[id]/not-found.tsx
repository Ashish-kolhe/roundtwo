import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-8">
          <Search className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Program Not Found</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          The program you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/programs">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Programs
          </Button>
        </Link>
      </div>
    </div>
  )
}
