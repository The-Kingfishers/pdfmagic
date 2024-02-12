// This Page Numbering works for simple pdf but still gives error callstack size exceeded while upload larger file
//TODO: Solve this error - callstack size exceeded while upload larger file

import React, { useState, useEffect } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const PageNumbering = ({ url }) => {
  const [modifiedPdfUrl, setModifiedPdfUrl] = useState('');
  

  useEffect(() => {
    const addPageNumbers = async () => {
      try {
        // Decode the Base64 PDF data
        const pdfBytes = Uint8Array.from(atob(url.split(',')[1]), (c) => c.charCodeAt(0));

        // Load the PDF document
        const pdfDoc = await PDFDocument.load(pdfBytes);

        // Use the Helvetica font
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Iterate through each page and add page number
        const pageCount = pdfDoc.getPageCount();
        for (let i = 0; i < pageCount; i++) {
          const page = pdfDoc.getPage(i);
          const { width, height } = page.getSize();

          // Add page number as text in the bottom center
          const text = `${i + 1}`;
          const fontSize = 12;
          const textWidth = width / 2 - fontSize / 2;

          page.drawText(text, {
            x: textWidth,
            y: fontSize,
            font: helveticaFont,
            color: rgb(0, 0, 0),
            size: fontSize,
          });
        }

        // Save the modified PDF
        const modifiedPdfBytes = await pdfDoc.save();

        // Encode the modified PDF data to Base64
        const modifiedPdfBase64 = btoa(String.fromCharCode(...modifiedPdfBytes));

        // Set the modified PDF URL
        setModifiedPdfUrl(`data:application/pdf;base64,${modifiedPdfBase64}`);
      } catch (error) {
        console.error('Error adding page numbers:', error);
      }
    };

    // Call addPageNumbers only once when the component mounts
    addPageNumbers();
  }, [url]); // Dependency array ensures that addPageNumbers is called only when url changes

  return (
    <div className="md:flex h-[85vh]">
      <div className="md:w-2/3">
        <h2 className='text-center mt-10 font-bold text-3xl'>Page Numbering</h2>
        <div className="flex justify-center items-center h-[85vh]">
          <iframe src={modifiedPdfUrl || url} className="bg-cover h-[50vh] w-[40vh]" />
        </div>
        <p></p>
      </div>
      <div className="md:w-1/3 border-x-2">
        <div className="text-center">
          {/* The button triggers the addPageNumbers function implicitly through the useEffect hook */}
          <button className="btn mt-[70vh] bg-slate-800 text-white w-40 rounded-md">
            Add Page Numbers
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNumbering;
