import React from 'react';
import './Passes.scss';

const Passes = ({ playerStatistics }) => (
  <div className="col-span-4">
    <h4 className="text-center font-bold bg-gray-100 mb-2 p-2">Passes</h4>
    <div className="grid grid-cols-10 py-4 pb-6">
      <div className="col-span-2 text-gray-600 leading-tight  pl-4">
        <div className="text-base leading-none">
          <span className="text-4xl font-bold ">L</span>
          <span>eft Foot</span>
        </div>
        <div className=" text-5xl self-center text-gray-400 font-bold">
          {playerStatistics.left_foot_passes}
        </div>
      </div>

      <div className="col-span-6 justify-end ">
        <div className="font-bold self-center text-center ">
          <p>
            Total Passes:
            <span className=" text-4xl font-bold  text-gray-400">
              {playerStatistics.passes}
            </span>{' '}
          </p>
          <ul className="horizontal-bar-chart pt-4">
            <li>
              <span
                className="index"
                style={{
                  width: `${
                    (playerStatistics.completed_passes /
                      playerStatistics.passes) *
                    100
                  }% `,
                }}
              >
                {playerStatistics.completed_passes} completed
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 justify-end pr-4">
        <div className="text-base text-gray-600 leading-none text-right">
          <span className="text-4xl font-bold">R</span>
          <span>ight Foot</span>
        </div>
        <div className="text-right text-5xl font-bold  text-gray-400 ">
          {playerStatistics.right_foot_passes}
        </div>
      </div>
    </div>
  </div>
);

export { Passes };
