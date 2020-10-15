import React from 'react';
import './Summary.css';
import Plane from '../plane/Plane';
import { ReactComponent as SumPlane } from './../assets/svg/plane1.svg';

function Summary() {
  return (
    <div className="summary-component">
      <Plane text="Summary" plane={<SumPlane />} />
        <div className="summary-cloud">
          <div className="summary-cloud-side">
            {/* use preserveAspectRatio="none" in svg */}
          </div>
          <div className="summary-cloud-center">
            <strong>About Me</strong>
            <ul>
              <li>
                <p>
                  Passionate tech enthusiast delivering wide variety of information technology services exceeding client expectations in quality and timeliness, with hands on experience developing software applications and implementing cloud and security solutions.
                </p>
              </li>
              <li>
                <p>
                  My current interests include IT-Security, Cloud Computing, wearable technology devices, Internet of Things(IoT), VR/AR, software development and other technologies integrating hardware and software tools along with human interaction.
                </p>
              </li>
              <li>
                <p>
                  I have participated, mentored, judged and organized 40+ hackathons as I enjoy being continually challenged by my peers and teams that I work with to help me develop new skills and capabilities, and was also recently nominated and selected as <strong>Forbes Under 30</strong> Scholar for 2017.
                </p>
              </li>
              <li>
                <p>
                  I have assisted in the development of AWS Certification Exams by serving as a <strong>Subject Matter Expert</strong> for multiple AWS Certifications, and have also been one of the <strong>Google Cloud Authorized Trainer</strong> to help upskill and deliver GCP training to professionals.
                </p>
              </li>
            </ul>
            <strong>Certifications</strong>
            <ul>
              <li>
                <p>
                  <strong>AWS:</strong> AWS Solutions Architect - <i>Professional</i>, AWS Security - <i>Specialty</i>, AWS Devops Engineer - <i>Professional</i>, AWS Developer - <i>Associate</i>, AWS SysOps Administrator - <i>Associate</i>, AWS Solutions Architect - <i>Associate</i>, AWS Alexa Skills Builder - <i>Specialty</i>, AWS Cloud Practitioner
                </p>
              </li>
              <li>
                <p>
                  <strong>Google Cloud:</strong> Professional Security Engineer, Professional Network Engineer, Professional Solutions Architect, Professional Cloud Developer, Associate Cloud Engineer, GSuite, Authorized Trainer
                </p>
              </li>
              <li>
                <p>
                  <strong>Oracle Cloud:</strong> Solutions Architect Associate, Foundations Associate
                </p>
              </li>
              <li>
                <p>
                  <strong>Docker:</strong> Certified Associate
                </p>
              </li>
              <li>
                <p>
                  <strong>HashiCorp:</strong> Terraform Associate
                </p>
              </li>
              <li>
                <p>
                  <strong>Aviatrix:</strong> Multi-Cloud Networking Associate
                </p>
              </li>
            </ul>
          </div>
          <div className="summary-cloud-side">
          
          </div>
      </div>
    </div>

  );
}

export default Summary;
