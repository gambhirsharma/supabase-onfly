'use client'
import Image from 'next/image'
import { Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react'

interface uploadCardProps {
  url: string
  imageUrl: string;
  name: string;
}

const UploadCard = ({ url, imageUrl, name }: uploadCardProps) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(imageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openInNewTab = () => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
          <h3 className="text-lg font-medium truncate">File Preview</h3>
        </div>

        <div className="flex justify-center p-4 bg-gray-100 h-80">
          <Image
            src={url}
            alt={name}
            className="object-contain h-full w-full"
            width={64}
            height={64}
          />
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Filename</h4>
            <p className="text-gray-900 font-medium break-all">{name}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500">URL</h4>
            <div className="mt-1 flex items-center">
              <div className="bg-gray-100 rounded-lg flex-1 p-2">
                <p className="text-gray-700 text-sm truncate">{imageUrl}</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            <button
              onClick={copyToClipboard}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition duration-200"
            >
              {copied ? (
                <>
                  <Check size={18} className="mr-2" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} className="mr-2" />
                  <span>Copy URL</span>
                </>
              )}
            </button>

            <button
              onClick={openInNewTab}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center transition duration-200"
            >
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>

      {/*
      <div>
        <Image src={url} alt={name} width={100} height={100} className='aspect-square' />
        <strong>{name}:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{imageUrl}</a>
        </div>
        */}
    </>
  )
}

export default  UploadCard;
