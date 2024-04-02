import React from "react";
import { useState } from "react";

const SegmentProgress = () => {
  const daysDifferenceBetweenDates = (startDate, endDate) => {
    const differenceInMs = endDate - startDate;
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return differenceInDays;
  };

  const segmentStart = new Date("2024-03-13");
  const segmentFinish = new Date("2024-05-21");
  const today = new Date();

  const differenceInDays = daysDifferenceBetweenDates(
    segmentStart,
    segmentFinish
  );

  const daysPassedTillToday = daysDifferenceBetweenDates(segmentStart, today);

  return (
    <div className="flex gap-4 items-end">
      <div>
        <h3 className="uppercase text-sm">Segment Progress</h3>
        <progress
          className="progress progress-warning w-96"
          value={daysPassedTillToday}
          max={differenceInDays}
        ></progress>
      </div>
      <div>
        <p className="text-sm w-96">
          Today is{" "}
          <span className="text-green-500">{daysPassedTillToday} </span> days
          from the <span className="text-green-500">{differenceInDays} </span>{" "}
          days of the segment. That is{" "}
          <span className="text-green-500">
            {(daysPassedTillToday / differenceInDays).toFixed(4)}{" "}
          </span>{" "}
          of the current segment.
        </p>
      </div>
    </div>
  );
};

export default SegmentProgress;
