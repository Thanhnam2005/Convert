'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload } from 'lucide-react'

interface ThuocTinhTaiLenTep {
  onTaiLenTep: (cacTep: File[]) => void
}

export function TaiLenTep({ onTaiLenTep }: ThuocTinhTaiLenTep) {
  const [isDragging, setIsDragging] = useState(false)
  const onDrop = useCallback((cacTepDuocChapNhan: File[]) => {
    onTaiLenTep(cacTepDuocChapNhan)
  }, [onTaiLenTep])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    }
  })

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ease-in-out transform ${
        isDragActive ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300 hover:border-blue-500 hover:scale-105'
      } ${isDragging ? 'animate-pulse' : ''}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400 transition-all duration-300 ease-in-out transform group-hover:scale-110" />
      <p className="mt-2 text-sm text-gray-600">
        Kéo và thả các ảnh vào đây, hoặc nhấp để chọn tệp
      </p>
    </div>
  )
}

