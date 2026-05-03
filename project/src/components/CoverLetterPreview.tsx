import React, { useState } from 'react';
import { Copy, RotateCcw, Check, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface CoverLetterPreviewProps {
  letterContent: string;
  applicantName: string;
  onNewLetter: () => void;
}

const CoverLetterPreview: React.FC<CoverLetterPreviewProps> = ({ 
  letterContent, 
  applicantName, 
  onNewLetter 
}) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letterContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDownloadPDF = async () => {
    setDownloading(true);
    try {
      // Create ATS-friendly PDF with Times New Roman
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Set Times New Roman font for ATS compatibility
      pdf.setFont('times', 'normal');
      pdf.setFontSize(12);
      
      // Page margins (in mm)
      const margin = 25;
      const pageWidth = 210; // A4 width
      const pageHeight = 297; // A4 height
      const contentWidth = pageWidth - (margin * 2);
      const lineHeight = 6;
      
      // Split letter content into lines for proper formatting
      const lines = letterContent.split('\n');
      let yPosition = margin;
      
      lines.forEach((line, index) => {
        // Check if we need a new page
        if (yPosition > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        if (line.trim() === '') {
          // Empty line - add spacing
          yPosition += lineHeight;
        } else {
          // Split long lines to fit within margins
          const wrappedLines = pdf.splitTextToSize(line, contentWidth);
          
          wrappedLines.forEach((wrappedLine: string) => {
            // Check again for page break
            if (yPosition > pageHeight - margin) {
              pdf.addPage();
              yPosition = margin;
            }
            
            pdf.text(wrappedLine, margin, yPosition);
            yPosition += lineHeight;
          });
        }
      });

      // Generate filename with applicant name and timestamp
      const timestamp = new Date().toISOString().split('T')[0];
      const cleanName = applicantName.replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `${cleanName}_Cover_Letter_${timestamp}.pdf`;
      
      // Save the PDF
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Sorry, there was an error generating the PDF. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'serif' }}>
            Your Cover Letter
          </h1>
          <p className="text-amber-700 text-lg">
            Ready to impress, crafted with vintage charm ✨
          </p>
        </div>

        {/* Letter Preview */}
        <div className="relative">
          {/* Paper background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl transform rotate-1 shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl transform -rotate-1 shadow-lg"></div>
          
          {/* Main letter container */}
          <div 
            id="letter-content"
            className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200"
          >
            {/* Vintage letter styling */}
            <div className="max-w-none">
              {/* Typewriter effect styling */}
              <div 
                className="text-gray-800 leading-relaxed whitespace-pre-wrap"
                style={{ 
                  fontFamily: '"Courier New", Courier, monospace',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                {letterContent}
              </div>
            </div>

            {/* Signature area */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-right">
                <div 
                  className="text-2xl text-amber-800 mb-2"
                  style={{ 
                    fontFamily: 'cursive',
                    transform: 'rotate(-2deg)',
                    display: 'inline-block'
                  }}
                >
                  {applicantName}
                </div>
                <p className="text-sm text-gray-600 italic">
                  Crafted with RetroLetter ✨
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={handleDownloadPDF}
            disabled={downloading}
            className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            <span>{downloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          <button
            onClick={handleCopy}
            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg ${
              copied 
                ? 'bg-green-600 text-white' 
                : 'bg-amber-600 hover:bg-amber-700 text-white'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Copy Letter</span>
              </>
            )}
          </button>

          <button
            onClick={onNewLetter}
            className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-amber-700 font-semibold px-6 py-3 rounded-lg border-2 border-amber-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <RotateCcw className="w-5 h-5" />
            <span>New Letter</span>
          </button>
        </div>

        {/* Tips */}
        <div className="mt-12 bg-amber-100/50 rounded-2xl p-6 border border-amber-200">
          <h3 className="text-lg font-bold text-amber-900 mb-3" style={{ fontFamily: 'serif' }}>
            📝 Pro Tips for Your Cover Letter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-800">
            <div className="flex items-start space-x-2">
              <span>✨</span>
              <span>Customize further by adding specific company details</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>🎯</span>
              <span>Tailor keywords to match the job description</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>📞</span>
              <span>Follow up within a week of sending</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>💼</span>
              <span>Download as PDF to maintain professional formatting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterPreview;