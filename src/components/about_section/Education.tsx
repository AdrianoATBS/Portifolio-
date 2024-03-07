import React from "react"; // Add the missing import statement for React
import { info } from "../../data/info"; // Import the info object from the data/info file

interface EducationProps {
  education: (typeof info)["about"]["education"]; // Create an interface for the props
}

export default function Education(props: EducationProps) {
  const { education } = props;

  return education.length == 0 ? (
    <div></div>
  ) : (
    <div className="flex flex-col space-y-4 w-full lg:w-1/2 mx-4">
      <h1 className="text-3xl font-bold">Education</h1>
      {education.map((edu, index) => (
        <div className="flex flex-col space-y-2 relative" key={index}>
          <div className="flex items-center space-x-2">
            <i className="fas fa-graduation-cap text-2xl text-secondary dark:text-dk-secondary dark:hover:text-dk-accent hover:text-accent z-10"></i>
            <h2 className="text-2xl font-semibold">{edu.title}</h2>
          </div>
          <div className="relative left-10">
            <p className="text-xl font-normal">{edu.date}</p>
            <p className="text-xl font-normal">{edu.location}</p>
            {edu.gpa && <p className="text-xl font-normal">GPA: {edu.gpa}</p>}
            {edu.thesis && (
              <p className="text-xl font-normal">Thesis: {edu.thesis}</p>
            )}
          </div>

          {index !== education.length - 1 && (
            <div className="absolute top-4 left-3 h-full w-1 bg-secondary dark:bg-dk-secondary"></div>
          )}
        </div>
      ))}
    </div>
  );
}