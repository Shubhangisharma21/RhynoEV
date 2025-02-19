import React from 'react';
import './ComparisonTable.css'; // Import the CSS file for styling

const ComparisonTable = () => {
  return (
    <section className="comparison-table-section">
      <h2>Product Comparison</h2>
      <div className="comparison-table">
        <div className="comparison-row header">
          <div className="comparison-cell">Specification</div>
          <div className="comparison-cell">Rhyno SE03 Lite</div>
          <div className="comparison-cell">Rhyno SE03</div>
          <div className="comparison-cell">Rhyno SE03 Max</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Battery</div>
          <div className="comparison-cell">1.8Kwh</div>
          <div className="comparison-cell">2.7Kwh</div>
          <div className="comparison-cell">2.7Kwh</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Battery Features</div>
          <div className="comparison-cell">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</div>
          <div className="comparison-cell">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</div>
          <div className="comparison-cell">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Battery Warranty</div>
          <div className="comparison-cell">3 years</div>
          <div className="comparison-cell">3 years</div>
          <div className="comparison-cell">3 years</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Charging Time</div>
          <div className="comparison-cell">3 hours (12A)</div>
          <div className="comparison-cell">4 hours (12A)</div>
          <div className="comparison-cell">4 hours (12A)</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Motor</div>
          <div className="comparison-cell">1500W</div>
          <div className="comparison-cell">1500W</div>
          <div className="comparison-cell">2000W</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Max Speed</div>
          <div className="comparison-cell">55 km/h</div>
          <div className="comparison-cell">55 km/h</div>
          <div className="comparison-cell">65 km/h</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Warranty on Electronics</div>
          <div className="comparison-cell">1 year</div>
          <div className="comparison-cell">1 year</div>
          <div className="comparison-cell">1 year</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Max Range (@30km/h)</div>
          <div className="comparison-cell">100 km</div>
          <div className="comparison-cell">150 km</div>
          <div className="comparison-cell">120 km</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Max Range (@45km/h)</div>
          <div className="comparison-cell">90 km</div>
          <div className="comparison-cell">110 km</div>
          <div className="comparison-cell">100 km</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Max Range (@Full Speed)</div>
          <div className="comparison-cell">60 km</div>
          <div className="comparison-cell">90 km</div>
          <div className="comparison-cell">80 km</div>
        </div>
        <div className="comparison-row">
          <div className="comparison-cell">Other Key Benefits</div>
          <div className="comparison-cell">Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</div>
          <div className="comparison-cell">Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</div>
          <div className="comparison-cell">Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
