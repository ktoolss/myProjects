import React, { useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';

const CELL_HEIGHT = 25;  // Adjust these values as per your design requirements
const CELL_WIDTH = 100;

const Spreadsheet = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const rowCount = Math.floor(dimensions.height / CELL_HEIGHT);
  const colCount = Math.floor(dimensions.width / CELL_WIDTH);

  // Create a 2D array filled with null values based on rowCount and colCount
  const data = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(null));

  return (
    <div id="hot-app" style={{ height: '100%', overflow: 'hidden' }}>
      <HotTable
        data={data}
        colHeaders={true}
        rowHeaders={true}
        width={dimensions.width}
        height={dimensions.height}
        autoColumnSize={true}
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
};

export default Spreadsheet;
