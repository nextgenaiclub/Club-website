"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, RotateCw, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EnhancedImageViewerProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
  memberName?: string
  memberRole?: string
}

export function EnhancedImageViewer({ src, alt, isOpen, onClose, memberName, memberRole }: EnhancedImageViewerProps) {
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)

  if (!isOpen) return null

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5))
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360)
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = src
    link.download = `${memberName || "image"}.jpg`
    link.click()
  }

  const resetTransforms = () => {
    setZoom(1)
    setRotation(0)
  }

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-full w-full h-full flex flex-col">
        {/* Header with controls */}
        <div className="flex justify-between items-center mb-4 bg-black/50 rounded-lg p-3">
          <div className="text-white">
            {memberName && <h3 className="text-lg font-semibold">{memberName}</h3>}
            {memberRole && <p className="text-yellow-400 text-sm">{memberRole}</p>}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleZoomOut()
              }}
              className="text-white hover:bg-white/20"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleZoomIn()
              }}
              className="text-white hover:bg-white/20"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleRotate()
              }}
              className="text-white hover:bg-white/20"
            >
              <RotateCw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleDownload()
              }}
              className="text-white hover:bg-white/20"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                resetTransforms()
              }}
              className="text-white hover:bg-white/20"
            >
              Reset
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Image container */}
        <div
          className="flex-1 flex items-center justify-center overflow-hidden rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative transition-transform duration-200 ease-out cursor-move"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
            }}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              draggable={false}
            />
          </div>
        </div>

        {/* Zoom indicator */}
        <div className="text-center mt-2">
          <span className="text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full">{Math.round(zoom * 100)}%</span>
        </div>
      </div>
    </div>
  )
}
