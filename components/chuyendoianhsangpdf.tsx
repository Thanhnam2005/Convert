'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TaiLenTep } from './tai-len-tep'
import { TaiXuongPDF } from './tai-xuong-pdf'
import { chuyenDoiAnhSangPdf } from '@/lib/chuyen-doi-pdf'

export default function ChuyenDoiAnhSangPDF() {
  //const [danhSachAnh, setDanhSachAnh] = useState<File[]>([])
  const [urlPDF, setUrlPDF] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const xuLyTaiLenTep = (cacTep: File[]) => {
    //setDanhSachAnh(anhTruocDo => [...anhTruocDo, ...cacTep])
    setUrlPDF(null)
  }

  const xuLyChuyenDoi = async () => {
    setIsAnimating(true)
    // Simulate conversion process
    await new Promise(resolve => setTimeout(resolve, 2000))
    const blobPDF = new Blob(['Simulated PDF content'], { type: 'application/pdf' })
    const url = URL.createObjectURL(blobPDF)
    setUrlPDF(url)
    setIsAnimating(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white transition-all duration-500 ease-in-out">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Chuyển đổi ảnh sang PDF</h1>
        <Card className="max-w-2xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105">
          <CardContent className="p-6">
            <TaiLenTep onTaiLenTep={xuLyTaiLenTep} />
            {/* {danhSachAnh.length > 0 && (
              <>
                <XemTruocAnh danhSachAnh={danhSachAnh} />
                <Button onClick={xuLyChuyenDoi} className="w-full mt-4">
                  Chuyển đổi sang PDF
                </Button>
              </>
            )} */}
            <div className={`mt-4 transition-all duration-500 ease-in-out ${isAnimating ? 'animate-pulse' : ''}`}>
              <Button onClick={xuLyChuyenDoi} className="w-full" disabled={isAnimating}>
                {isAnimating ? 'Đang chuyển đổi...' : 'Chuyển đổi sang PDF'}
              </Button>
            </div>
            {urlPDF && <TaiXuongPDF urlPDF={urlPDF} />}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

