"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Download, Maximize2, Minimize2 } from "lucide-react";
import ResumePreview from "./ResumePreview";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  onPrint: () => void;
}

export default function PreviewModal({ isOpen, onClose, data, onPrint }: PreviewModalProps) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 800, height: 600 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const resizeStartPos = useRef({ x: 0, y: 0, width: 0, height: 0 });

  // Responsive initial size based on screen size
  useEffect(() => {
    const updateInitialSize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setSize({ width: window.innerWidth - 32, height: window.innerHeight - 100 });
        setPosition({ x: 16, y: 50 });
      } else if (window.innerWidth < 768) {
        // Tablet
        setSize({ width: window.innerWidth - 100, height: window.innerHeight - 100 });
        setPosition({ x: 50, y: 50 });
      } else {
        // Desktop - Centered at top
        const modalWidth = 800;
        const modalHeight = 600;
        const centerX = (window.innerWidth - modalWidth) / 2;
        const centerY = 50; // 50px from top
        
        setSize({ width: modalWidth, height: modalHeight });
        setPosition({ x: Math.max(0, centerX), y: centerY });
      }
    };

    updateInitialSize();
    window.addEventListener('resize', updateInitialSize);
    return () => window.removeEventListener('resize', updateInitialSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragStartPos.current.x;
        const newY = e.clientY - dragStartPos.current.y;
        
        // Keep within viewport bounds
        const maxX = window.innerWidth - (isMaximized ? window.innerWidth : size.width);
        const maxY = window.innerHeight - (isMaximized ? window.innerHeight : size.height);
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
      
      if (isResizing && !isMaximized) {
        const newWidth = resizeStartPos.current.width + (e.clientX - resizeStartPos.current.x);
        const newHeight = resizeStartPos.current.height + (e.clientY - resizeStartPos.current.y);
        
        setSize({
          width: Math.max(400, Math.min(newWidth, window.innerWidth - 100)),
          height: Math.max(300, Math.min(newHeight, window.innerHeight - 100))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, size, isMaximized]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    resizeStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height
    };
  };

  const toggleMaximize = () => {
    if (isMaximized) {
      // Restore to centered position
      const modalWidth = 800;
      const modalHeight = 600;
      const centerX = (window.innerWidth - modalWidth) / 2;
      const centerY = 50;
      
      setPosition({ x: Math.max(0, centerX), y: centerY });
      setSize({ width: modalWidth, height: modalHeight });
    } else {
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    setIsMaximized(!isMaximized);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />
      
      {/* Modal */}
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="fixed bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
      >
        {/* Header */}
        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 cursor-move flex items-center justify-between"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors" />
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors" />
            <h3 className="text-white font-semibold ml-4">Resume Preview</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMaximize}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onPrint}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="h-[calc(100%-60px)] overflow-auto bg-gray-50 p-2 sm:p-4">
          <div className="bg-white shadow-sm rounded-lg min-h-full">
            <div className="scale-[0.75] sm:scale-[0.85] md:scale-[0.95] lg:scale-100 origin-top">
              <ResumePreview data={data} />
            </div>
          </div>
        </div>
        
        {/* Resize Handle */}
        {!isMaximized && (
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 hover:opacity-50 transition-opacity"
            onMouseDown={handleResizeStart}
          />
        )}
      </motion.div>
    </>
  );
}
