'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File } from 'lucide-react'

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
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ease-in-out ${
        isDragActive 
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/50' 
          : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
      } ${isDragging ? 'scale-105' : ''}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center">
        <Upload className="h-12 w-12 text-blue-500 mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Kéo và thả các ảnh vào đây, hoặc nhấp để chọn tệp
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Hỗ trợ PNG, JPG, JPEG, GIF
        </p>
      </div>
    </div>
  )
}

