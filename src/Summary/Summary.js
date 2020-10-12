import React from 'react';
import './Summary.css';
import Plane from '../plane/Plane';
import { ReactComponent as SumPlane } from './../assets/svg/plane1.svg';

function Summary() {
  return (
    <div className="summary-component">
      <Plane text="Summary" plane={<SumPlane />} />
      <div className="summary-cloud">
        <ul>
          <li>
            <p>
              Passionate tech enthusiast delivering wide variety of information technology services exceeding client expectations in quality and timeliness, with hands on experience developing software applications and implementing cloud and security solutions.
            </p>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Summary;
