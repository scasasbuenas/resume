declare module 'html2pdf.js' {
    interface Html2PdfOptions {
      margin?: number | number[];
      filename?: string;
      image?: {
        type?: string;
        quality?: number;
      };
      html2canvas?: {
        scale?: number;
        useCORS?: boolean;
        letterRendering?: boolean;
      };
      jsPDF?: {
        unit?: string;
        format?: string;
        orientation?: 'portrait' | 'landscape';
      };
      pagebreak?: {
        mode?: string[];
        before?: string[];
        after?: string[];
        avoid?: string[];
      };
    }
  
    interface Html2PdfInstance {
      set(options: Html2PdfOptions): Html2PdfInstance;
      from(element: HTMLElement): Html2PdfInstance;
      save(): Promise<void>;
    }
  
    function html2pdf(): Html2PdfInstance;
    function html2pdf(element: HTMLElement, options?: Html2PdfOptions): Html2PdfInstance;
  
    export default html2pdf;
  }