import { Button } from "@/components/ui/button"
import { Download, FileIcon } from 'lucide-react'

interface ThuocTinhTaiXuongPDF {
  urlPDF: string
}

export function TaiXuongPDF({ urlPDF }: ThuocTinhTaiXuongPDF) {
  return (
    <div className="mt-6 bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-700">
      <div className="flex items-center mb-4">
        <FileIcon className="h-8 w-8 text-green-500 mr-3" />
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">PDF của bạn đã sẵn sàng!</h3>
      </div>
      <Button asChild className="w-full transition-all duration-300 ease-in-out transform hover:scale-105 bg-green-500 hover:bg-green-600 text-white">
        <a href={urlPDF} download="anh-da-chuyen-doi.pdf" className="flex items-center justify-center">
          <Download className="mr-2 h-4 w-4" /> Tải xuống PDF
        </a>
      </Button>
    </div>
  )
}

