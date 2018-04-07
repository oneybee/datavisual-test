import React, {component} from 'react';
import './InfoBanner.scss';

export default function InfoBannerComponent() {
  return (
    <div className="info-banner row">
      <a className="section-title"><p>2015-2016 분데스리가</p></a>
      <div className="item item-01 col-6">
        <div className="item-inner">
          <h1>15-16</h1>
          <p>리그 34경기</p>
        </div>
      </div>
      <div className="item item-02 col-6">
        <div className="item-inner">
          <h1>챔피언</h1>
          <p>Bayern</p>
        </div>
      </div>
    </div>
  );
}
