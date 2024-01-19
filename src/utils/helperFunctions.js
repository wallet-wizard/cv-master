

export function getColumnsUsed(textarea) {
    const value = textarea.value;
    const cols = textarea.cols;
  
    const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);
    const charactersPerLine = Math.floor(textarea.clientWidth / (textarea.scrollWidth / value.length));
    const columnsUsed = Math.ceil(value.length / charactersPerLine);
  
    return columnsUsed;
  }