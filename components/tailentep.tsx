'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

/**
 * Thuộc tính đầu vào cho component Tải Lên Tệp
 */
interface ThuocTinhTaiLenTep {
  onTaiLenTep: (cacTep: File[]) => void;
}

/**
 * Component Tải Lên Tệp - Cho phép người dùng kéo thả hoặc chọn tệp
 */
export function TaiLenTep({ onTaiLenTep }: ThuocTinhTaiLenTep) {
  const [dangKeoTha, setDangKeoTha] = useState(false);

  // Hàm xử lý khi tệp được thả vào
  const xuLyKeoTha = useCallback(
    (cacTepDuocChapNhan: File[]) => {
      if (cacTepDuocChapNhan.length === 0) {
        alert('Không có tệp nào được chọn. Vui lòng thử lại.');
      } else {
        onTaiLenTep(cacTepDuocChapNhan);
      }
    },
    [onTaiLenTep]
  );

  // Cấu hình Dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: xuLyKeoTha,
    onDragEnter: () => setDangKeoTha(true),
    onDragLeave: () => setDangKeoTha(false),
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'], // Chỉ chấp nhận tệp ảnh
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ease-in-out ${
        isDragActive
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/50'
          : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
      } ${dangKeoTha ? 'scale-105' : ''}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center">
        <Upload
          className={`h-12 w-12 mb-4 transition-transform duration-300 ease-in-out ${
            dangKeoTha ? 'text-blue-600 scale-110' : 'text-blue-500'
          }`}
        />
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Kéo và thả các tệp vào đây, hoặc nhấp để chọn tệp
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Hỗ trợ các định dạng: PNG, JPG, JPEG, GIF
        </p>
      </div>
    </div>
  );
}
